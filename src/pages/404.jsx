import Image from "next/image";
import Link from "next/link";
import styles from "../styles/404.module.scss";

export default function NotFound() {
  return (
    <div className={styles.page_404}>
      <div className={styles.img__container}>
        <Image
          className={styles.page_404__img}
          src="/images/error_img.png"
          alt="img_404"
          height={400}
          width={800}
          quality={100}
          loading="lazy"
        />
      </div>
      <Link href={"/"}>
        <button className={styles.page_404__btn}>Go back</button>
      </Link>
    </div>
  );
}
