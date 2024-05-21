import FeatureArea from "@/components/home/feature-area";
import HomeBanner from "@/components/home/home-banner";
import ProductArea from "@/components/products/services/product-area";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import ProductSmArea from "@/components/products/services/product-sm-area";
import NewArrivals from "@/components/products/services/new-arrivals";
import BlogArea from "@/components/blog/electronic/blog-area";
import InstagramArea from "@/components/instagram/instagram-area";
import CtaArea from "@/components/cta/cta-area";
import Areas from "@/components/home/areas";
import Footer from "@/layout/footers/footer";
import ProductGadgetArea from "@/components/products/services/product-gadget-area";
import ServicesCategories from "@/components/categories/services-categories";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <Header />
      <HomeBanner />
      <ServicesCategories />
      <FeatureArea />
      <Areas />
      <ProductArea />
      <ProductGadgetArea />
      <NewArrivals />
      <CtaArea />
      <Footer />
    </Wrapper>
  );
}
