import { BrowserRouter, Routes, Route } from 'react-router-dom';
import server from './server';
import './assets/css/App.css';
import Home from './pages/Home';
import Tools from './pages/Tools';
import './app.css';

function App() {
  const handleSubmit = () => {
    server.createPost('title', 'body');
    // server.test();
  };

  const login = () => {
    server.login();
  };
  const logout = () => {
    server.logout();
  };
  const test = () => {
    server.test();
  };

  // server.getUsers();
  // useEffect(() => {
  // }, []);

  return (
    <BrowserRouter>
      <main className="min-h-screen py-4 sm:pt-0">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-screen flex justify-center items-center gap-4 p-4">
            <button onClick={() => handleSubmit()}>Create Post</button>
            <button onClick={() => login()}>Login</button>
            <button onClick={() => logout()}>logout</button>
            <button onClick={() => test()}>test</button>
          </div>
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
