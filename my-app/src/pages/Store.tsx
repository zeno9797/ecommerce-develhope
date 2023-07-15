import React from 'react'
import storeItems from "../data/items.json"
import { Row, Col } from "react-bootstrap"
// COL sta per columns e ROW per riga
import { StoreItem } from '../components/StoreItem'
import Carousel from "react-bootstrap/Carousel"
import { Link } from 'react-router-dom'
import cyber from "../components/carousel-imgs/cyberpunk.png"
import dbz from "../components/carousel-imgs/kakarot.png"
import diablo from "../components/carousel-imgs/diablo.png"
import Product from './Product'


type PropsType = {
  searchString: string
}

const Store = ({ searchString }: PropsType) => {
  return (
    <>
      <h2 className='fw-bold'>In <span className='text-danger fs-1 fw-bold'>evidenza</span></h2>
      <br />
      <Carousel
        className='h-100 bg-danger'
      >
        <Carousel.Item

          style={{
            objectFit: "cover",
          }} >

          <Link
            to='./product/6'
          >
            <div className="carousel-item active">
              <img src={cyber}
                className="d-block w-100"
                alt="cyberpunk" />
            </div>
          </Link>



        </Carousel.Item>
        <Carousel.Item style={{

          objectFit: "cover",
        }}>
          <Link
            to={`/product/2`}
          >
            <div className="carousel-item active"
              style={{
                width: '100%',

              }}
            >
              <img src={diablo}
                className="d-block w-100"
                alt="diablo" />
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item style={{

          objectFit: "cover",

        }}>
          <Link
            to='./product/5'
          >
            <div className="carousel-item active"
              style={{
                width: '100%',
              }}
            >
              <img src={dbz}
                className="d-block w-100"
                alt="dbz" />
            </div>
          </Link>

        </Carousel.Item>
      </Carousel>
      <br />
      <hr />


      <br />
      <h2 className='fw-bold'>Video<span className='text-danger fw-bold'>Games</span></h2>
      <br />

      <Carousel className='
      pb-5' interval={null} variant='dark' controls={false}>
        <Carousel.Item>
          <Row md={2} xs={1} lg={4} className='g-5'>
            {storeItems.map(item => {
              if (item.name.toLowerCase().includes(searchString.toLowerCase()) || searchString == "") {
                return (<Col key={item.id}>
                  <StoreItem {...item} />
                </Col>)
              } else {
                return (<> </>)
              }
            })}

          </Row>

        </Carousel.Item>

        <Carousel.Item>
          <Row md={2} xs={1} lg={4} className='g-5'>
            {storeItems.map(item => {
              if (item.name.toLowerCase().includes(searchString.toLowerCase()) || searchString == "") {
                return (<Col key={item.id}>
                  <StoreItem {...item} />
                </Col>)
              } else {
                return (<> </>)
              }
            })}
            

          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row md={2} xs={1} lg={4} className='g-5'>
            {storeItems.map(item => {
              if (item.name.toLowerCase().includes(searchString.toLowerCase()) || searchString == "") {
                return (<Col key={item.id}>
                  <StoreItem {...item} />
                  
                </Col>)
                
              } else {
                return (<> </>)
              }
            })}

          </Row>
        </Carousel.Item>

      </Carousel>


    </>

  )
}

export default Store