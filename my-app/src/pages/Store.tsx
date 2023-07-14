import React from 'react'
import storeItems from "../data/items.json"
import { Row, Col } from "react-bootstrap"
// COL sta per columns e ROW per riga
import { StoreItem } from '../components/StoreItem'
import Carousel from "react-bootstrap/Carousel"
import { Link } from 'react-router-dom'

const Store = () => {
  return (
    <>
      <Carousel
        style={{
         
        }}>
        <Carousel.Item

          style={{
            objectFit: "cover",
          }} >

          <Link
            to='./product'
          >
            <div className="carousel-item active">
              <img src="http://localhost:3000/imgs/cyberpunk.png"
                className="d-block w-100"
                alt="cyberpunk" />
            </div>
          </Link>



        </Carousel.Item>
        <Carousel.Item style={{
          
          objectFit: "cover",
        }}>
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{
                width: '100%',

              }}
            >
              <img src="http://localhost:3000/imgs/diablo.png"
                className="d-block w-100"
                alt="diablo" />
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item style={{
         
          objectFit: "cover",

        }}>
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{
                width: '100%',
              }}
            >
              <img src="http://localhost:3000/imgs/kakarot.png"
                className="d-block w-100"
                alt="elder" />
            </div>
          </Link>

        </Carousel.Item>
      </Carousel>
     
      <br />
      <br />
      <h1> PRODOTTI </h1>
      <br />

      <Row md={2} xs={1} lg={4} className='g-5'>
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