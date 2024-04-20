import React from "react";
import Image from "next/image";
import styles from "../../styles/Construction.module.scss";
import Link from "next/link";

export default function Construction() {
  return (
    <div className={styles.cons__Container}>
      <Image
        className={styles.cons__Image}
        src="https://www.riotgames.com/darkroom/2880/4f0a61cae53df771e8bfa97deadc0d5d:df1b70bb235cdb62e9ec5f0419a52a23/01pz056-full.png"
        alt="Under construction image"
        width={500}
        height={300}
        priority={true}
      />
      <h1 className={styles.cons__Title}>Under Construction...</h1>
      <p className={styles.cons__Message}>
        We are working hard to finish the development of this site. Go back to
        home page.
      </p>
      <Link href="/">
        <button className={styles.cons__Button}>Home</button>
      </Link>
    </div>
  );
}
