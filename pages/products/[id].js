import { useRouter } from 'next/router';
import axios from 'axios';

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await axios.get('https://fakestoreapi.com/products');
  const products = res.data;

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
  const product = res.data;

  return {
    props: {
      product,
    },
  };
}

export default Product;