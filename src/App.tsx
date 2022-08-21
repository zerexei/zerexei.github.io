import '@/assets/css/App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container p-4 md:p-0">
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </main>
    </div>
  );
}

export default App;
