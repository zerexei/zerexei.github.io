import './assets/css/App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-300 py-4 sm:pt-0">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* ABOUT ME */}
        <AboutMe />

        {/* TECHNOLOGY USED */}
        <section>
          <h2>Technology Used</h2>
          <div className="flex flex-wrap gap-4">
            {[...Array(22).keys()].map((v, index) => {
              return (
                <span
                  key={index}
                  className="bg-gray-400 p-8 rounded-full"
                ></span>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2>Projects</h2>
          <p>Currently Not Yet Available</p>
        </section>
      </div>
    </main>
  );
}

export default App;
