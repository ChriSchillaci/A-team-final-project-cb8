const BASE_URL = "https://api.rawg.io/api";

export const httpGET = async (
  endpoint = "",
  limit = "",
  page = 1,
  date = "",
  order = "",
  search = "",
  genres = "",
  parent_platforms = ""
) => {
  try {
    const res = await fetch(
      `${BASE_URL}${endpoint}?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=${limit}&page=${page}&dates=${date}&ordering=${order}&search=${search}${genres}${parent_platforms}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};
