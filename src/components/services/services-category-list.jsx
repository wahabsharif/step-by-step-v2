import React from "react";

// import local data
import categoriesData from "@/data/categoriesData";

const ServicesCategoryList = ({ onSelectCategory }) => {
  // simulate the loading state
  const isLoading = false;
  const isError = false;
  const categories = { result: categoriesData };

  // handle category route
  const handleCategoryRoute = (title) => {
    onSelectCategory(title);
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>; // Replace with your loader component
  }
  if (!isLoading && isError) {
    content = <div>There was an error</div>; // Replace with your error message component
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <div>No Category found!</div>; // Replace with your no category found component
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const category_items = categories.result;
    content = category_items.map((item) => (
      <li key={item._id}>
        <a
          onClick={() => handleCategoryRoute(item.parent)}
          className="cursor-pointer"
        >
          {item.parent}
        </a>
      </li>
    ));
  }

  return <ul>{content}</ul>;
};

export default ServicesCategoryList;
