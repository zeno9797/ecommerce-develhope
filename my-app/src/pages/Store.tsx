import React from 'react'
import storeItems from "../data/items.json"
import { Row, Col} from "react-bootstrap"
// COL sta per columns e ROW per riga
import { StoreItem } from '../components/StoreItem'
import Carousel from "react-bootstrap/Carousel"

function Store() {
  return (
    <>
    <Carousel style={{
        height: "420px",
       
      }}>
      <Carousel.Item style={{
        height: "420px",
        objectFit: "cover"
      }} >
        <img src="http://localhost:3000/imgs/car1.jpg" alt="" />
        

      </Carousel.Item>
      <Carousel.Item style={{
        height: "420px",
        objectFit: "cover"
      }}>
        <img src="http://localhost:3000/imgs/car2.jpg" alt="" />
        

      </Carousel.Item>
    </Carousel>
    <br />
    <br />
    <h1> PRODOTTI </h1>
    <br />
   
    <Row md={2} xs={1} lg={4} className='g-3'>
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