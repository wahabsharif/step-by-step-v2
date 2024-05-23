import React from "react";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import BlogDetailsArea from "@/components/blog-details/blog-details-area";
import blogData from "@/data/blog-data";

const BlogDetailsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <Header />
      <BlogDetailsArea blog={blogData[4]} />
      <Footer />
    </Wrapper>
  );
};

export default BlogDetailsPage;
