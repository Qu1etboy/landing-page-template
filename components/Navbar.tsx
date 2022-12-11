import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);

  const isHome = router.asPath.match(/^\/(#*|#+.*)$/g);

  const handleOpen = (open: boolean) => {
    setOpen(open);
  };

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
          <div
            className="block lg:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          >
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
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 36H56"
                stroke={`${isHome ? "white" : "black"}`}
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 46H56"
                stroke={`${isHome ? "white" : "black"}`}
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </ul>
      </nav>
      <Offcanvas isOpen={isOpen} handleOpen={handleOpen} />
    </div>
  );
};

const Offcanvas = ({
  isOpen,
  handleOpen,
}: {
  isOpen: boolean;
  handleOpen: (open: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed z-20 w-full inset-0 h-full"
            onClick={() => handleOpen(false)}
          >
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              exit={{ x: 1000 }}
              transition={{ duration: 0.4, type: "easeInOut" }}
              className={`flex flex-col fixed bottom-0 max-w-full bg-white bg-clip-padding shadow-sm outline-none text-gray-700 top-0 right-0 border-none w-96`}
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4">
                <h5
                  className="mb-0 mt-10 leading-normal font-semibold"
                  id="offcanvasRightLabel"
                ></h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-2 -my-5 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={() => handleOpen(false)}
                ></button>
              </div>
              <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
                <div className="flex flex-col gap-10 ml-5">
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
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="z-10 fixed inset-0 bg-black"
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
