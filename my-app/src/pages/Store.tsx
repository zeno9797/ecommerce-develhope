import React from 'react'
import storeItems from "../data/items.json"
import { Row, Col} from "react-bootstrap"
// COL sta per columns e ROW per riga
import { StoreItem } from '../components/StoreItem'
import Carousel from "react-bootstrap/Carousel"

function Store() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img src="http://localhost:3000/imgs/1.jpg" alt="" />
        

      </Carousel.Item>
      <Carousel.Item>
        <img src="http://localhost:3000/imgs/2.jpg" alt="" />
        

      </Carousel.Item>
    </Carousel>
    <div>Store</div>
    <Row md={2} xs={1} lg={3} className='g-3'>
      {storeItems.map(item => (
        <Col key={item.id}>
        <StoreItem {...item} />
      </Col>
      ))}
      
    </Row>
    </>
    
  )
}

export default Store