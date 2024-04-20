import { FaHeartCircleMinus } from "react-icons/fa6";
import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./index.module.scss";

const RemoveFromWishlistButton = ({ game, onRemove }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const username =
    typeof window !== "undefined" && localStorage.getItem("username");

  const handleRemoveFromWishlist = async () => {
    if (!username) {
      setShowModal(true);
      return;
    }

    try {
      const res = await fetch("/api/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          gameSlug: game.slug,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      } else {
        setModalMessage("Item removed from Wishlist");
        setShowModal(true);
        setTimeout(() => {
          onRemove(game.slug);
          setShowModal(false);
        }, 2000);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          isModalVisible={showModal && true}
        >
          {modalMessage}
        </Modal>
      )}
      <button className={styles.button}>
        <FaHeartCircleMinus onClick={handleRemoveFromWishlist} />
      </button>
    </>
  );
};

export default RemoveFromWishlistButton;
