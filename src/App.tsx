import { Routes, Route } from 'react-router-dom';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Home from '@components/home';
import Tools from '@components/tools';

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
              <Route path="/tools" Component={Tools} />
              <Route path="/" Component={Home} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
