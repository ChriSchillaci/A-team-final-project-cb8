import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Modal from "../../components/modal/Modal";

function Checkout({ allGamesInCart, onPurchase }) {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const ids = allGamesInCart.map((game) => game.suggestions_count);

  const sumPrice = ids.reduce(
    (sum, suggestions_count) => sum + suggestions_count / 20,
    0
  );

  const roundedPrice = Math.round(sumPrice);

  const [discount, setDiscount] = useState(0);
  const [finalPrice, setfinalPrice] = useState(0);
  const [inputDiscountCode, setInputDiscountCode] = useState("");

  useEffect(() => {
    setfinalPrice(roundedPrice);
  }, [roundedPrice]);

  const handleInputChangeDiscount = (e) => {
    setInputDiscountCode(e.target.value);
  };

  const handleDiscount = () => {
    if (inputDiscountCode === "edgemony2024") {
      setDiscount(20);
      setfinalPrice((roundedPrice - (roundedPrice * 20) / 100).toFixed(0));
    } else if (inputDiscountCode === "giusene") {
      setDiscount(90);
      setfinalPrice((roundedPrice - (roundedPrice * 90) / 100).toFixed(0));
    } else {
      setDiscount(0);

      setfinalPrice(roundedPrice);
    }
  };

  const processCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem("username"),
          cart: allGamesInCart,
        }),
      });

      const data = await response.json();

      if (data.success) {
        onPurchase();
        setShowCheckoutModal(true);
      } else {
        console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setTimeout(() => {
      setShowCheckoutModal(false);
    }, 2000);
  };

  return (
    <>
      {showCheckoutModal && (
        <Modal onClose={() => setShowCheckoutModal(false)}>
          Thanks for your purchase! Games moved to library.
        </Modal>
      )}
      <div className={styles.checkoutContainer}>
        <h4>Checkout</h4>
        <div className={styles.pricesContainer}>
          <p>Subtotal Price: {roundedPrice}€</p>
          <p>Discount: {discount}%</p>
          <p>Final Amount: {finalPrice}€</p>
        </div>
        <div>
          <div className={styles.dcodeContainer}>
            <label>Discount code:</label>
            <input
              type="text"
              id="codice"
              placeholder="Your code here.."
              className={styles.codeBar}
              onChange={handleInputChangeDiscount}
            />
            <button
              type="button"
              className={styles.button}
              onClick={handleDiscount}
            >
              Apply
            </button>
            <label htmlFor="metodo">Payment method</label>
            <select className={styles.paySelect}>
              <option className={styles.payMethod} value="paypal">
                PayPal
              </option>
              <option className={styles.payMethod} value="Credit Card">
                Credit Card
              </option>
              <option className={styles.payMethod} value="Klarna">
                Klarna
              </option>
              <option className={styles.payMethod} value="bank transfer">
                Bank transfer
              </option>
            </select>
          </div>
          <div className={styles.buyButtonContainer}>
            <button
              type="button"
              className={styles.buyButton}
              onClick={processCheckout}
            >
              Buy!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
