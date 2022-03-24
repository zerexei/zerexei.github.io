import {
  FaDiscord,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

function App() {
  return (
    <div className="font-mono container mx-auto p-6 text-gray-900 tracking-tight">
      {/* ---------------*/}
      <div className="flex items-center mb-12">
        <p className="flex-1">
          <h1 className="text-4xl font-bolder">John Doe</h1>
          <h2 className="text-sm text-gray-500">johndoe@mail.com</h2>
          <h3 className="text-xl font-bold text-gray-500">Web Developer</h3>
        </p>
        <div className="w-28">
          <img
            className="relative object-cover rounded-full"
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
          accumsan ex, nec vehicula purus. Sed maximus molestie consequat. Proin
          vestibulum metus ac quam porttitor, ac laoreet ex eleifend. Integer
          tempor ac nunc nec accumsan.
        </p>
        <p className="mb-6">
          Etiam at congue urna, non convallis turpis. Nunc quis turpis rhoncus
          tortor porta posuere ac a odio. Donec sit amet ante nunc. Nullam
          rhoncus eu elit in tincidunt. Etiam convallis, mauris in volutpat
          imperdiet, sem tellus commodo purus, quis facilisis nulla nunc ut
          justo. Cras dapibus lectus eros, id dignissim velit pulvinar molestie.
          Morbi scelerisque eros ut arcu placerat fermentum. Nam ut elit non
          diam fermentum lacinia. Morbi nibh dolor, ultricies quis nibh in,
          eleifend semper urna. Aliquam eget est eu eros rutrum scelerisque sit
          amet nec neque. Maecenas ornare massa sit amet lorem ultricies
          egestas.
        </p>
        <p className="mb-6">
          Nullam porta felis ac est aliquet, vel gravida metus accumsan. Duis
          quis metus a tellus eleifend scelerisque. Morbi id odio nunc. Maecenas
          varius leo nisl, ut sagittis nunc commodo eu. Phasellus mauris odio,
          fringilla vitae libero non, viverra gravida ante. Praesent dignissim
          dui in sem dignissim viverra. Vivamus eros ante, pellentesque ac orci
          et, lacinia ultrices massa. Nunc consectetur maximus viverra. Quisque
          varius tincidunt tristique. Vestibulum velit nibh, elementum quis est
          in, ornare efficitur eros. Praesent eu urna ac justo aliquam semper.
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
    </div>
  );
}

export default App;
