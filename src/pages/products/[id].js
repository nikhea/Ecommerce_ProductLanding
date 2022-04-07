import { getProducts, getProduct } from "../../../services/products";

const ProductDetila = ({ product }) => {
  console.log(product);
  return (
    <div>
      ProductDetila
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
