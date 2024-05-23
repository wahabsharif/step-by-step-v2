import React from "react";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import blogData from "@/data/blog-data";
import BlogDetailsAreaTwo from "@/components/blog-details/blog-details-area-2";

const BlogDetailsPageTwo = ({ query }) => {
  const blogItem = blogData.find((b) => Number(b.id) === Number(query.id));
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <Header />
      <BlogDetailsAreaTwo blog={blogItem} />
      <Footer />
    </Wrapper>
  );
};

export default BlogDetailsPageTwo;

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};
