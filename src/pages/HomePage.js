import React from "react";
import ModalDetail from "~/components/ModalDetail/ModalDetail";
import ProductCard from "~/components/productCard/ProductCard";
import Main from "~/layouts/Main";

function HomePage() {
  return (
    <>
      <Main>
        <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', width:'100%',gap: 20,}}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Main>
    </>
  );
}

export default HomePage;
