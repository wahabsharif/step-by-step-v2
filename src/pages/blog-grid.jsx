import React from "react";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import SectionTitle from "@/components/blog/blog-grid/section-title";
import BlogGridArea from "@/components/blog/blog-grid/blog-grid-area";

const BlogGridPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Grid" />
      <Header />
      <SectionTitle />
      <BlogGridArea />
      <Footer />
    </Wrapper>
  );
};

export default BlogGridPage;
