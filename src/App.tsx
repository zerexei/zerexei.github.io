import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Home from './pages/Home';
import Tools from './pages/Tools';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen py-4 sm:pt-0">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
