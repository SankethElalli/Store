import { useRouter } from 'next/router';
import { fetchProduct } from '@/utils/api';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <Row className="my-4">
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={6}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticPaths() {
  const products = await fetchProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = await fetchProduct(params.id);
  return {
    props: {
      product,
    },
  };
}

export default ProductPage;