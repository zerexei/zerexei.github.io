# Portfolio & SWE Flashcards

A professional portfolio website built to showcase personal projects, technical skills, and experience. This application includes an integrated Software Engineering (SWE) Flashcard module designed for active learning and interview preparation.

## Features

- **Responsive Portfolio**: A modern, mobile-friendly interface showcasing professional experience and projects.
- **Secure Authentication**: Integrated Google Authentication via Firebase for personalized access.
- **Dynamic Content**: Data-driven components powered by Cloud Firestore.
- **SWE Flashcard Module**: An interactive module for mastering software engineering concepts, featuring categorized cards and progress tracking.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend/Services**: Firebase (Authentication, Firestore)
- **State Management**: React Hooks / Context API
- **Styling**: Modern CSS with a focus on performance and responsiveness

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Firebase project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zerexei/zerexei.github.io.git
   cd zerexei.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration (see below).

4. Start the development server:
   ```bash
   npm run dev
   ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GOOGLE_GEN_AI_KEY=your_google_gemini_api_key
```

## SWE Flashcard Module

The Software Engineering Flashcard module is a core feature of this platform. It provides a structured way to review critical topics including data structures, algorithms, system design, and language-specific nuances. It is built to be lightweight, fast, and extensible, allowing for a focused study experience.

## Contributing

Contributions are welcome, particularly for the **SWE Flashcard module**. If you have suggestions for new flashcard categories, high-quality question/answer pairs, or improvements to the flashcard engine, your input is greatly appreciated.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/NewFlashcards`).
3. Commit your changes (`git commit -m 'Add new system design flashcards'`).
4. Push to the branch (`git push origin feature/NewFlashcards`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
