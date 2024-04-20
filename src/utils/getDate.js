const bestCurrentYear = () => {
  const currentDate = new Date();
  const currentDay = currentDate.toISOString().split("T")[0];
  const currentYear_2024 = currentDay.split("-")[0];

  return [currentYear_2024, currentDay];
};

const bestPreviousYearDate = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const previousYear = currentYear - 1;

  return [previousYear, currentYear];
};

export { bestCurrentYear, bestPreviousYearDate };
