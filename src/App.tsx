import { Routes, Route } from 'react-router-dom';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Home from '@components/home';
import Tools from '@components/tools';

import './App.css';

function App() {
  return (
    <div className="w-screen min-h-screen antialiased">
      <div className="relative max-w-screen-2xl mx-auto w-full py-4">
        <div className="max-w-screen-xl mx-auto px-5">
          <Header />
          <main>
            <Routes>
              <Route path="/tools" Component={Tools} />
              <Route path="/" Component={Home} />
            </Routes>
            {/* <Home /> */}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
