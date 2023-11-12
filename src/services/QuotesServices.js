import axios from "axios";

const BASE_URL = "https://api.quotable.io";

export const getRandomQuote = async () => {
  const url = BASE_URL + `/quotes/random`;
  return await axios.get(url);
};

export const getQuotesByAuthorName = async (name) => {
  const url = BASE_URL + `/quotes?author=${name}`;
  return await axios.get(url);
};
