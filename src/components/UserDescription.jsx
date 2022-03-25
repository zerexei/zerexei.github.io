import Connect from "./Connect";

const UserDescription = () => {
  const linkClassName = "text-red-500 hover:text-red-600 hover:underline";

  return (
    <div className="mb-12">
      <p className="mb-6">
        Heya I'm Daaave,{" "}
        <span className="font-bold text-black">
          a web developer with 6+ years experience writting Javascript, PHP &
          SQL
        </span>
        . I specialize in building web apps using frameworks like
        <span className="font-bold text-black">
          {" "}
          Tailwindcss, React.js and Laravel
        </span>
        . I am an aspiring web developer from philippines who loves back-end web
        development, I always prioritize in best practices and security to
        ensure that I can produce a high quality and secure codebase for problem
        solutions. I enjoy watching anime, playing pc games and PROGRAMMING.
      </p>
      <p className="mb-6">
        If you're interested in hiring me{" "}
        <a href="#" className={linkClassName}>
          check out my resume
        </a>{" "}
        and you can contact me through my{" "}
        <a href="mailto:angeloarcillas64@gmail.com" className={linkClassName}>
          email
        </a>
        . I am currently looking for web dev contracts/roles.
      </p>

      <Connect />
    </div>
  );
};
export default UserDescription;
