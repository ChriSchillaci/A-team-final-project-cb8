import { bestCurrentYear, bestPreviousYearDate } from "@/utils/getDate";

const [currentYear_2024, currentDay] = bestCurrentYear();
const [previousYear, currentYear] = bestPreviousYearDate();

export const gameListData = [
  {
    name: "All Time Top 20",
    slug: "all_time",
    date: "",
    order: "-added",
  },
  {
    name: `Popular in ${currentYear_2024}`,
    slug: "best_year",
    date: `${currentYear_2024},${currentDay}`,
    order: "-rating",
  },
  {
    name: `Best Of ${previousYear}`,
    slug: "best_previous_year",
    date: `${previousYear},${currentYear}`,
    order: "-rating",
    cardRectangular: "card_rectangular",
  },
];
