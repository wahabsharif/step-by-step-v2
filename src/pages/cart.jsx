import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CartArea from "@/components/cart-wishlist/cart-area";
import SEO from "@/components/seo";
import Footer from "@/layout/footers/footer";
import Header from "@/layout/headers/header";
import Wrapper from "@/layout/wrapper";

const CartPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Cart" />
      <Header />
      <CommonBreadcrumb title="Shopping Cart" subtitle="Shopping Cart" />
      <CartArea />
      <Footer />
    </Wrapper>
  );
};

export default CartPage;
