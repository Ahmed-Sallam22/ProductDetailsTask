const Breadcrumb = () => {
    const breadcrumbs = ["Home", "Category", "Sub category", "Sub category", "Product"];
  
    return (
      <nav className="text-gray-500 mb-4 px-4 ">
        <ul className="flex items-center space-x-1 text-sm md:text-base flex-wrap whitespace-nowrap">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className={index === breadcrumbs.length - 1 ? "font-bold text-black" : ""}>{item}</span>
              {index < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Breadcrumb;
  