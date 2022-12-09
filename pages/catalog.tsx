import Container from "../components/Container";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
  category: string;
}

const Catalog = () => {
  const [products, setProducts] = useState<Array<TProduct>>();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.products);
        setProducts(json.products);
      });
  }, []);

  return (
    <Container title="Catalog - Landing page template">
      <div className="container mx-auto px-6 my-24">
        <h1 className="text-3xl font-bold mb-10">Catalog</h1>
        <Search />

        {products !== undefined ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </div>
    </Container>
  );
};

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="rounded-lg shadow-lg bg-white w-full flex flex-col">
        <Link
          href={`/catalog/${product.id}`}
          className="flex items-center justify-center h-full"
        >
          <Image
            className="rounded-t-lg m-2"
            src={product.thumbnail}
            alt="product"
            width={200}
            height={100}
          />
        </Link>
        <div className="p-6 mt-auto">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {product.title}
          </h5>
          <p className="text-gray-700 text-base mb-4 font-medium">
            $ {product.price}
          </p>
          <Link
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            href={`/catalog/${product.id}`}
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="input-group relative flex items-stretch w-full mb-4">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
