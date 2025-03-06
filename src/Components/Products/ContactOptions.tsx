import { FiHelpCircle, FiChevronRight, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactOptions = () => {
  return (
    <div className="space-y-3 mt-4 font-semibold w-full max-w-md mx-auto">
      <button className="flex items-center justify-between w-full bg-gray-100 py-3 md:py-4 px-4 rounded-lg shadow-sm hover:bg-gray-200 transition">
        <div className="flex items-center gap-2 text-gray-600 md:text-gray-700">
          <FiHelpCircle className="text-lg md:text-xl" />
          <span className="text-sm md:text-base">Request a quotation</span>
        </div>
        <FiChevronRight className="text-gray-500 md:text-gray-600" />
      </button>

      <button className="flex   text-left items-center justify-between w-full bg-gray-100 text-green-500 py-3 md:py-4 px-4 rounded-lg shadow-sm hover:bg-gray-200 transition">
        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-lg md:text-xl" />
          <span className="text-sm md:text-base text-gray-700">Order through WhatsApp</span>
        </div>
        <FiChevronRight className="text-gray-500 md:text-gray-600" />
      </button>

      <button className="flex  text-left items-center justify-between w-full bg-gray-100 py-3 md:py-4 px-4 rounded-lg shadow-sm hover:bg-gray-200 transition">
        <div className="flex items-center gap-2 text-gray-600 md:text-gray-700">
          <FiPhone className="text-lg md:text-xl" />
          <span className="text-sm md:text-base">Call us at 01118478492</span>
        </div>
        <FiChevronRight className="text-gray-500 md:text-gray-600" />
      </button>
    </div>
  );
};

export default ContactOptions;
