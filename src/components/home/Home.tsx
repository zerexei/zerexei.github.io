import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/home/Hero';
import Projects from '@components/home/Projects';
import Technologies from '@components/home/Technologies';

const Home = () => {
  return (
    <div className="w-screen min-h-screen antialiased">
      <div className="relative max-w-screen-2xl mx-auto w-full py-4">
        <div className="max-w-screen-xl mx-auto px-5">
          <Header />
          <main>
            <Hero />
            <Projects />
            <Technologies />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
