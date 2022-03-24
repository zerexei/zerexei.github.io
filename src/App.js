import {
  FaDiscord,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

function App() {
  return (
    <div className="font-mono  mx-auto">
      <header className="bg-blue-200 pt-6 pb-2 h-12 flex justify-center items-center space-x-4 uppercase font-bold text-blue-500">
        <a href="#" className="tracking-wide hover:text-blue-700">
          Home
        </a>
        <a href="#" className="tracking-wide hover:text-blue-700">
          projects
        </a>
        <a href="#" className="tracking-wide hover:text-blue-700">
          tools
        </a>
      </header>

      <div className="lg:flex p-6 text-gray-900 tracking-tight">
        <div className="hidden lg:block lg:flex-1"></div>
        <div className="lg:flex-1">
          {/* ---------------*/}
          <div className="flex items-center mb-12">
            <p className="flex-1">
              <h1 className="text-4xl font-bolder">John Doe</h1>
              <h2 className="text-sm text-gray-500">johndoe@mail.com</h2>
              <h3 className="text-xl font-bold text-gray-500">Web Developer</h3>
            </p>
            <div className="w-28">
              <img
                className="object-cover rounded-full"
                src="https://picsum.photos/500"
                alt="avatar"
              />
            </div>
          </div>

          {/* --------------- */}
          <div className="mb-12">
            <p className="mb-6">
              Aliquam a feugiat est. Donec est diam, consequat non feugiat a,
              tincidunt non sapien. Nunc a enim porttitor, vestibulum leo vitae,
              auctor mi. Pellentesque fringilla mi ut dictum finibus. Cras non
              accumsan ex, nec vehicula purus. Sed maximus molestie consequat.
              Proin.
            </p>
            <p className="mb-6">
              Etiam at congue urna, non convallis turpis. Nunc quis turpis
              rhoncus tortor porta posuere ac a odio. Donec sit amet ante nunc.
              Nullam rhoncus eu elit in tincidunt. Etiam convallis, mauris in
              volutpat imperdiet, sem tellus commodo purus, quis facilisis nulla
              nunc ut egestas.
            </p>
            <p className="mb-6">
              Nullam porta felis ac est aliquet, vel gravida metus accumsan.
              Duis quis metus a tellus eleifend scelerisque. Morbi id odio nunc.
              Maecenas varius leo nisl, ut sagittis nunc commodo eu. Phasellus
              mauris odio, fringilla vitae libero non, viverra gravida ante.
              Praesent dignissim
            </p>

            <div className="flex items-center space-x-2">
              <a href="#" alt="github link">
                <FaGithub className="w-8 h-8" />
              </a>

              <a href="#" alt="stack overflow link">
                <FaStackOverflow className="w-8 h-8" />
              </a>

              <a href="#" alt="twitter link">
                <FaTwitter className="w-8 h-8" />
              </a>

              <a href="#" alt="discord link">
                <FaDiscord className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* ------------ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>

          {/* ------------ */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Projects</h2>
            <div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <h3 className="flex-1">
                    <a
                      href="#"
                      alt="project link"
                      className="mr-2 font-bold text-blue-500"
                    >
                      Project Tile
                    </a>
                    <span className="text-gray-500">Role - Year</span>
                  </h3>
                  <div className="w-12 h-12">
                    <img
                      src="https://picsum.photos/200"
                      alt="project logo"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm">
                  Cras lacinia, velit et varius efficitur, nisl lorem
                  ullamcorper libero, ac vehicula est felis vel magna. Curabitur
                  interdum euismod risus quis rutrum. Suspendisse consectetur,
                  enim eu aliquet accumsan, nulla dolor egestas neque, at
                  euismod justo.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <h3 className="flex-1">
                    <a
                      href="#"
                      alt="project link"
                      className="mr-2 font-bold text-blue-500"
                    >
                      Project Tile
                    </a>
                    <span className="text-gray-500">Role - Year</span>
                  </h3>
                  <div className="w-12 h-12">
                    <img
                      src="https://picsum.photos/200"
                      alt="project logo"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm">
                  Cras lacinia, velit et varius efficitur, nisl lorem
                  ullamcorper libero, ac vehicula est felis vel magna. Curabitur
                  interdum euismod risus quis rutrum. Suspendisse consectetur,
                  enim eu aliquet accumsan, nulla dolor egestas neque, at
                  euismod justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
