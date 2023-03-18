import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default () => {
  return (
    <section className="section text-center gap-6">
      {/* User info */}
      <div>
        {/* User image */}
        <figure className="w-full about-me__image">
          <img
            src="/src/assets/images/laravel-vue.svg"
            alt="laravel-vue-illustrator"
          />
        </figure>
        {/* End of user image */}

        {/* User name/role */}
        <h2 className="text-3xl mb-1 font-bold">Angelo Arcillas</h2>
        <h3 className="text-md font-semibold mb-4 text-color-laravel">
          Software Engineer
        </h3>
        {/* End of user name/role */}

        {/* Overview */}
        <p className="px-4 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
          integer malesuada nunc vel. Leo integer malesuada nunc vel risus
          commodo viverra maecenas. Sed risus pretium quam vulputate. Orci
          phasellus egestas tellus rutrum tellus pellentesque eu. Quis viverra
          nibh cras pulvinar mattis nunc sed blandit libero. Justo eget magna
          fermentum iaculis eu non diam. Orci nulla pellentesque dignissim enim
          sit amet venenatis urna cursus. Sagittis id consectetur purus ut
        </p>
        {/* End of overview */}
      </div>
      {/* End of user info */}

      <p className="h-screen"></p>
      {/* <h3 className="text-sm underline">Connect with Me</h3>
      <SocialLinks /> */}

      <hr className="hr" />
      <Navigation />
    </section>
  );
};
