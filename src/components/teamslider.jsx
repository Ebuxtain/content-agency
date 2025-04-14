import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const teamMembers = [
  {
    name: "Paul Freeman",
    image: "/src/assets/image-1-120x120.jpg",
    description:
      "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Excepteur sint occaecat cupidatat non proident.",
    role: "Expert",
  },
  {
    name: "John Dou",
    image: "/src/assets/image-2-120x120.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    role: "Expert",
  },
  {
    name: "Sandy Williams",
    image: "/src/assets/image-3-120x120.jpg",
    description:
      "Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
    role: "CEO, Business Co.",
  },
];

const TeamSlider = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const member = teamMembers[current];

  return (
    <div className="text-center">
      <div className="flex justify-center items-center gap-13 rounded-2xl mb-6">
        <button onClick={handlePrev} className="text-primary text-2xl">
          <FaArrowLeft />
        </button>
        <div className="flex flex-col items-center max-w-md">
          <img
            src={member.image}
            alt={member.name}
            className="rounded-full w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-sm text-gray-600 mt-2">{member.description}</p>
          <p className="mt-2 text-primary font-medium">{member.role}</p>
        </div>
        <button onClick={handleNext} className="text-primary text-2xl">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TeamSlider;
