import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore/lite';
import { db } from '@/utils/database';
import { Flashcard, FlashcardInput } from '../types/flashcard.types';

const COLLECTION_NAME = 'cards';

export const flashcardService = {
  async getFlashcards(): Promise<Flashcard[]> {
    const q = query(collection(db, COLLECTION_NAME));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Flashcard));
  },

  async getActiveFlashcards(): Promise<Flashcard[]> {
    const q = query(
      collection(db, COLLECTION_NAME), 
      where('isActive', '==', true)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Flashcard));
  },

  async createFlashcard(card: FlashcardInput): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...card,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  },

  async updateFlashcard(id: string, card: Partial<FlashcardInput>): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...card,
      updatedAt: serverTimestamp()
    });
  },

  async deleteFlashcard(id: string): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  }
};
