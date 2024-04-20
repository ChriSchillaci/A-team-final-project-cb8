import Head from "next/head";
import Carousel from "@/components/carousel";
import SectionList from "@/components/sectionList";
import { httpGET } from "@/utils/http";
import { gameListData } from "@/mocks/gameListData";
import styles from "../styles/Home.module.scss";

export const getServerSideProps = async () => {
  try {
    const randomPageCarousel = Math.floor(Math.random() * 10);
    const [suggested, all_time, best_year, best_previous_year] =
      await Promise.all([
        httpGET("/games", 5, randomPageCarousel),
        ...gameListData.map((item) =>
          httpGET("/games", 20, 1, item.date, item.order)
        ),
      ]);

    return {
      props: {
        data: {
          suggested,
          all_time,
          best_year,
          best_previous_year,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>NovaGames</title>
        <meta name="description" content="Web Project Bootcamp CB8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel data={data.suggested?.results} />
      <section className={styles.sectionLists}>
        {gameListData.map((item, idx) => (
          <SectionList
            key={idx}
            data={data[item.slug]?.results}
            title={item.name}
            cardRectangular={item.cardRectangular}
          />
        ))}
      </section>
    </>
  );
}
