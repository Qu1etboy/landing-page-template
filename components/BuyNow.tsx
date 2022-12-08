import Link from "next/link";
import { FacebookLogo, LazadaLogo, LineLogo, ShopeeLogo } from "./Logo";

const BuyNow = () => {
  return (
    <div className="container mt-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h1 className="text-3xl font-bold mb-24">Buy Now</h1>
        <p></p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          <Link href="#">
            <LazadaLogo />
          </Link>
          <Link href="#">
            <ShopeeLogo />
          </Link>
          <Link href="#">
            <FacebookLogo />
          </Link>
          <Link href="#">
            <LineLogo />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BuyNow;
