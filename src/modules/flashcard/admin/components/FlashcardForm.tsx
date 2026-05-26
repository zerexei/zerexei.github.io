import React, { useState } from 'react';
import { Flashcard, FlashcardInput, TAG_CATEGORIES } from '../../types/flashcard.types';
import { cn } from '@/utils/cn';
import { X as CloseIcon, Plus } from 'lucide-react';

interface FlashcardFormProps {
  initialData?: Flashcard;
  onSubmit: (data: FlashcardInput) => Promise<void>;
  onCancel: () => void;
  title: string;
}

export const FlashcardForm: React.FC<FlashcardFormProps> = ({ 
  initialData, 
  onSubmit, 
  onCancel,
  title 
}) => {
  const [formData, setFormData] = useState<FlashcardInput>({
    question: initialData?.question || '',
    fixedAnswer: initialData?.fixedAnswer || '',
    questionPrompt: initialData?.questionPrompt || '',
    tags: initialData?.tags || [],
    difficulty: initialData?.difficulty || 3,
    cardType: initialData?.cardType || 'recall',
    isActive: initialData?.isActive ?? true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.question.trim() || !formData.fixedAnswer.trim()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Plus size={18} className="text-accent" />
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">{title}</h3>
        </div>
        <button onClick={onCancel} className="text-zinc-500 hover:text-white transition-colors">
          <CloseIcon size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Question</label>
          <textarea
            required
            value={formData.question}
            onChange={e => setFormData({ ...formData, question: e.target.value })}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50 min-h-[80px]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fixed Answer</label>
          <textarea
            required
            value={formData.fixedAnswer}
            onChange={e => setFormData({ ...formData, fixedAnswer: e.target.value })}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50 min-h-[80px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Question Prompt</label>
            <input
              required
              value={formData.questionPrompt}
              onChange={e => setFormData({ ...formData, questionPrompt: e.target.value })}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Card Type</label>
            <select
              value={formData.cardType}
              onChange={e => setFormData({ ...formData, cardType: e.target.value as any })}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50"
            >
              <option value="recall">Recall</option>
              <option value="understanding">Understanding</option>
              <option value="structure">Structure</option>
              <option value="fill-in">Fill-in</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Difficulty (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={formData.difficulty}
              onChange={e => setFormData({ ...formData, difficulty: parseInt(e.target.value) })}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-accent/50"
            />
          </div>
          <div className="flex items-center gap-4 pt-6">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={e => setFormData({ ...formData, isActive: e.target.checked })}
                  className="sr-only"
                />
                <div className={cn(
                  "w-10 h-5 rounded-full transition-colors duration-300",
                  formData.isActive ? "bg-accent" : "bg-zinc-800"
                )}></div>
                <div className={cn(
                  "absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform duration-300",
                  formData.isActive ? "translate-x-5" : "translate-x-0"
                )}></div>
              </div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
                Active Card
              </span>
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Tags</label>
          <div className="max-h-40 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
            {Object.entries(TAG_CATEGORIES).map(([category, tags]: [string, string[]]) => (
              <div key={category} className="space-y-2">
                <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={cn(
                        "px-2 py-1 text-[9px] font-bold rounded-lg border transition-all duration-200",
                        formData.tags.includes(tag)
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

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-bold transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-2 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,45,32,0.2)] disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : initialData ? 'Update Card' : 'Create Card'}
          </button>
        </div>
      </form>
    </div>
  );
};
