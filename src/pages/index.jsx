import ServicesCategories from "@/components/categories/services-categories";
import CtaArea from "@/components/cta/cta-area";
import Areas from "@/components/home/areas";
import FeatureArea from "@/components/home/feature-area";
import HomeBanner from "@/components/home/home-banner";
import NewArrivals from "@/components/products/services/new-arrivals";
import ProductArea from "@/components/products/services/product-area";
import ProductGadgetArea from "@/components/products/services/product-gadget-area";
import SEO from "@/components/seo";
import Footer from "@/layout/footers/footer";
import Header from "@/layout/headers/header";
import Wrapper from "@/layout/wrapper";

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
