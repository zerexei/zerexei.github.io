# Flashcard Module

## Module Overview
The **Flashcard Module** is a self-contained, feature-rich system designed for managing and studying technical concepts. It serves as a core learning tool within the application, specifically tailored for technical interview preparation and knowledge retention. 

By separating administrative management from the active study interface, it provides a clean workflow for content creators and a focused experience for learners.

## Features
- **Full Inventory Management**: Create, Read, Update, and Delete (CRUD) technical flashcards via a dedicated Admin Dashboard.
- **AI-Powered Evaluation (Deep Mode)**: Leverages the **Google Gemini API** to provide real-time, structured feedback on open-ended answers.
- **Study Filters**: Filter cards by categories (e.g., Data Structures, System Design) and tags.
- **Difficulty Tracking**: Level-based cards (1–5) to track complexity.
- **Activation System**: Quickly toggle card visibility without deleting records.
- **Responsive Gameplay**: A fluid, animation-driven interface for active recall.

## Folder Structure
```text
src/modules/flashcard/
├── admin/
│   ├── FlashcardAdminPage.tsx     # Admin dashboard and card list
│   └── components/
│       └── FlashcardForm.tsx      # Reusable form for Create/Edit
├── game/
│   └── FlashcardGamePage.tsx      # Active study and "Deep Mode" interface
├── hooks/
│   └── useFlashcards.ts           # Custom hook for state & Firestore sync
├── services/
│   └── flashcardService.ts        # Firestore abstraction/service layer
└── types/
    └── flashcard.types.ts         # TypeScript interfaces and constants
```

## Core Concepts

### Spaced Learning & Active Recall
The module encourages active recall through its "Deep Mode" feature, where users are prompted to type out answers rather than just flipping a card.

### AI Evaluation Logic
When a user submits an answer in Deep Mode, the system:
1. Constructs a detailed prompt including the question, the "fixed" (expected) answer, and the user's input.
2. Sends the prompt to the **Gemini 1.5 Flash** model.
3. Parses a strict JSON response containing a score (1–5), correct points, missing points, and suggestions.

### Module Synchronization
The `useFlashcards` hook acts as a bridge between the React components and the `flashcardService`. It manages loading states, error handling, and ensures that the local UI state matches the remote Firestore collection.

## API / Public Interfaces

### `useFlashcards()`
The primary hook for interacting with flashcard data.
```typescript
const { 
  cards, 
  loading, 
  fetchCards, 
  createCard, 
  updateCard, 
  deleteCard, 
  toggleActive 
} = useFlashcards();
```

### `flashcardService`
The low-level service for Firestore operations.
- `getFlashcards()`: Fetches all cards.
- `getActiveFlashcards()`: Fetches only cards where `isActive === true`.
- `createFlashcard(card: FlashcardInput)`: Persists a new card.

### `Flashcard` Interface
```typescript
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
```

## Usage

### Routing
The module is typically integrated via `App.tsx`:
- `/cards`: Links to `FlashcardGamePage`.
- `/admin/cards`: Links to `FlashcardAdminPage` (requires Admin UID check).

### Integration Example
```tsx
import { FlashcardGamePage } from '@/modules/flashcard/game/FlashcardGamePage';

// Inside your Router
<Route path="/cards" element={<FlashcardGamePage />} />
```

## Dependencies
- **Firebase Firestore (Lite)**: For persistent storage of card data.
- **Google Generative AI SDK**: For the "Deep Mode" evaluation engine.
- **Lucide React**: For consistent iconography.
- **Tailwind CSS**: For the modular design system.

## Environment Variables

The AI evaluation feature requires a Google Gemini API key. Ensure the following variable is defined in your root `.env` file:

```env
VITE_GOOGLE_GEN_AI_KEY=your_google_gemini_api_key
```

## Extending the Module

### Adding New Card Types
To add a new card type (e.g., 'coding-challenge'):
1. Update the `cardType` union in `flashcard.types.ts`.
2. Add the corresponding logic in the `FlashcardForm` dropdown.
3. Update the Gemini prompt in `FlashcardGamePage` to handle the new type context.

### Changing the AI Model
Modify `src/utils/useModel.ts` to point to a different Gemini model or adjust the `thinkingConfig`.

## Notes / Considerations
- **Firestore Lite**: The module uses the Lite SDK to keep the bundle size small; real-time listeners (snapshots) are not used by design.
- **Stateless AI**: Evaluation results are ephemeral and are not stored in Firestore to protect user privacy and reduce database bloat.
- **Admin Access**: Admin routes must be guarded using the `ADMIN_UID` check in the application's auth logic.
