import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg", // Steak
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", // Grilled Chicken
  "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg", // Burger
  "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg", // Rice Dish
];

const ProductSlider = () => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Slider ref={(s) => setSlider(s)} {...settings}>
          {images.map((img, index) => (
            <div key={index} className="w-full flex justify-center">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full 2xl:h-[70vh] md:h-[70vh] sm:h-[55vh]  h-[60vh] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>

        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full sm:p-1"
          onClick={() => slider?.slickPrev()}
        >
          <FaChevronLeft className="text-gray-700 text-lg sm:text-base" />
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full sm:p-1"
          onClick={() => slider?.slickNext()}
        >
          <FaChevronRight className="text-gray-700 text-lg sm:text-base" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 px-2 sm:px-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`w-full h-[20vh] object-cover rounded-lg cursor-pointer border ${
              activeIndex === index ? "scale-105" : "opacity-80 hover:opacity-100"
            }`}
            onClick={() => slider?.slickGoTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
