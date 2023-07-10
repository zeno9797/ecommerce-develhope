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
      <Carousel style={{
        height: "420px",

      }}>
        <Carousel.Item style={{
          height: "420px",
          objectFit: "cover",
          width: 'full'
        }} >
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{ marginTop: "-80px", }}
            >
              <img src="http://localhost:3000/imgs/cyberpunk.jpg"
                className="d-block w-100"
                alt="cyberpunk" />
            </div>
          </Link>



        </Carousel.Item>
        <Carousel.Item style={{
          height: "420px",
        }}>
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{ marginTop: "-140px", }}
            >
              <img src="http://localhost:3000/imgs/diablo.jpg"
                className="d-block w-100"
                alt="diablo" />
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item style={{
          height: "420px",

        }}>
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{ marginTop: "-20px", }}
            >
              <img src="http://localhost:3000/imgs/elder.jpg"
                className="d-block w-100"
                alt="elder" />
            </div>
          </Link>

        </Carousel.Item>

        <Carousel.Item style={{
          height: "420px",

        }}>
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{ marginTop: "-60px", }}
            >
              <img src="http://localhost:3000/imgs/fifa.jpg"
                className="d-block w-100"
                alt="hogwarts" />
            </div>
          </Link>

        </Carousel.Item>

        <Carousel.Item style={{
          height: "420px",
        }}>
          <Link
            to='./product'
          >
            <div className="carousel-item active"
              style={{ marginTop: "-20px", }}
            >
              <img src="http://localhost:3000/imgs/ragnarok.jpg"
                className="d-block w-100"
                alt="hogwarts" />
            </div>
          </Link>

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