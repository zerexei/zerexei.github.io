import { Routes, Route } from 'react-router-dom';
import Footer from '@Components/Footer';
import Header from '@Components/Header';
import Home from '@Components/Pages/Home/Home';
import Tools from '@Components/Pages/Tools/Tools';
import LinkCollection from '@/Components/Pages/LinkCollection/LinkCollection';
import ScrollTop from '@Components/Includes/ScrollTop';

import './App.css';

// TODO: update tools to generic names (e.g. vue-ganttastic => gantt chart)
// - list top 5-10 tools
function App() {
  return (
    <div className="min-h-screen antialiased bg-gray-50 text-primary dark:bg-slate-900 dark:text-primary-dark">
      <div className="relative max-w-screen-xl px-5 mx-auto">
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
  );
}

export default App;
