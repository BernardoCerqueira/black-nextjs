import { Col, Row } from "reactstrap"
import ProductCard from "./ProductCard"
import { ProductType } from "@/services/products"
import React from "react"

type ProductsListProps = {
    products: ProductType[]
}

export const ProductsList: React.FC<ProductsListProps> = ({products}) => {
    return(
        <>
            <Row className="g-5">
                {products.map(product => (
                    <Col md={6} lg={4} xl={3} key={product.id}>
                        <ProductCard
                            product = {product}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}