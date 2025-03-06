import { FaStar } from "react-icons/fa";
import { FiHeart, FiShare2 } from "react-icons/fi";

const BrandInfo = () => {
  return (
    <div className="flex flex-col gap-4 max-w-sm md:max-w-full">
      {/* Brand Logo & Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="Brand Logo"
          className="w-32 md:w-40 object-cover"
        />

        {/* Icons */}
        <div className="flex space-x-3 mt-3 md:mt-0">
          <FiHeart className="text-gray-500 hover:text-red-500 cursor-pointer text-lg" />
          <FiShare2 className="text-gray-500 hover:text-blue-500 cursor-pointer text-lg" />
        </div>
      </div>

      {/* Info Section */}
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold">Brand Name</h2>
        <p className="text-gray-500 text-sm md:text-base">
          Designer <span className="font-semibold text-gray-800">Deanna Comellini</span>
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          Collection <span className="font-semibold text-gray-800">Le Materie Sottile</span>
        </p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <span className="mr-1 text-sm md:text-base">(4.5)</span>
          <FaStar className="text-yellow-500 text-sm md:text-lg" />
          <span className="text-gray-500 ml-1 text-sm md:text-base">(1.4K)</span>
        </div>

        {/* Price & Discount */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <p className="text-sm md:text-lg">Price:</p>
          <span className="text-lg md:text-xl font-bold">$1358</span>
          <span className="text-gray-400 line-through text-sm md:text-lg">$590,693</span>
          <span className="bg-green-200 text-green-800 px-2 py-1 text-xs md:text-sm rounded">
            15% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandInfo;
