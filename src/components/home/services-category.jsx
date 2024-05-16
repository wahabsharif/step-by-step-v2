import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// internal
import ErrorMsg from "../common/error-msg";
import HomeCateLoader from "../loader/home/home-cate-loader";
import categories from "@/data/servicesData"; // Adjust the import path as needed

const ServicesCategory = () => {
  const router = useRouter();

  // Simulate loading state
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1-second loading time

    return () => clearTimeout(timer);
  }, []);

  // handle category route
  const handleCategoryRoute = (url) => {
    router.push(`/${url.toLowerCase().replace("&", "").split(" ").join("-")}`);
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeCateLoader loading={isLoading} />;
  } else if (!isLoading && categories.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  } else if (!isLoading && categories.length > 0) {
    content = categories.map((item) => (
      <div className="col" key={item._id}>
        <div className="tp-product-category-item text-center mb-40">
          <div className="tp-product-category-thumb fix">
            <a
              className="cursor-pointer"
              onClick={() => handleCategoryRoute(item.parent)}
            >
              <Image
                src={item.img}
                alt="product-category"
                width={70}
                height={70}
              />
            </a>
          </div>
          <div className="tp-product-category-content">
            <h3 className="tp-product-category-title">
              <a
                className="cursor-pointer"
                onClick={() => handleCategoryRoute(item.parent)}
              >
                {item.parent}
              </a>
            </h3>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <section className="tp-product-category pt-60 pb-15">
      <div className="container">
        <h2 className="tp-section-title text-center">Our Top Rated Services</h2>
        <div className="row row-cols-xl-6 row-cols-lg-6 row-cols-md-4">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ServicesCategory;
