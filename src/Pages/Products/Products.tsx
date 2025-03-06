import ImageSlider from "../../Components/Products/ImageSlider";
import ProductInfo from "../../Components/Products/Product_info";
import Breadcrumb from "../../Components/Products/breadcrumbs";
import BrandInfo from "../../Components/Products/Brand_info";
import CheckoutSection from "../../Components/Products/CheckoutSection";
import ContactOptions from "../../Components/Products/ContactOptions";
import { useEffect, useState } from "react";

const Product = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  return (
    <div className="w-[95%]  py-4 mx-auto">
      <Breadcrumb />

      <div className="flex flex-col md:flex-row gap-6 mx-auto">
        <div className="w-full md:w-3/5 xl:w-2/3 mx-auto p-6 flex flex-col shadow-md rounded-xl">
          <ImageSlider />
          <ProductInfo />
        </div>

        <div className="w-full md:w-2/5 xl:w-1/3 space-y-4 shadow-md rounded-xl px-4 py-6">
          <BrandInfo />
          <CheckoutSection />
          <ContactOptions />
        </div>
      </div>
    </div>
  );
};

export default Product;
