import Image from "next/image";

const ProductInfoSection = () => {
  return (
    <div id="info" className="w-full py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/126.jpg"
            width={500}
            height={625}
            alt="product"
            priority={true}
            className="rounded-md md:float-right mr-5"
          />
        </div>
        <div className="flex flex-col justify-center p-5">
          <h2 className="text-3xl font-bold mt-6 mb-6 pb-2">
            Top quality product
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum amet
            deserunt quia quidem. Quisquam ducimus mollitia expedita soluta
            voluptas, sequi sit porro dolorem voluptatum, maiores nihil ratione
            vitae officia assumenda? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Harum amet deserunt quia quidem. Quisquam ducimus
            mollitia expedita soluta voluptas, sequi sit porro dolorem
            voluptatum, maiores nihil ratione vitae officia assumenda?
          </p>

          <div>
            <button
              type="button"
              className="inline-block px-7 py-3 mt-6 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              View Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
