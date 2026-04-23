export interface Flashcard {
  id: string;
  question: string;
  fixedAnswer: string;
  questionPrompt: string;
  tags: string[];
  difficulty: number;
  cardType: 'recall' | 'understanding' | 'structure' | 'fill-in';
  isActive: boolean;
}

export type FlashcardInput = Omit<Flashcard, 'id'>;

export const TAG_CATEGORIES = {
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
