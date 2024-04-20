import Link from "next/link";
import styles from "./index.module.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRouter } from "next/router";

const Pagination = ({
  count,
  prev,
  next,
  page,
  search,
  genresQuery,
  parentPlatformsQuery,
}) => {
  const router = useRouter();
  const pageSize = 20;
  const totalPages = Math.ceil(count / pageSize);

  if (isNaN(totalPages)) {
    router.push("/404");
  }

  const searchString = "&search=";
  const searchCondition = search !== null ? searchString + search : "";

  return (
    <div className={styles.Pagination}>
      {prev !== null && (
        <button className={styles["page-btn__prev"]}>
          <Link
            className={styles["page-btn__link"]}
            href={`/store?page=${
              page - 1
            }${searchCondition}${genresQuery}${parentPlatformsQuery}`}
          >
            <MdChevronLeft className={styles["page-btn__icon"]} />
          </Link>
        </button>
      )}
      <span>
        Page {page} of {totalPages}
      </span>
      {next !== null && (
        <button className={styles["page-btn__next"]}>
          <Link
            className={styles["page-btn__link"]}
            href={`/store?page=${++page}${searchCondition}${genresQuery}${parentPlatformsQuery}`}
          >
            <MdChevronRight className={styles["page-btn__icon"]} />
          </Link>
        </button>
      )}
    </div>
  );
};

export default Pagination;
