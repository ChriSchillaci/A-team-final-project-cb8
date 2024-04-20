import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { handleSlider } from "@/utils/handleSlider";
import Card from "../card";
import styles from "./index.module.scss";

const SectionList = ({ data, title, cardRectangular }) => {
  const slider = useRef(null);

  return (
    <div className={styles.SectionList}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles["carousel-container"]}>
        <button
          className={styles["prev-btn"]}
          onClick={() => handleSlider("prev", slider)}
        >
          <MdChevronLeft className={styles["icon-arrow"]} />
        </button>
        <div className={styles["carousel-list"]} ref={slider}>
          {data?.map((data) => (
            <Card
              key={data.id}
              game={data}
              typeClass="card-home"
              cardRectagular={cardRectangular}
            />
          ))}
        </div>
        <button
          className={styles["next-btn"]}
          onClick={() => handleSlider("next", slider)}
        >
          <MdChevronRight className={styles["icon-arrow"]} />
        </button>
      </div>
    </div>
  );
};

export default SectionList;
