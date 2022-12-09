import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { useState } from "react";

const data: {
  name: string;
  job: string;
  info: string;
  photoURL: string;
  rating: number;
}[] = [
  {
    name: "Maria Kate",
    job: "Photographer",
    info: "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida, justo et imperdiet tristique, turpis nisi viverra est, nec posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium condimentum nulla.",
    photoURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
    rating: 4,
  },
  {
    name: "John Doe",
    job: "Web Developer",
    info: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    photoURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg",
    rating: 3,
  },
  {
    name: "Anna Deynah",
    job: "UX Designer",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    photoURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
    rating: 5,
  },
];

const Testinomial = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="container my-24 px-6 mx-auto h-[500px]">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

        <div
          id="carouselExampleCaptions"
          className="carousel slide relative carousel-dark"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            <ProfileCard key={index} {...data[index]} />
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            onClick={() =>
              setIndex(index - 1 < 0 ? data.length - 1 : index - 1)
            }
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            onClick={() => setIndex((index + 1) % data.length)}
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testinomial;
