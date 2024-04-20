import { useEffect, useRef, useState } from "react";
import { sortData } from "@/utils/sortData";
import { TbPacman } from "react-icons/tb";
import { BiSolidGhost } from "react-icons/bi";
import Spinner from "../spinner";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

const Carousel = ({ data }) => {
  const [handleIndex, setHandleIndex] = useState(0);
  const [loaderHero, setLoaderHero] = useState(true);

  const sortedData = sortData(data, "suggestions_count");
  const handleCover = () => {
    setLoaderHero(false);
  };

  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      handleIndex === 4
        ? setHandleIndex(0)
        : setHandleIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(timerId.current);
    };
  }, [handleIndex]);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.carousel_container}>
        <section className={styles.Carousel}>
          <Link
            key={sortedData?.[handleIndex].id}
            href={`/game/${sortedData?.[handleIndex].slug}`}
            className={styles.link_cover}
          >
            <div className={styles.gradient}></div>
            {loaderHero && <Spinner />}
            {sortedData?.[handleIndex]?.background_image && (
              <Image
                className={`${styles.cover} ${
                  loaderHero ? styles["hide-cover"] : ""
                }`}
                src={sortedData?.[handleIndex]?.background_image}
                alt={sortedData?.[handleIndex]?.name}
                width={800}
                height={800}
                quality={100}
                priority={true}
                onLoad={handleCover}
              />
            )}
            <h3 className={styles.title}>{sortedData?.[handleIndex]?.name}</h3>
          </Link>
        </section>
      </div>
      <ul className={styles.bullets}>
        {data?.map((_, idx) => (
          <li
            key={idx}
            className={styles.bullet}
            onClick={() => setHandleIndex(idx)}
          >
            {" "}
            {idx === handleIndex ? (
              <TbPacman className={styles["bullet-pacman"]} />
            ) : (
              <BiSolidGhost className={styles.ghost} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carousel;
