import axios from "axios";
const url = `https://fakestoreapi.com/products/categories`;
// import { products } from "../data";
module.exports = {
  getCategory: async () => {
    const { data: category } = await axios.get(url);
    // const status = 200;
    let messages = null;
    try {
      const data = {
        category,
      };
      return data;
    } catch (error) {
      return messages;
    }
  },
  getProduct: async (id) => {},
};
