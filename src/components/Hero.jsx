const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between min-h-[80vh] px-16 text-white md:flex-row md:px-16 bg-gray-950">
      {/* Left: Text Content */}
      <div className="text-center md:w-2/3 md:text-left">
        <h1 className="text-4xl font-bold  text-blue-400 md:text-6xl">
          Altering the future of web hosting
        </h1>
        <p className="max-w-lg mt-8 text-lg font-medium leading-relaxed md:text-xl">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="flex flex-col mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <a
            href="#"
            className="px-6 py-3 text-lg font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-500"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 text-lg font-medium transition border border-gray-300 rounded-full dark:border-gray-600 hover:bg-gray-600 dark:hover:bg-gray-800"
          >
            Explore Our Plans
          </a>
        </div>
      </div>

      {/* Right: Banner Image */}
      <div className="flex justify-center md:w-1/2">
        <img
          src="/banner2.png"
          alt="Portfolio and Business Website"
          className="w-full max-w-lg cover-container"
        />
      </div>
    </div>
  );
};

export default Hero;
