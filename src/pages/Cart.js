import Main from "~/layouts/Main";
import "../styles/Cart.scss";

export default function Cart() {
  return (
    <>
      <Main>
        <h1>Giỏ Hàng</h1>
        <div className="container">
          <div className="cart-page">
            <div className="cart-container">
              <div className="left">
                <span className="title">Giao hàng</span>
                <div className="address">
                  <span>Địa chỉ: </span>
                  <span>
                    57 Ba Tháng Hai, Phường 11, Quận 10, Thành phố Hồ Chí Minh
                  </span>
                </div>

                <span className="title">Phương thức thanh toán</span>
                <div className="pay-option">
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="cash"
                      name="option"
                      value="cash"
                      checked
                    />
                    <label for="cash">Tiền mặt</label>
                  </div>

                  <div className="radio-group">
                    <input type="radio" id="momo" name="option" value="momo" />
                    <label for="momo">Momo</label>
                  </div>

                  <div className="radio-group">
                    <input type="radio" id="bank" name="option" value="bank" />
                    <label for="bank">Thẻ ngân hàng</label>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="main">
                  <span className="title">Các món đã chọn</span>
                  <div className="selected">
                    <span>Latte Nóng 1</span>
                    <span>Latte Nóng 2</span>
                    <span>Latte Nóng 3</span>
                    <span>Latte Nóng 4</span>
                  </div>

                  <span className="title">Tổng cộng</span>
                  <div className="total">
                    <span>Thành tiền:</span>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                        fontSize: "25px",
                      }}
                    >
                      284.000₫
                    </span>
                  </div>

                  <div className="line"></div>

                  <div className="discount">
                    <span>Khuyến mãi</span>
                  </div>
                </div>
                <div className="order">
                  <button>Đặt hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
