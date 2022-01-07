import React from "react";
import CartProduct from "./CartProduct";
import ProductView from "./ProductView";
import { Container } from "./Styles/Index";

const Product = () => {
  return (
    <Container>
      <ProductView />
      <CartProduct />
    </Container>
  );
};

export default Product;
