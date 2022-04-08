import { getProducts, getProduct } from "../../../services/products";
import Head from "next/head";
const ProductDetila = ({ product }) => {
  console.log(product);
  return (
    <div>
       <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{product.title && product.title}</h1>
    </div>
  );
};

export default ProductDetila;

export async function getStaticProps(context) {
  const id = context.params.id;

  const { product } = await getProduct(id);
  return {
    props: {
      product,
      //   messages,
    },
    revalidate: true,
  };
}

export async function getStaticPaths() {
  const { products } = await getProducts();
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
