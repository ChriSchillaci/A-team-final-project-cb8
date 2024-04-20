import { FaHeartCirclePlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import styles from "./index.module.scss";

const AddToWishlistButton = ({ game }) => {
  const [showModalNoUsername, setshowModalNoUsername] = useState(false);
  const [showModalAddtoWishlist, setshowModalAddtoWishlist] = useState(false);
  const [showModalAlreadyInWishlist, setshowModalAlreadyInWishlist] =
    useState(false);
  const username =
    typeof window !== "undefined" && localStorage.getItem("username");

  const handleAddToWishlist = async () => {
    if (!username) {
      setshowModalNoUsername(true);
      return;
    }

    try {
      const res = await fetch("/api/wishlist", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          game: {
            slug: game.slug,
            name: game.name,
            background_image: game.background_image,
            suggestions_count: game.suggestions_count,
          },
        }),
      });

      const data = await res.json();

      if (data.success === true) {
        setshowModalAddtoWishlist(true);
      }
      if (data.message === "Game already in wishlist") {
        setshowModalAlreadyInWishlist(true);
        return;
      }

      if (!data.success) {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    if (
      showModalNoUsername ||
      showModalAddtoWishlist ||
      showModalAlreadyInWishlist
    ) {
      const timer = setTimeout(() => {
        setshowModalNoUsername(false);
        setshowModalAddtoWishlist(false);
        setshowModalAlreadyInWishlist(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showModalNoUsername, showModalAddtoWishlist, showModalAlreadyInWishlist]);

  return (
    <>
      {showModalNoUsername && (
        <Modal onClose={() => setshowModalNoUsername(false)}>
          Only logged user can add to wishlist.
        </Modal>
      )}
      {showModalAddtoWishlist && (
        <Modal onClose={() => setshowModalAddtoWishlist(false)}>
          Game Added to Wishlist!
        </Modal>
      )}
      {showModalAlreadyInWishlist && (
        <Modal onClose={() => setshowModalAlreadyInWishlist(false)}>
          Game Already in Wishlist.
        </Modal>
      )}
      <button className={styles.button}>
        <FaHeartCirclePlus onClick={handleAddToWishlist} />
      </button>
    </>
  );
};

export default AddToWishlistButton;
