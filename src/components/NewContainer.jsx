import logoShadow from "../assets/logo-with-shadow.png";

export const NewContainer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center text-center mt-8 px-8 sm:justify-between">
        <div className="relative sm:w-1/2 order-1 sm:order-2 sm:ml-36">
          <img
            src={logoShadow}
            alt="logo-shadow"
            className="h-[180px] relative z-10 rounded-lg sm:h-[300px] object-contain"
          />
        </div>
        <div className="sm:w-1/2 order-2 sm:order-1 sm:w-full">
          <h2 className="sm:text-5xl font-bold text-4xl mt-6 bg-clip-text text-transparent bg-gradient-to-r from-[rgba(165,83,254,255)] to-[#50beff] sm:text-start">
            Vite
          </h2>
          <h2 className="sm:text-5xl font-bold text-3xl mb-3 text-custon-gray-black sm:text-start">
            Next Generation Frontend Tooling
          </h2>
          <p className="text-custom-gray font-semibold text-xl sm:text-start sm:text-2xl">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
        </div>
      </div>
    </>
  );
};
