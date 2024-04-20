import { useState } from "react";
import Card from "@/components/card";
import { httpGET } from "@/utils/http";
import { gamesFilter } from "@/utils/gamesFilter";
import styles from "../../styles/Store.module.scss";
import Filter from "../../components/filterModal/Filter";
import Pagination from "@/components/pagination";

export const getServerSideProps = async (context) => {
  const { search, page, genres, parent_platforms } = context.query;

  const genresQuery = genres ? `&genres=${genres}` : "";
  const parentPlatformsQuery = parent_platforms
    ? `&parent_platforms=${parent_platforms}`
    : "";

  try {
    const data = await httpGET(
      "/games",
      20,
      page || 1,
      "",
      "-rating",
      search,
      genresQuery,
      parentPlatformsQuery
    );

    return {
      props: {
        games: data,
        page: page || 1,
        search: search || null,
        genresQuery,
        parentPlatformsQuery,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function Store({
  games,
  page,
  search,
  genresQuery,
  parentPlatformsQuery,
}) {
  const [showFilter, setShowFilter] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    setIsBlurred(!isBlurred);
  };

  const gamesFiltered = gamesFilter(games);

  return (
    <div className={styles.store}>
      {showFilter && <Filter onClose={toggleFilter}></Filter>}
      <div className={`${styles.content} ${isBlurred ? styles.blurred : ""}`}>
        <div className={styles.filterSection}>
          <button onClick={toggleFilter} className={styles.filterButton}>
            Filter
          </button>
        </div>
        <div className={styles.cardContainer}>
          {gamesFiltered.map((game) => (
            <Card key={game.id} game={game} typeClass="card_store" />
          ))}
        </div>
        <Pagination
          count={games.count}
          prev={games.previous}
          next={games.next}
          page={page}
          search={search}
          genresQuery={genresQuery}
          parentPlatformsQuery={parentPlatformsQuery}
        />
      </div>
    </div>
  );
}
