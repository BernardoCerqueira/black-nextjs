import Image from "next/image";
import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { ProductType } from "@/services/products";
import SuccessToast from "./SuccessToats";
import { useCart } from "@/hooks/useCart";

type ProductDetailsProps = {
  product: ProductType
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const {addProduct} = useCart()

  return (
    <Row>
      <Col xl={6}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={500}
          width={600}
          className="productImage"
        />
      </Col>

      <Col xl={6}>
        <h1>{product.name}</h1>

        <h2 className="text-muted">R$ {product.price}</h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>

        <p className="text-muted">Em estoque: {product.inStock}</p>

        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => {
            addProduct(product)
            setToastIsOpen(true)
            setTimeout(() => setToastIsOpen(false), 1000 * 3)
        }}
        >
          Compre agora
        </Button>

        <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
      </Col>
    </Row>
  )
}

export default ProductDetails