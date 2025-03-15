import Head from 'next/head';
import { fetchProducts } from '@/utils/api';
import ProductList from '@/components/ProductList';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Store using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductList products={products} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
  };
}
