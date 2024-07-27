import Container from "../container";

const Header = () => {
  return (
    <header className="relative h-header-mobile w-full lg:h-header-desktop">
      <video
        loop
        autoPlay
        muted
        className="absolute h-full w-full object-cover object-center"
      >
        <source src="/header.mp4" type="video/mp4" />
      </video>
      <section className="absolute h-header-mobile w-full bg-gradient-to-r from-black/90 to-black/20 text-white lg:h-header-desktop">
        <Container className="flex h-full flex-col justify-center">
          <div className="max-w-xl space-y-4 text-sm lg:text-base">
            <h1 className="text-4xl font-black lg:text-6xl">
              RESERVE SERVICE IN ONE MINUTE
            </h1>
            <select className="w-40 rounded-lg bg-black/20 p-2">
              <option value="">Select a city</option>
              <option>Rzeszów</option>
              <option>Wrocław</option>
              <option>Warszawa</option>
            </select>
            <p className="opacity-80">
              Currently +100 hairdresser in our service.
            </p>
            <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 hover:from-blue-700 hover:to-purple-700">
              Search now
            </button>
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
