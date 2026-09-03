import axios from "axios";

const API_URL = "http://localhost:5000/api/items";

export const createItem = async (itemData) => {
  const response = await axios.post(API_URL, itemData);
  return response.data;
};