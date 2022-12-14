import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const StarFilled = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="star"
      className="w-4 text-yellow-500"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      ></path>
    </svg>
  );
};

const Star = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="star"
      className="w-4 text-yellow-500"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
      ></path>
    </svg>
  );
};

const ProfileCard = ({
  photoURL,
  name,
  job,
  info,
  rating,
}: {
  photoURL: string;
  name: string;
  job: string;
  info: string;
  rating: number;
}) => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: -1000 }}
      transition={{ duration: 0.1, type: "easeInOut" }}
      className="carousel-item active relative float-left w-full"
    >
      <Image
        className="rounded-full shadow-lg mb-6 mx-auto"
        src={photoURL}
        alt="avatar"
        width={150}
        height={150}
      />
      <div className="flex flex-wrap justify-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
          <h5 className="text-lg font-bold mb-3">{name}</h5>
          <p className="font-medium text-gray-700 mb-4">{job}</p>
          <p className="text-gray-500 mb-6">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 pr-2 inline-block"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            {info}
          </p>
          <ul className="flex justify-center mb-0">
            {new Array(5).fill(0).map((value, index) => (
              <li key={index}>{index < rating ? <StarFilled /> : <Star />}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
