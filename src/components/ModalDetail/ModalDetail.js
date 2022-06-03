import React from "react";
import { CgNotes } from "react-icons/cg";
import "./ModalDetail.scss";

export default function ModalDetail() {
  return (
    <>
      <div className="modal-detail">
        <section className="modal-detail__left">
          <div className="image">
            <img
              src="https://minio.thecoffeehouse.com/image/admin/latte_851143.jpg"
              alt=""
            />
          </div>

          <div className="sub-image">
            <img
              src="https://minio.thecoffeehouse.com/image/admin/latte_851143.jpg"
              alt=""
            />
            <img
              src="https://minio.thecoffeehouse.com/image/admin/latte_851143.jpg"
              alt=""
            />
          </div>

          <div className="description">
            <p>
              Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất
              hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng
              nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan.
            </p>
          </div>
        </section>

        <section className="modal-detail__right">
          <div className="info">
            <span className="name">Latte Nóng</span>
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

          <div className="note">
            <input type="text" placeholder="Ghi chú thêm cho món này" />
            <CgNotes />
          </div>

          <button className="btnAdd">Thêm vào giỏ hàng</button>
        </section>
      </div>
    </>
  );
}
