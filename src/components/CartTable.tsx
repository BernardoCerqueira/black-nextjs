import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "reactstrap";
import { useCart } from "../hooks/useCart";
import { ProductType } from "../services/products";

type CartEntry = {
  product: ProductType
  quantity: number
}

const CartTableRow = (props: {
  entry: CartEntry
}) => {
  const { addProduct, removeProduct } = useCart()

  return (
    <tr>
      <td>
        <Row className="align-items-center">
          <Col xs={4} md={4} lg={4}>
            <Image
              src={props.entry.product.imageUrl}
              alt={props.entry.product.name}
              height={500}
              width={600}
              className="cartProductImage"
            />
          </Col>
          <Col xs={8} md={8} lg={8}>
            <strong>{props.entry.product.name}</strong>
          </Col>
        </Row>
      </td>
      <td>R$ {props.entry.product.price}</td>
      <td>{props.entry.quantity}</td>
      <td>R$ {(props.entry.product.price * props.entry.quantity)}</td>
      <td className="buttonsTd">
        <Button
          color="primary"
          size="sm"
          onClick={() => addProduct(props.entry.product)}
        >
          +
        </Button>
        {' '}
        <Button
          color="danger"
          size="sm"
          onClick={() => removeProduct(props.entry.product.id)}
        >
          –
        </Button>
      </td>
    </tr>
  )
}

export default function CartTable() {
    const [cartEntries, setCartEntries] = useState<CartEntry[]>([])
    const { cart } = useCart()
  
    useEffect(() => {
      const entriesList = cart.reduce((list, product) => {
        const entryIndex = list.findIndex(entry => entry.product.id === product.id)
  
        if (entryIndex === -1) {
          return [
            ...list,
            {
              product,
              quantity: 1
            }
          ]
        }
  
        list[entryIndex].quantity++
        return list
  
      }, [] as CartEntry[])
  
      entriesList.sort((a, b) => a.product.id - b.product.id)
      setCartEntries(entriesList)
  
    }, [cart])
  
    return (
      <Table responsive className="align-middle" style={{ minWidth: '32rem' }}>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Qtd.</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
                {cartEntries.map(entry => <CartTableRow key={entry.product.id} entry={entry} />)}
        </tbody>
      </Table>
    )
  }