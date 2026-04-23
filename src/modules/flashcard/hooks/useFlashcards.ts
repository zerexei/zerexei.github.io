import { useState, useCallback } from 'react';
import { Flashcard, FlashcardInput } from '../types/flashcard.types';
import { flashcardService } from '../services/flashcardService';

export const useFlashcards = () => {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCards = useCallback(async (onlyActive = false) => {
    setLoading(true);
    setError(null);
    try {
      const data = onlyActive 
        ? await flashcardService.getActiveFlashcards()
        : await flashcardService.getFlashcards();
      setCards(data);
    } catch (err) {
      setError('Failed to fetch flashcards');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const createCard = async (card: FlashcardInput) => {
    setLoading(true);
    try {
      await flashcardService.createFlashcard(card);
      await fetchCards();
    } catch (err) {
      setError('Failed to create flashcard');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateCard = async (id: string, card: Partial<FlashcardInput>) => {
    setLoading(true);
    try {
      await flashcardService.updateFlashcard(id, card);
      setCards(prev => prev.map(c => c.id === id ? { ...c, ...card } : c));
    } catch (err) {
      setError('Failed to update flashcard');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteCard = async (id: string) => {
    setLoading(true);
    try {
      await flashcardService.deleteFlashcard(id);
      setCards(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      setError('Failed to delete flashcard');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (id: string, currentState: boolean) => {
    await updateCard(id, { isActive: !currentState });
  };

  return {
    cards,
    loading,
    error,
    fetchCards,
    createCard,
    updateCard,
    deleteCard,
    toggleActive
  };
};
