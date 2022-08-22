import './assets/css/App.css';

function App() {
  return (
    <div className="App h-full bg-gray-50">
      <header className="flex items-center px-4 shadow-md">
        <h2 className="flex-1 text-4xl">Foo Bar Baz</h2>
        <nav className="flex-1 hidden md:flex text-center">
          <a href="#a" className="nav-link nav-link--active">
            Home
          </a>
          <a href="#a" className="nav-link">
            Services
          </a>
          <a href="#a" className="nav-link">
            Projects
          </a>
          <a href="#a" className="nav-link">
            Tools
          </a>
        </nav>
      </header>
      <main></main>
    </div>
  );
}

export default App;
