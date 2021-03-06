import Head from "next/head";
import ProductsList from "../../components/products/productsList";
import { getProducts } from "../../../services/products";

const Products = ({ products, messages }) => {
  return (
    <>
      <Head>
        <title>Products List page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductsList products={products} messages={messages} />
    </>
  );
};

export default Products;

// export async function getServerSideProps() {
//   const { products, messages } = await getProducts();
//   return {
//     props: {
//       products,
//       messages,
//     },
//     revalidate: true,
//   };
// }

export async function getStaticProps() {
  const { products, messages } = await getProducts();
  return {
    props: {
      products,
      messages,
    },
    revalidate: true,
  };
}
