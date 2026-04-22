import React, { useState, useEffect } from 'react';
import { Section } from '../components/common/Section';
import { db } from '../utils/database';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import { useAuth } from '../utils/useAuth';
import { cn } from '../utils/cn';
import { ChevronRight, RotateCcw, Tag, Award, Brain, Send, Loader2, Sparkles, Plus, X as CloseIcon } from 'lucide-react';

interface Card {
  id: string;
  question: string;
  fixedAnswer: string;
  questionPrompt: string;
  tags: string[];
  difficulty: number;
  cardType: 'recall' | 'understanding' | 'structure' | 'fill-in';
}

const ADMIN_UID = import.meta.env.VITE_ADMIN_UID;

const TAG_CATEGORIES = {
  "Study Plan": ["Study Plan"],
  "Coding Question Practice": ["Coding Practice"],
  "Topics of Study": [
    "Big-O / Complexity",
    "Arrays", "Linked List", "Stack", "Queue", "Hash Table",
    "BST", "Trees", "Heaps",
    "Sorting",
    "Graphs", "BFS", "DFS",
    "Recursion",
    "Dynamic Programming",
    "Design Patterns",
    "Math & Algorithms",
    "OS", "Networking", "Concurrency"
  ],
  "Final Review": ["Final Review"],
  "Optional Topics": ["Optional"]
};

export const Flashcards: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.uid === ADMIN_UID;
  
  const [cards, setCards] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // New Card Form State
  const [newCard, setNewCard] = useState({
    question: '',
    fixedAnswer: '',
    questionPrompt: '',
    tags: [] as string[],
    difficulty: 3,
    cardType: 'recall' as Card['cardType']
  });

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

  const filteredCards = selectedTags.length > 0 
    ? cards.filter(card => card.tags.some(tag => selectedTags.includes(tag)))
    : cards;

  const fetchCards = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, 'cards'));
      const snapshot = await getDocs(q);
      let fetchedCards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Card));
      
      if (fetchedCards.length === 0) {
        // Seed some cards if user has none
        await seedInitialCards();
        return; 
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
        tags: ['React', 'Frontend', 'Study Plan'],
        difficulty: 2,
        cardType: 'understanding',
        userId: user?.uid,
        createdAt: serverTimestamp()
      },
      {
        question: 'What is a closure in JavaScript?',
        fixedAnswer: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function\'s scope from an inner function.',
        questionPrompt: 'Define closures in JS.',
        tags: ['JavaScript', 'Fundamentals', 'Recursion'],
        difficulty: 3,
        cardType: 'recall',
        userId: user?.uid,
        createdAt: serverTimestamp()
      },
      {
        question: 'What is the time complexity of QuickSort in the average case?',
        fixedAnswer: 'O(n log n). QuickSort uses a divide-and-conquer strategy, partitioning the array around a pivot.',
        questionPrompt: 'State the average time complexity of QuickSort.',
        tags: ['Sorting', 'Big-O / Complexity', 'Coding Practice'],
        difficulty: 2,
        cardType: 'recall',
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

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin || !user) return;

    try {
      await addDoc(collection(db, 'cards'), {
        ...newCard,
        userId: user.uid,
        createdAt: serverTimestamp()
      });
      setIsCreateOpen(false);
      setNewCard({
        question: '',
        fixedAnswer: '',
        questionPrompt: '',
        tags: [],
        difficulty: 3,
        cardType: 'recall'
      });
      fetchCards();
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  const getRandomCard = () => {
    if (filteredCards.length === 0) return null;
    if (filteredCards.length === 1) return filteredCards[0];

    let nextCard: Card;
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

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
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
      <div className="w-full max-w-2xl px-6 relative">
        {/* Admin Actions */}
        <div className="absolute -top-12 right-6 flex items-center gap-4">
          {!hasStarted && isAdmin && (
            <button 
              onClick={() => setIsCreateOpen(!isCreateOpen)}
              className={cn(
                "p-2 rounded-xl border transition-all duration-300",
                isCreateOpen ? "bg-accent border-accent text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700"
              )}
            >
              <Plus size={20} />
            </button>
          )}
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

        {/* Create Card Panel (Floating) */}
        {isCreateOpen && isAdmin && (
          <div className="absolute top-0 right-6 w-full max-w-lg p-8 bg-zinc-900/98 backdrop-blur-2xl border border-zinc-800 rounded-3xl animate-slide-up space-y-6 z-[70] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-accent/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plus size={18} className="text-accent" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">New Flashcard</h3>
              </div>
              <button onClick={() => setIsCreateOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <CloseIcon size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateCard} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Question</label>
                <textarea
                  required
                  value={newCard.question}
                  onChange={e => setNewCard({...newCard, question: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50 min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fixed Answer</label>
                <textarea
                  required
                  value={newCard.fixedAnswer}
                  onChange={e => setNewCard({...newCard, fixedAnswer: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50 min-h-[80px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Question Prompt</label>
                  <input
                    required
                    value={newCard.questionPrompt}
                    onChange={e => setNewCard({...newCard, questionPrompt: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Card Type</label>
                  <select
                    value={newCard.cardType}
                    onChange={e => setNewCard({...newCard, cardType: e.target.value as any})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50"
                  >
                    <option value="recall">Recall</option>
                    <option value="understanding">Understanding</option>
                    <option value="structure">Structure</option>
                    <option value="fill-in">Fill-in</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Tags (Select Multiple)</label>
                <div className="max-h-40 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
                  {Object.entries(TAG_CATEGORIES).map(([category, tags]) => (
                    <div key={category} className="space-y-2">
                      <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                          <button
                            type="button"
                            key={tag}
                            onClick={() => {
                              const tags = newCard.tags.includes(tag)
                                ? newCard.tags.filter(t => t !== tag)
                                : [...newCard.tags, tag];
                              setNewCard({...newCard, tags});
                            }}
                            className={cn(
                              "px-2 py-1 text-[9px] font-bold rounded-lg border transition-all duration-200",
                              newCard.tags.includes(tag)
                                ? "bg-accent/20 border-accent text-accent"
                                : "bg-zinc-800/30 border-zinc-700/50 text-zinc-500 hover:border-zinc-600"
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

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,45,32,0.2)]"
              >
                Create Flashcard
              </button>
            </form>
          </div>
        )}

        {/* Filter Panel (Floating) */}
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
