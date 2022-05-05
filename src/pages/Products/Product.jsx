import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../../Firebase";

const ProductStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    position: relative;
    margin: 0px 50px;
    max-width: 1200px;
    height: 100%;
    width: 100%;

    @media (max-width: 767.98px) {
      margin: 0px 30px;
    }

    @media (max-width: 479.98px) {
      margin: 0px 20px;
    }
  }
`;

export default function Product() {
  const [product, setProduct] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    if (product == null) getProduct(id).then((snap) => setProduct(snap));
  }, []);

  return <ProductStyles>{product != null ? product.name : ""}</ProductStyles>;
}
