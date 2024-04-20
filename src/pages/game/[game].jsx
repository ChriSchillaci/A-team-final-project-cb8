import React, { useState } from "react";
import Image from "next/image";
import { httpGET } from "@/utils/http";
import styles from "../../styles/Game.module.scss";
import Spinner from "@/components/spinner";
import { shimmer, toBase64 } from "@/utils/shimmer";
import AddToWishlistButton from "@/components/AddToWishlistButton/AddToWishlistButton";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";

export const getServerSideProps = async (context) => {
  try {
    const [game, screenshots] = await Promise.all([
      httpGET(`/games/${context.params.game}`),
      httpGET(`/games/${context.params.game}/screenshots`),
    ]);

    return { props: { game, screenshots: screenshots.results } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function GamePage({ game, screenshots }) {
  const [loaderImg, setLoaderImg] = useState(true);

  const [changeImage, setChangeImage] = useState(game.background_image);

  const handleLoaderImg = () => {
    setLoaderImg(false);
  };

  const priceInEuro = (
    <>
      {Math.round(game.suggestions_count / 20) < 1
        ? "Free To Play"
        : `${Math.round(game.suggestions_count / 20)}€`}
    </>
  );

  return (
    <div className={styles.game}>
      <div className={styles.image_container}>
        {loaderImg && <Spinner />}
        {game.background_image && (
          <Image
            className={`${styles.image} ${loaderImg && styles["hide-image"]}`}
            src={changeImage}
            alt={game.name}
            width={1280}
            height={720}
            quality={70}
            onLoad={handleLoaderImg}
            priority={true}
          />
        )}
      </div>

      <div className={styles.gallery}>
        {screenshots.map((item) => (
          <div key={item.id} className={styles.gallery__img_container}>
            {
              <Image
                className={`${styles.image__gallery}  ${
                  changeImage === item.image
                    ? styles.image__gallery__active
                    : ""
                } `}
                src={item.image}
                alt={"image"}
                width={250}
                height={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(250, 80)
                )}`}
                onClick={() => setChangeImage(item.image)}
              />
            }
          </div>
        ))}
      </div>

      <h1 className={styles.title}>{game.name}</h1>

      <div className={styles.description_container}>
        <h4 className={styles.price}>
          Price: <span>{priceInEuro}</span>
        </h4>

        <h4 className={styles.wishlisted}>
          Wishlisted: <span>{game.suggestions_count}</span>
        </h4>

        <h4 className={styles.released}>
          Released: <span>{game.released}</span>
        </h4>

        {game.metacritic && (
          <h4 className={styles.metacritic}>
            Metacritic: <span> {game.metacritic}</span>
          </h4>
        )}
      </div>
      <div className={styles.description_container2}>
        <h3 className={styles.description}>Description:</h3>
        <p> {game.description_raw}</p>
      </div>
      {game.platforms?.[0]?.platform.name === "PC" && (
        <div className={styles.requirement_container}>
          <h3 className={styles.requirement}>Requirements</h3>
          <p className={styles.requirement}>
            {game.platforms[0].requirements.minimum}
          </p>
          <p className={styles.requirement}>
            {game.platforms[0].requirements.recommended}
          </p>
        </div>
      )}
      <div className={styles.button__container}>
        <AddToWishlistButton game={game} />
        <AddToCartButton game={game} />
      </div>
    </div>
  );
}
