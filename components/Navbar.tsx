import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isHome = router.asPath.match(/^\/(#*|#+.*)$/g);

  return (
    <div
      className={`${
        isHome ? "absolute text-gray-100" : "text-black border"
      } w-full flex justify-center`}
    >
      <nav className="container p-5 flex justify-between">
        <ul className="flex items-center gap-10">
          <Link className="text-3xl font-bold cursor-pointer" href="/">
            LOGO
          </Link>
          <div className="hidden lg:flex gap-10">
            <Link href="/about" className="cursor-pointer">
              About
            </Link>
            <Link href="/catalog" className="cursor-pointer">
              Catalog
            </Link>
            <Link href="/contact" className="cursor-pointer">
              Contact
            </Link>
          </div>
        </ul>
        <ul className="flex items-center gap-2">
          <li className="cursor-pointer underline">TH</li>
          <p>/</p>
          <li className="cursor-pointer">EN</li>
          <div className="block lg:hidden cursor-pointer">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 26H56"
                stroke={`${isHome ? "white" : "black"}`}
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 36H56"
                stroke={`${isHome ? "white" : "black"}`}
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 46H56"
                stroke={`${isHome ? "white" : "black"}`}
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
