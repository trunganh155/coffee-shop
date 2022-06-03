import React from "react";
import "./ProductCard.scss";

export default function ProductCard() {
  return (
    <div className="card-item">
      <div className="card-item__image">
        <img
          src="https://product.hstatic.net/1000075078/product/tra-dao-tui-loc-tearoma_0283ea88d37c4685b309d3acda5e6e0e_large.jpg"
          alt=""
        />
      </div>

      <div className="card-item__info">
        <span className="name">Trà Đào Túi Lọc</span>
        <span className="price">28.000₫</span>
      </div>

      <div className="card-item__addToCart">
        <button>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}
