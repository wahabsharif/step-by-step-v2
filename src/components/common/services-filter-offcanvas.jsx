import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryFilter from "../services/services-filter/category-filter";
import PriceFilter from "../services/services-filter/price-filter";
import ProductBrand from "../services/services-filter/product-brand";
import StatusFilter from "../services/services-filter/status-filter";
import TopRatedProducts from "../services/services-filter/top-rated-products";
import {
  handleFilterSidebarClose,
  handleFilterSidebarOpen,
} from "@/redux/features/services-filter-slice";
import ResetButton from "../services/services-filter/reset-button";

const ShopFilterOffCanvas = ({
  all_products,
  otherProps,
  right_side = false,
}) => {
  const { priceFilterValues, setCurrPage } = otherProps;
  const { filterSidebar } = useSelector((state) => state.shopFilter);
  const dispatch = useDispatch();

  // max price
  const maxPrice = all_products.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);

  return (
    <>
      <div
        className={`tp-filter-offcanvas-area ${
          filterSidebar ? "offcanvas-opened" : ""
        }`}
      >
        <div className="tp-filter-offcanvas-wrapper">
          <div className="tp-filter-offcanvas-close">
            <button
              type="button"
              onClick={() => dispatch(handleFilterSidebarOpen())}
              className="tp-filter-offcanvas-close-btn filter-close-btn"
            >
              <i className="fa-solid fa-xmark"></i> Close
            </button>
          </div>
          <div className="tp-shop-sidebar">
            {/* filter */}
            <PriceFilter
              priceFilterValues={priceFilterValues}
              maxPrice={maxPrice}
            />
            {/* status */}
            <StatusFilter setCurrPage={setCurrPage} shop_right={right_side} />
            {/* categories */}
            <CategoryFilter setCurrPage={setCurrPage} shop_right={right_side} />
            {/* product rating */}
            <TopRatedProducts />
            {/* brand */}
            <ProductBrand setCurrPage={setCurrPage} shop_right={right_side} />
            {/* reset filter */}
            <ResetButton shop_right={right_side} />
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => dispatch(handleFilterSidebarClose())}
        className={`body-overlay ${filterSidebar ? "opened" : ""}`}
      ></div>
      {/* overlay end */}
    </>
  );
};

export default ShopFilterOffCanvas;
