import FeatureArea from "@/components/home/feature-area";
import HomeBanner from "@/components/home/home-banner";
import ServicesCategory from "@/components/home/services-category";
import ProductArea from "@/components/products/electronics/product-area";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
// import BannerArea from "@/components/banner/banner-area";
// import OfferProducts from "@/components/products/electronics/offer-products";
// import ProductBanner from "@/components/products/electronics/product-banner";
// import ProductSmArea from "@/components/products/electronics/product-sm-area";
// import NewArrivals from "@/components/products/electronics/new-arrivals";
// import BlogArea from "@/components/blog/electronic/blog-area";
// import InstagramArea from "@/components/instagram/instagram-area";
// import CtaArea from "@/components/cta/cta-area";
import Areas from "@/components/home/areas";
import Footer from "@/layout/footers/footer";
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
      {/* <ServicesListings /> */}
      <ProductArea />
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
