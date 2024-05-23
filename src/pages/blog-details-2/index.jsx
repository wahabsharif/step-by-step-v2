import React from "react";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import blogData from "@/data/blog-data";
import BlogDetailsAreaTwo from "@/components/blog-details/blog-details-area-2";

const BlogDetailsPageTwo = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <Header />
      <BlogDetailsAreaTwo blog={blogData[4]} />
      <Footer />
    </Wrapper>
  );
};

export default BlogDetailsPageTwo;
