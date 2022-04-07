import axios from "axios";
const url = `https://fakestoreapi.com/products/categories`;
// import { products } from "../data";
module.exports = {
  getCategory: async () => {
    const { data: products, status } = await axios.get(url);
    // const status = 200;
    let messages = null;

    try {
      const data = {
        products,
        messages,
      };
      return data;
    } catch (error) {
      return (messages = `failed`);
    }
  },
  getProduct: async (id) => {
    // "https://fakestoreapi.com/products/1";
    console.log("product IIII", id);
    const { data: product, status } = await axios.get(`${url}/${id}`);
    try {
      const data = {
        product,
      };
      return data;
    } catch (error) {
      return (messages = `failed`);
    }
  },
};
