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
          height: "480px",
          width: "1920px",
          margin: "0 auto",
          marginLeft: -310,
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
          height: "480px",
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
          height: "480px",
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

        {/* <Carousel.Item style={{
         height: "480px",
         objectFit: "cover",

        }}>
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{ 
                width: '100%',
                marginTop: "-60px",
               }}
            >
              <img src="http://localhost:3000/imgs/fifa.jpg"
                className="d-block w-100"
                alt="fifa" />
            </div>
          </Link>

        </Carousel.Item>

        <Carousel.Item style={{
         height: "480px",
         objectFit: "cover",
        }}>
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{ 
                width: '100%',
                marginTop: "-20px",
               }}
            >
              <img src="http://localhost:3000/imgs/ragnarok.jpg"
                className="d-block w-100"
                alt="ragnarok" />
            </div>
          </Link>

        </Carousel.Item> */}
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