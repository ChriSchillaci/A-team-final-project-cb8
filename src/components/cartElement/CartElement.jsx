import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { FaHeart } from "react-icons/fa";


const CartElement = ({ game, typeClass = "" }) => {
  return (
    
      
    <div className={`${styles.card} ${styles[typeClass]}`}>
    <Link key={game.id} href={`/game/${game.slug}`}>
      
        {game?.background_image && (
          <Image
            src={game?.background_image}
            alt={game.name}
            height={100}
            width={100}
          />
              
        )}
       
      </Link>   
        <div className={styles.textElement}>
        <Link key={game.id} href={`/game/${game.slug}`}>
          <h4>{game.name}</h4> 
          </Link>         
          <p>
            Price:{" "}
            {Math.round(game.suggestions_count / 20) < 1
              ? "Free To Play"
              : `${Math.round(game.suggestions_count / 20)}€`}
          </p>
          <div className={styles.buttonContainer}>
          <button class={styles.cartItemButton}>Remove From Cart </button>
          <button class={styles.cartItemButton}>Add to wishlist</button>
          <button class={styles.mobileCartItemButton}><FaHeart/></button>
          <button class={styles.mobileCartItemButton}><MdOutlineRemoveShoppingCart/></button>
          </div>
        </div>
        </div> 
        
        
      
    
  );
};

export default CartElement;
