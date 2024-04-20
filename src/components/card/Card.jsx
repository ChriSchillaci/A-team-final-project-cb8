import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { mapPlatformIcon } from "@/utils/mapPlatformIcon";
import { shimmer, toBase64 } from "@/utils/shimmer";

const Card = ({ game, typeClass = "", cardRectagular = "" }) => {
  return (
    <Link key={game.id} href={`/game/${game.slug}`}>
      <div
        className={`${styles.card} ${styles[typeClass]} ${styles[cardRectagular]}`}
      >
        <div className={styles["card-img__container"]}>
          {game?.background_image && (
            <Image
              className={styles["card-img"]}
              src={game?.background_image}
              alt={game.name}
              height={1080}
              width={1920}
              quality={80}
              loading="lazy"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(1920, 1080)
              )}`}
            />
          )}
        </div>
        <div className={styles.textCard}>
          <div className={styles.textCard_upper}>
            <h4>{game.name}</h4>
            <div className={styles.platformIcon}>
              {game.parent_platforms?.map((platform) => (
                <span key={platform.platform.id}>
                  {mapPlatformIcon(platform.platform.name)}{" "}
                </span>
              ))}
            </div>
            <p className={styles.rating}>
              Rating: <span>{game.rating}</span>
            </p>
          </div>
          <div className={styles.textCard_bottom}>
            <p>
              Price:{" "}
              {Math.round(game.suggestions_count / 20) < 1
                ? "Free To Play"
                : `${Math.round(game.suggestions_count / 20)}€`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
