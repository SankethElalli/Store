import React from 'react';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';

const ProductList = ({ products }) => {
  return (
    <div>
      <h1 className="mb-4">Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Link href={`/product/${product.id}`} passHref>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;