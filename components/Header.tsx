const Header = () => {
  return (
    <div className="w-full h-screen bg-slate-400 bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')] bg-cover bg-no-repeat">
      <div className="bg-black/75 w-full h-full flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl font-bold text-white">Header</h1>
        <h2 className="text-3xl font-semibold text-white">Sub Header</h2>
        <a
          className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          href="#info"
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          View detail
        </a>
      </div>
    </div>
  );
};

export default Header;
