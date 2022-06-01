import React from "react";
import Main from "~/layouts/Main";
import "../styles/Detail.scss";

export default function Detail() {
  return (
    <>
      <Main>
        <div className="detail">
          <section className="detail__left">
            <img
              src="https://product.hstatic.net/1000075078/product/tra-sen-nhan_f58fc9ad254847b1beb3cdfbaa1bd6b5_master.jpg"
              alt=""
            />
          </section>

          <section className="detail__right">
            <div className="info">
              <span className="name">Trà Long Nhãn Hạt Sen</span>
              <span className="price">58.000 đ</span>
            </div>

            <span style={{ fontSize: "18px" }}>Kích thước</span>
            <div className="size">
              <button className="btnSize">M</button>
              <button className="btnSize">L</button>
            </div>

            <span style={{ fontSize: "18px" }}>Topping</span>
            <div className="topping">
              <button className="btnTopping">Hạt sen</button>
              <button className="btnTopping">Trái nhãn</button>
              <button className="btnTopping">Trân châu trắng</button>
              <button className="btnTopping">Kem phô mai Macchiato</button>
            </div>
          </section>
        </div>
      </Main>
    </>
  );
}
