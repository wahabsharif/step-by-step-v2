import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { ArrowRight } from "@/svg";
import ProductItem from "./product-item";
import PrdCategoryList from "./prd-category-list";
import ErrorMsg from "@/components/common/error-msg";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import handyman from "@assets/img/home-banner.svg";
import HomeGadgetPrdLoader from "@/components/loader/home/home-gadget-prd-loader";

const ProductGadgetArea = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({ type: "services" });

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeGadgetPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0, 6);
    content = product_items.map((prd, i) => (
      <div key={i} className="col-xl-4 col-sm-6">
        <ProductItem product={prd} />
      </div>
    ));
  }
  return (
    <>
      <section className="tp-product-gadget-area pt-80 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-product-gadget-sidebar mb-40">
                <div className="tp-product-gadget-categories p-relative fix mb-10">
                  <div className="tp-product-gadget-thumb">
                    <Image
                      src={handyman}
                      alt="handyman img"
                      width={200}
                      priority
                    />
                  </div>
                  <h3 className="tp-product-gadget-categories-title">
                    Select Your <br /> Service
                  </h3>

                  <div className="tp-product-gadget-categories-list">
                    <PrdCategoryList />
                  </div>

                  <div className="tp-product-gadget-btn">
                    <Link href="/services" className="tp-link-btn">
                      Explore More
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-product-gadget-wrapper">
                <div className="row">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGadgetArea;
