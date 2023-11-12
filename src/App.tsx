import { Routes, Route } from 'react-router-dom';
import Footer from '@Components/Footer';
import Header from '@Components/Header';
import Home from '@Components/Pages/Home/Home';
import Tools from '@Components/Pages/Tools/Tools';
import LinkCollection from '@/Components/Pages/LinkCollection/LinkCollection';
import ScrollTop from '@Components/Includes/ScrollTop';

import './App.css';

function App() {
  return (
    <div className="min-h-screen antialiased text-indigo-600 bg-red-500 dark:text-indigo-300 font-inter dark:bg-slate-900">
      
      <div>
        <div className="max-w-screen-xl p-0 px-5 mx-auto">
          <Header />
          <main>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/tools" Component={Tools} />
              <Route path="/link-collections" Component={LinkCollection} />
            </Routes>
            <ScrollTop />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
