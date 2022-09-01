import './assets/css/App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App h-full bg-gray-50">
      <Header />
      <main>
        <section className="max-w-screen-md mx-auto mt-12 p-4">
          <div className="flex flex-col items-center text-center">
            <figure className="w-48 h-48 mb-4">
              <img
                className="rounded-full"
                src="https://picsum.photos/500"
                alt="avatar"
              />
            </figure>
            <h2>Angelo Arcillas</h2>
            <h3 className="mb-4">Web Developer</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloribus amet nostrum distinctio saepe velit maiores accusantium
              animi sapiente, omnis quo fugiat veniam doloremque porro tenetur,
              excepturi inventore natus modi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloribus amet nostrum distinctio saepe velit maiores accusantium
              animi sapiente, omnis quo fugiat veniam doloremque porro tenetur,
              excepturi inventore natus modi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloribus amet nostrum distinctio saepe velit maiores accusantium
              animi sapiente, omnis quo fugiat veniam doloremque porro tenetur,
              excepturi inventore natus modi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloribus amet nostrum distinctio saepe velit maiores accusantium
              animi sapiente, omnis quo fugiat veniam doloremque porro tenetur,
              excepturi inventore natus modi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloribus amet nostrum distinctio saepe velit maiores accusantium
              animi sapiente, omnis quo fugiat veniam doloremque porro tenetur,
              excepturi inventore natus modi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloribus amet nostrum distinctio saepe velit maiores accusantium
              animi sapiente, omnis quo fugiat veniam doloremque porro tenetur,
              excepturi inventore natus modi!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
