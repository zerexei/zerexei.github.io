import ComingSoon from '@Components/ComingSoon';

const Hero = () => {
  return (
    <section className="min-h-[35rem] flex justify-center items-center">
      {/* Name/Role */}
      <div className="text-center">
        <div className="mb-6">
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Angelo Arcillas
          </h1>
          <h2 className="text-xl">Web Developer</h2>
        </div>
        {/* End of name/role */}

        {/* Bio */}
        <div>
          <p className="w-2/3 mx-auto">
            Web developer with experience writing Javascript and PHP with some
            knowledge of linux server administration, I specialize in building
            web applications using frameworks like Reactjs, Vuejs, Laravel and
            Tailwindcss. I am a graduate of BS Computer Science majoring in
            software technology. A self-motivated, Adept learner and hard
            working developer who loves back end development.
          </p>
        </div>
        {/* End of bio */}
      </div>
    </section>
  );
};

export default Hero;
