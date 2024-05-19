import FeatureArea from "@/components/home/feature-area";
import HomeBanner from "@/components/home/home-banner";
import ServicesCategory from "@/components/home/services-category";
import ProductArea from "@/components/products/services/product-area";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
// import BannerArea from "@/components/banner/banner-area";
// import OfferProducts from "@/components/products/services/offer-products";
// import ProductBanner from "@/components/products/services/product-banner";
// import ProductSmArea from "@/components/products/services/product-sm-area";
// import NewArrivals from "@/components/products/services/new-arrivals";
// import BlogArea from "@/components/blog/electronic/blog-area";
// import InstagramArea from "@/components/instagram/instagram-area";
// import CtaArea from "@/components/cta/cta-area";
import Areas from "@/components/home/areas";
import Footer from "@/layout/footers/footer";
// import ProductBanner from "@/components/products/services/product-banner";
import ProductGadgetArea from "@/components/products/services/product-gadget-area";
// import ServicesListings from "@/components/services/services-listings";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <Header />
      <HomeBanner />
      <ServicesCategory />
      <FeatureArea />
      <Areas />
      <ProductArea />
      <ProductGadgetArea />
      {/* <ServicesListings /> */}
      {/* <ProductBanner /> */}
      {/* <BannerArea/> */}
      {/* <OfferProducts/> */}
      {/* <ProductBanner/> */}
      {/* <NewArrivals/> */}
      {/* <ProductSmArea/> */}
      {/* <BlogArea/> */}
      {/* <InstagramArea/> */}
      {/* <CtaArea/> */}
      <Footer />
    </Wrapper>
  );
}
