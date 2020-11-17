import axios from "axios";

// https://api.vilnius.lt/api
const VILNIUS_MESSAGES_URL =
  "https://cors-anywhere.herokuapp.com/https://api.vilnius.lt/get-vilnius-gyvai/getmessages";

export const getData = async (value, parameter = "type") => {
  let fetchURL = VILNIUS_MESSAGES_URL;
  const typeOrScope = parameter === "type" ? "type" : "scope";
  if (value && value > 0) {
    fetchURL = `${VILNIUS_MESSAGES_URL}?${typeOrScope}=${value}`;
  }
  console.log("fetching data from:", fetchURL);
  const { data = [] } = await axios.get(fetchURL);

  return data;
};

export const getDataByCategory = async categoryNum => {
  return getData(categoryNum, "scope");
};

export const getDataByType = async typeNumber => {
  return getData(typeNumber, "type");
};
