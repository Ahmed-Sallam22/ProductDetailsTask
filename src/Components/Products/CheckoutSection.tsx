import { useState } from "react";
import { CgCheck } from "react-icons/cg";
import { FiPlus, FiTrash } from "react-icons/fi";

const CheckoutSection = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between bg-white px-4 py-2 rounded-2xl shadow-sm">
        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="text-gray-800 text-lg md:text-xl p-2 rounded-md"
        >
          <FiTrash />
        </button>
        <span className="text-lg md:text-xl font-semibold">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="text-gray-800 text-lg md:text-xl p-2 rounded-md"
        >
          <FiPlus />
        </button>
      </div>

      <button className="w-full bg-yellow-600 text-white py-2.5 md:py-3 mt-4 rounded-2xl text-md md:text-lg font-semibold shadow-md hover:bg-yellow-700 transition">
        Proceed to Checkout
      </button>

      <ul className="text-gray-800 mt-4 space-y-2 text-sm md:text-base">
        <li className="flex items-center text-green-600">
          <CgCheck className="text-xl md:text-2xl mr-2" /> 
          <span>Available, Ships in 3/4 weeks.</span>
        </li>
        <li className="flex items-center text-green-600">
          <CgCheck className="text-xl md:text-2xl mr-2" /> 
          <span>Shipping to Saudi Arabia: Free</span>
        </li>
        <li className="flex items-center">
          <CgCheck className="text-xl md:text-2xl mr-2" /> 
          <span>Return allowed within 14 days of delivery</span>
        </li>
        <li className="flex items-center">
          <CgCheck className="text-xl md:text-2xl mr-2" /> 
          <span>Upon request: Inside delivery and assembly</span>
        </li>
      </ul>
    </div>
  );
};

export default CheckoutSection;
