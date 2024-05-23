import React from "react";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import BlogDetailsArea from "@/components/blog-details/blog-details-area";
import blogData from "@/data/blog-data";

const BlogDetailsPage = ({ query }) => {
  const blogItem = blogData.find((b) => Number(b.id) === Number(query.id));
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <Header />
      <BlogDetailsArea blog={blogItem} />
      <Footer />
    </Wrapper>
  );
};

export default BlogDetailsPage;

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};
