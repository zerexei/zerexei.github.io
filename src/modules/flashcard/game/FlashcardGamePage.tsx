import React, { useState, useEffect, useMemo } from 'react';
import { Section } from '@/components/common/Section';
import { useAuth } from '@/utils/useAuth';
import { cn } from '@/utils/cn';
import { 
  ChevronRight, 
  RotateCcw, 
  Tag, 
  Award, 
  Brain, 
  Send, 
  Loader2, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';
import { useFlashcards } from '../hooks/useFlashcards';
import { Flashcard, TAG_CATEGORIES } from '../types/flashcard.types';
import { Link } from 'react-router-dom';
import { useModel } from '@/utils/useModel';

export const FlashcardGamePage: React.FC = () => {
  const { isAdmin } = useAuth();
  
  const { cards, loading, fetchCards } = useFlashcards();
  const [currentCard, setCurrentCard] = useState<Flashcard | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Deep Mode State
  const [isDeepMode, setIsDeepMode] = useState(() => {
    const saved = localStorage.getItem('deepMode');
    return saved === 'true';
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [aiResponse, setAiResponse] = useState<{
    score: number;
    correct: string[];
    missing: string[];
    suggestion: string;
  } | null>(null);

  useEffect(() => {
    localStorage.setItem('deepMode', isDeepMode.toString());
  }, [isDeepMode]);

  useEffect(() => {
    fetchCards(true); // Only active cards
  }, [fetchCards]);

  const filteredCards = useMemo(() => {
    return selectedTags.length > 0 
      ? cards.filter(card => card.tags.some(tag => selectedTags.includes(tag)))
      : cards;
  }, [cards, selectedTags]);

  const getRandomCard = () => {
    if (filteredCards.length === 0) return null;
    if (filteredCards.length === 1) return filteredCards[0];

    let nextCard: Flashcard;
    do {
      const randomIndex = Math.floor(Math.random() * filteredCards.length);
      nextCard = filteredCards[randomIndex];
    } while (currentCard && nextCard.id === currentCard.id && filteredCards.length > 1);

    return nextCard;
  };

  const handleStart = () => {
    const card = getRandomCard();
    setCurrentCard(card);
    setHasStarted(true);
    resetCardState();
  };

  const handleNext = () => {
    const card = getRandomCard();
    setCurrentCard(card);
    resetCardState();
  };

  const resetCardState = () => {
    setIsRevealed(false);
    setUserAnswer('');
    setAiResponse(null);
  };

  const model = useModel();
  
  const aiValidation = async () => {
    if (!userAnswer.trim() || !currentCard) return;
    
    setAiResponse(null);
    
    const prompt = `
      Evaluate the following flashcard answer.
      Question: ${currentCard.question}
      Expected Answer: ${currentCard.fixedAnswer}
      User's Answer: ${userAnswer}
      Card Type: ${currentCard.cardType}
      Difficulty: ${currentCard.difficulty}
      Tags: ${currentCard.tags.join(', ')}

      Return a JSON object in this format:
      {
        "score": number (1-5),
        "correct": string[],
        "missing": string[],
        "suggestion": string
      }
      Return ONLY the JSON object. No markdown code blocks, no extra explanation. Be strict but fair in scoring.
    `;

    try {
      const response = await model.generate(prompt);
      
      // Clean and parse response
      const cleanJson = response.replace(/```json|```/g, '').trim();
      const result = JSON.parse(cleanJson);
      
      if (result.score && result.suggestion) {
        setAiResponse(result);
        setIsRevealed(true);
      }
    } catch (err) {
      console.error('AI evaluation failed:', err);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  if (loading && cards.length === 0) {
    return (
      <Section className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent" size={48} />
      </Section>
    );
  }

  return (
    <Section id="flashcards" className="min-h-[80vh] flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-2xl px-6 relative">
        {/* Settings Toggle */}
        <div className="absolute -top-12 right-6 flex items-center gap-4">
          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className={cn(
              "p-2 rounded-xl border transition-all duration-300",
              isSettingsOpen ? "bg-accent border-accent text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700"
            )}
          >
            <Brain size={20} />
          </button>
        </div>

        {/* Filter Panel */}
        {isSettingsOpen && (
          <div className="absolute top-0 right-6 w-full max-w-sm p-6 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-3xl animate-slide-up space-y-6 z-[60] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-accent/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain size={16} className="text-accent" />
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Study Filters</h3>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setSelectedTags([])}
                  className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest font-bold transition-colors"
                >
                  Clear
                </button>
                <button 
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
              {Object.entries(TAG_CATEGORIES).map(([category, tags]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={cn(
                          "px-2.5 py-1.5 text-[9px] font-bold rounded-lg border transition-all duration-200",
                          selectedTags.includes(tag)
                            ? "bg-accent/20 border-accent text-accent"
                            : "bg-zinc-800/50 border-zinc-700/50 text-zinc-400 hover:border-zinc-600"
                        )}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!hasStarted ? (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Technical <span className="text-accent">Flashcards</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-md mx-auto">
                Test your knowledge with these quick technical questions. Powered by your personalized collection.
              </p>
            </div>
            <button
              onClick={handleStart}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-accent rounded-full hover:bg-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,45,32,0.2)] hover:shadow-[0_0_30px_rgba(255,45,32,0.4)] hover:-translate-y-1"
            >
              Start Session
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Deep Mode Toggle */}
            <div className="flex justify-end ">
              <button 
                onClick={() => setIsDeepMode(!isDeepMode)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-xs font-bold uppercase tracking-wider",
                  isDeepMode 
                    ? "bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(255,45,32,0.1)]" 
                    : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                )}
              >
                <Brain size={14} />
                Deep Mode {isDeepMode ? 'On' : 'Off'}
              </button>
            </div>

            {/* Card UI */}
            <div 
              className={cn(
                "relative min-h-[350px] w-full p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm flex flex-col justify-center transition-all duration-500",
                (isRevealed || aiResponse) ? "border-accent/30 shadow-[0_0_40px_rgba(255,45,32,0.05)]" : ""
              )}
            >
              <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-4 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
                <span className="flex items-center gap-1">
                  <Award size={12} className="text-accent" />
                  Difficulty: {currentCard?.difficulty}/5
                </span>
              </div>

              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-accent font-bold">
                    {currentCard?.questionPrompt}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                    {currentCard?.question}
                  </h2>
                </div>

                {/* Deep Mode Input */}
                {isDeepMode && !isRevealed && !aiResponse && (
                  <div className="pt-4 space-y-4 animate-slide-up">
                    <textarea
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Type your answer here..."
                      className="w-full h-32 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-zinc-300 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    />
                    <button
                      onClick={aiValidation}
                      disabled={!userAnswer.trim() || model.loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {model.loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Evaluating your answer...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Submit for AI Review
                        </>
                      )}
                    </button>

                    {model.error && (
                      <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs text-center animate-shake">
                        Something went wrong. Please try again.
                      </div>
                    )}
                  </div>
                )}

                {/* AI Response Display */}
                {aiResponse && (
                  <div className="pt-8 border-t border-zinc-800 text-left space-y-6 animate-slide-up">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-accent font-bold">
                        <Sparkles size={18} />
                        <span className="uppercase tracking-widest text-xs">AI Evaluation</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        Score: {aiResponse.score}/5
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">What's correct:</h4>
                        <ul className="text-sm text-zinc-400 space-y-1 list-disc pl-4">
                          {aiResponse.correct.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-rose-400 uppercase tracking-widest">What's missing:</h4>
                        <ul className="text-sm text-zinc-400 space-y-1 list-disc pl-4">
                          {aiResponse.missing.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-accent/5 border border-accent/10 rounded-xl">
                      <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Suggestion:</h4>
                      <p className="text-sm text-zinc-300 italic">"{aiResponse.suggestion}"</p>
                    </div>
                  </div>
                )}

                {/* Fixed Answer Reveal */}
                {isRevealed && !aiResponse && (
                  <div className="pt-8 border-t border-zinc-800 animate-slide-up">
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      {currentCard?.fixedAnswer}
                    </p>
                  </div>
                )}
              </div>

              <div className="absolute bottom-6 left-0 right-0 px-8 flex flex-wrap justify-center gap-2">
                {currentCard?.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] bg-zinc-800 text-zinc-400 rounded-full flex items-center gap-1 border border-zinc-700/50">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {(!isRevealed && !aiResponse && !isDeepMode) && (
                <button
                  onClick={() => setIsRevealed(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-zinc-800 border border-zinc-700 rounded-2xl hover:bg-zinc-700 transition-all duration-200"
                >
                  Reveal Answer
                </button>
              )}

              {(isRevealed || aiResponse) && (
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-white bg-accent rounded-2xl hover:bg-accent/90 transition-all duration-200 group"
                >
                  Next Card
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              
              <button
                onClick={() => {
                  setHasStarted(false);
                  resetCardState();
                }}
                className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <RotateCcw size={14} />
                Reset session
              </button>
            </div>
          </div>
        )}

        {/* Admin entry UI */}
        {isAdmin && (
          <div className="mt-20 pt-8 border-t border-zinc-800/50 flex justify-center animate-fade-in">
            <Link 
              to="/admin/cards"
              className="group flex items-center gap-3 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-accent/30 rounded-2xl transition-all duration-300"
            >
              <div className="p-2 bg-zinc-800 group-hover:bg-accent/10 rounded-lg transition-colors">
                <ShieldCheck size={18} className="text-zinc-400 group-hover:text-accent" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">Administrator</p>
                <p className="text-sm font-bold text-white group-hover:text-accent transition-colors">Manage Cards →</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </Section>
  );
};
