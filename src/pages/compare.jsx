import React from "react";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import CompareArea from "@/components/compare/compare-area";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";

const ComparePage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Shop" />
      <Header />
      <CommonBreadcrumb title="Compare" subtitle="Compare" />
      <CompareArea />
      <Footer />
    </Wrapper>
  );
};

export default ComparePage;
