import React, { useEffect, useState } from 'react';
import { Section } from '@/components/common/Section';
import { useFlashcards } from '../hooks/useFlashcards';
import { Flashcard, FlashcardInput } from '../types/flashcard.types';
import { FlashcardForm } from './components/FlashcardForm';
import { cn } from '@/utils/cn';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Tag, 
  Award, 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  Search,
  ChevronLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FlashcardAdminPage: React.FC = () => {
  const { cards, loading, fetchCards, createCard, updateCard, deleteCard, toggleActive } = useFlashcards();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<Flashcard | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const handleCreate = async (data: FlashcardInput) => {
    await createCard(data);
    setIsFormOpen(false);
  };

  const handleUpdate = async (data: FlashcardInput) => {
    if (editingCard) {
      await updateCard(editingCard.id, data);
      setEditingCard(undefined);
      setIsFormOpen(false);
    }
  };

  const filteredCards = cards.filter(card => 
    card.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Section id="admin-cards" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <button 
              onClick={() => navigate('/cards')}
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-4"
            >
              <ChevronLeft size={14} />
              Back to Game
            </button>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Card <span className="text-accent">Management</span>
            </h1>
            <p className="text-zinc-500 text-sm">Manage your technical flashcard collection</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <input 
                type="text"
                placeholder="Search cards or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accent/50 w-full md:w-64 transition-all"
              />
            </div>
            <button 
              onClick={() => {
                setEditingCard(undefined);
                setIsFormOpen(true);
              }}
              className="bg-accent hover:bg-accent/90 text-white p-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(255,45,32,0.2)]"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* List */}
        {loading && cards.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-accent" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredCards.map(card => (
              <div 
                key={card.id}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5",
                        card.isActive 
                          ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" 
                          : "bg-zinc-800 text-zinc-500 border border-zinc-700"
                      )}>
                        {card.isActive ? <CheckCircle2 size={10} /> : <XCircle size={10} />}
                        {card.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-1">
                        <Award size={10} />
                        Diff: {card.difficulty}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                        {card.cardType}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-white font-medium text-lg line-clamp-2 leading-snug">
                        {card.question}
                      </h3>
                      <p className="text-zinc-500 text-sm mt-2 line-clamp-1 italic">
                        {card.fixedAnswer}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {card.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-[9px] font-bold text-zinc-400 flex items-center gap-1">
                          <Tag size={8} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-start">
                    <button 
                      onClick={() => toggleActive(card.id, card.isActive)}
                      title={card.isActive ? "Deactivate" : "Activate"}
                      className={cn(
                        "p-2 rounded-lg border transition-all",
                        card.isActive 
                          ? "bg-emerald-400/10 border-emerald-400/20 text-emerald-400 hover:bg-emerald-400/20" 
                          : "bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-white"
                      )}
                    >
                      {card.isActive ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                    </button>
                    <button 
                      onClick={() => {
                        setEditingCard(card);
                        setIsFormOpen(true);
                      }}
                      className="p-2 bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => {
                        if (confirm('Delete this card?')) deleteCard(card.id);
                      }}
                      className="p-2 bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-rose-400 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredCards.length === 0 && !loading && (
              <div className="text-center py-20 border-2 border-dashed border-zinc-800 rounded-3xl">
                <p className="text-zinc-500 font-medium">No cards found matching your search.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Overlay Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          />
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <FlashcardForm 
              title={editingCard ? "Edit Flashcard" : "New Flashcard"}
              initialData={editingCard}
              onSubmit={editingCard ? handleUpdate : handleCreate}
              onCancel={() => setIsFormOpen(false)}
            />
          </div>
        </div>
      )}
    </Section>
  );
};
