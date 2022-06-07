import React from "react";
import Category from "~/components/category/Category";
import ProductList from "~/components/product/ProductList";
import Slider from "~/components/slider/Slider";
import Main from "~/layouts/Main";

function HomePage() {
  return (
    <>
      <Main>
        <Slider />
        <Category />
        <ProductList />
      </Main>
    </>
  );
}

export default HomePage;
