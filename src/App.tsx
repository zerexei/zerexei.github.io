import './assets/css/App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App h-full bg-gray-50">
      <Header />
      <main>
        <section
          className="bg-red-400 relative flex justify-center items-center"
          style={({ height: '35rem' })}
        >
          <div className="-mt-40 w-4/5 -rotate-12">
            <h2 className="uppercase text-6xl font-bold">
              Self-Taught Web Developer
            </h2>
            <div className="h-px my-4 bg-black"></div>
            <h2 className="uppercase text-6xl font-bold">
              School-Taught Software Engineer
            </h2>
          </div>

          <div className="-mt-20 absolute bottom-5 right-5 w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste earum
            blanditiis adipisci error odio aperiam doloremque quibusdam veniam
            et quia totam harum reiciendis voluptate aut dicta fugit dolores,
            officia perferendis.
          </div>
        </section>

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
