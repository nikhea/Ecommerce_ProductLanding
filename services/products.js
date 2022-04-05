import axios from "axios";
const url = `https://fakestoreapi.com/products`;
// import { products } from "../data";
module.exports = {
  getProducts: async () => {
    const {data: products, status} = await axios.get(url);
    // const status = 200;
    let messages = null;
    if (status === 200) {
      messages = `suceess`;
    } else {
      messages = `failed`;
    }
     const datas = {
       products,
       messages
     }
    return datas
  },
};
