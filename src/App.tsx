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
    <div className="w-screen min-h-screen antialiased">
      <div className="relative w-full py-4 mx-auto max-w-screen-2xl">
        <div className="max-w-screen-xl px-5 mx-auto">
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
