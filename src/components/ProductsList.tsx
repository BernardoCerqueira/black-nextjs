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
            <Row className="productsRow">
                {products.map(product => (
                    <Col md={6} lg={4} xl={3} key={product.id} className="productCardCol">
                        <ProductCard
                            product = {product}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}