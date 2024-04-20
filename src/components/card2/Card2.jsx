import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { shimmer, toBase64 } from "@/utils/shimmer";

function Card2({ game, typeClass = "" }) {
  return (
    <div className={styles[`${typeClass}__Card`]}>
      <Link className={styles.linkCard} href={`/game/${game.slug}`}>
        <Image
          className={styles[`${typeClass}__CardImage`]}
          src={game.background_image}
          height={220}
          width={480}
          alt={game.name}
          quality={80}
          loading="lazy"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(480, 220)
          )}`}
        />
        <h4 className={styles[`${typeClass}__CardTitle`]}>{game.name}</h4>
      </Link>
      <p className={styles[`${typeClass}__CardP`]}>
        Price:{" "}
        {Math.round(game.suggestions_count / 20) < 1
          ? "Free To Play"
          : `${Math.round(game.suggestions_count / 20)}€`}
      </p>
    </div>
  );
}

export default Card2;
