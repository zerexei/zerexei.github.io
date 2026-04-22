import React, { useState, useEffect } from 'react';
import { Section } from '../components/common/Section';
import { db } from '../utils/database';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import { useAuth } from '../utils/useAuth';
import { cn } from '../utils/cn';
import { ChevronRight, RotateCcw, Tag, Award, Brain, Send, Loader2, Sparkles } from 'lucide-react';

interface Card {
  id: string;
  question: string;
  fixedAnswer: string;
  questionPrompt: string;
  tags: string[];
  difficulty: number;
}

export const Flashcards: React.FC = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Deep Mode State
  const [isDeepMode, setIsDeepMode] = useState(() => {
    const saved = localStorage.getItem('deepMode');
    return saved === 'true';
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [isValidating, setIsValidating] = useState(false);
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
    if (user) {
      fetchCards();
    }
  }, [user]);

  const fetchCards = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, 'cards'));
      const snapshot = await getDocs(q);
      let fetchedCards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Card));
      
      if (fetchedCards.length === 0) {
        // Seed some cards if user has none
        await seedInitialCards();
        return; // seedInitialCards will trigger another fetch if I want, or just set them
      }
      
      setCards(fetchedCards);
    } catch (error) {
      console.error('Error fetching cards:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const seedInitialCards = async () => {
    const initialCards = [
      {
        question: 'What is the difference between a controlled and uncontrolled component in React?',
        fixedAnswer: 'A controlled component is one where React is in charge of the state and is the single source of truth for the data. An uncontrolled component is one where the form data is handled by the DOM itself.',
        questionPrompt: 'Explain the difference between controlled and uncontrolled components.',
        tags: ['React', 'Frontend'],
        difficulty: 2,
        userId: user?.uid,
        createdAt: serverTimestamp()
      },
      {
        question: 'What is a closure in JavaScript?',
        fixedAnswer: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function\'s scope from an inner function.',
        questionPrompt: 'Define closures in JS.',
        tags: ['JavaScript', 'Fundamentals'],
        difficulty: 3,
        userId: user?.uid,
        createdAt: serverTimestamp()
      }
    ];

    try {
      for (const card of initialCards) {
        await addDoc(collection(db, 'cards'), card);
      }
      await fetchCards();
    } catch (error) {
      console.error('Error seeding cards:', error);
    }
  };

  const getRandomCard = () => {
    if (cards.length === 0) return null;
    if (cards.length === 1) return cards[0];

    let nextCard: Card;
    do {
      const randomIndex = Math.floor(Math.random() * cards.length);
      nextCard = cards[randomIndex];
    } while (currentCard && nextCard.id === currentCard.id);

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
    setIsValidating(false);
  };

  const simulateAiValidation = () => {
    if (!userAnswer.trim()) return;
    
    setIsValidating(true);
    setAiResponse(null);

    // Simulate network delay
    setTimeout(() => {
      const mockResponse = {
        score: Math.floor(Math.random() * 2) + 3, // 3 or 4 or 5
        correct: [
          'You correctly identified the core concept.',
          'Your explanation of the syntax was accurate.'
        ],
        missing: [
          'You could have mentioned the edge cases regarding performance.',
          'The link to the specific hook was missing.'
        ],
        suggestion: 'Try to use more technical terminology like "reconciliation" or "closure scope" to sound more expert.'
      };
      
      setAiResponse(mockResponse);
      setIsValidating(false);
      setIsRevealed(true);
    }, 1500);
  };

  if (isLoading) {
    return (
      <Section className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent" size={48} />
      </Section>
    );
  }

  return (
    <Section id="flashcards" className="min-h-[80vh] flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-2xl px-6">
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
            <div className="flex justify-end">
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
                      onClick={simulateAiValidation}
                      disabled={!userAnswer.trim() || isValidating}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isValidating ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Analyzing with AI...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Submit for AI Review
                        </>
                      )}
                    </button>
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
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};
