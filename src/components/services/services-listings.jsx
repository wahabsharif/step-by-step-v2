import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import Link from "next/link";
// internal
import { ArrowRight } from "@/svg";
import ServicesItem from "./services-item";
import ServicesCategoryList from "./services-category-list";
import ErrorMsg from "@/components/common/error-msg";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import handyman from "@assets/img/home-banner.svg";
import HomeGadgetPrdLoader from "@/components/loader/home/home-gadget-prd-loader";

const ServicesListings = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({ type: "electronics" });

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
        <ServicesItem product={prd} />
      </div>
    ));
  }

  // gadget banner
  function GadgetBanner() {
    const settings = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".tp-product-gadget-banner-slider-dot",
        clickable: true,
      },
    };
    return (
      <Swiper
        {...settings}
        effect="fade"
        modules={[Pagination, EffectFade]}
        className="tp-product-gadget-banner-slider-active swiper-container"
      >
        {banner_data.map((b, i) => (
          <SwiperSlide
            key={i}
            className="tp-product-gadget-banner-item include-bg"
            style={{ backgroundImage: `url(${b.bg.src})` }}
          >
            <div className="tp-product-gadget-banner-content">
              <span className="tp-product-gadget-banner-price">
                Only ${b.price.toFixed(2)}
              </span>
              <h3 className="tp-product-gadget-banner-title">
                <Link href="/shop">{b.title}</Link>
              </h3>
            </div>
          </SwiperSlide>
        ))}
        <div className="tp-product-gadget-banner-slider-dot tp-swiper-dot"></div>
      </Swiper>
    );
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
                    Select <br /> Service
                  </h3>

                  <div className="tp-product-gadget-categories-list">
                    <ServicesCategoryList />
                  </div>

                  <div className="tp-product-gadget-btn">
                    <Link href="/services" className="tp-link-btn">
                      More Services
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

export default ServicesListings;
