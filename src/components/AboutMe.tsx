import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default () => {
  return (
    <section className="h-screen text-center flex flex-col justify-center items-center">
      <div className="md:mb-24">
        <div className="mb-6">
          <h2 className="text-2xl mb-4">Angelo Arcillas</h2>
          <h3 className="text-xl font-semibold mb-4">
            Full Stack Web & Android Developer
          </h3>
        </div>
        <div className="mb-6">
          {/* TODO: UPDATE ME */}
          <p>
            Web developer with experience writing Javascript and PHP with some
            knowledge of linux server administration, I specialize in building
            web applications using frameworks like Reactjs, Vuejs, Laravel and
            Tailwindcss. I am a graduate of BS Computer Science majoring in
            software technology. A self-motivated, Adept learner and hard
            working developer who loves back end development.
          </p>
        </div>
      </div>

      <h3 className="text-xl mb-6 ">Connect with Me</h3>
      <SocialLinks />

      <div className="w-full">
        <hr className="hr" />
        <Navigation />
      </div>
    </section>
  );
};
