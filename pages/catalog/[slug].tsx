import Container from "../../components/Container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import BuyNow from "../../components/BuyNow";
import { Spinner } from "../../components/Spinner";

interface TProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
  category: string;
}

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    if (slug !== undefined) {
      fetch(`https://dummyjson.com/products/${slug}`)
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          setProduct(json);
        });
    }
  }, [slug]);

  return (
    <Container
      title={`${
        product !== undefined ? product.title + " -" : ""
      } Landing page template`}
    >
      <div className="container mx-auto px-6 my-24">
        {product !== undefined ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-24 gap-5">
              <div className="flex justify-center px-20">
                <Image
                  src={product.thumbnail || ""}
                  alt="product"
                  width={500}
                  height={300}
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-5">{product.title}</h1>
                <p className="text-xl font-medium mb-10">$ {product.price}</p>
                <p>{product.description}</p>
              </div>
            </div>
            <Accordion />
          </>
        ) : (
          <Spinner />
        )}

        <BuyNow />
      </div>
    </Container>
  );
};

const Accordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingOne">
          <button
            className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5">
            <strong>This is the first item&apos;s accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingTwo">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5">
            <strong>This is the second items accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. Its also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5">
            <strong>This is the third items accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. Its also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
