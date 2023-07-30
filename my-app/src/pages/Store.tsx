import React, { useState } from 'react';
import storeItems from '../data/items.json';
import { Row, Col } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import cyber from '../components/carousel-imgs/cyberpunk.png';
import dbz from '../components/carousel-imgs/kakarot.png';
import diablo from '../components/carousel-imgs/diablo.png';
import Product from './Product';

type PropsType = {
  searchString: string;
};

type Platform = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  platform: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
};

const Store = ({ searchString }: PropsType) => {
  const [ps5, setPs5] = useState<Platform[]>([]);
  const [xbox, setXbox] = useState<Platform[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  function handleFilterPS5() {
    const arrayPs5 = storeItems.filter((e) => {
      return e.platform === 'PS5';
    });
    setPs5(arrayPs5);
    setSelectedPlatform('PS5');
  }

  function handleFilterXbox() {
    const arrayXbox = storeItems.filter((e) => {
      return e.platform === 'Xbox';
    });
    setXbox(arrayXbox);
    setSelectedPlatform('Xbox');
  }

  function handleShowAll() {
    setSelectedPlatform('');
  }

  const itemsToRender = selectedPlatform ? (selectedPlatform === 'PS5' ? ps5 : xbox) : storeItems;

  return (
    <>
      <h2 className='fw-bold'>
        In <span className='text-danger fs-1 fw-bold'>evidenza</span>
      </h2>
      <br />
      <Carousel className='h-100 bg-danger'>
        <Carousel.Item style={{ objectFit: 'cover' }}>
          <Link to='./product/6'>
            <div className='carousel-item active'>
              <img src={cyber} className='d-block w-100' alt='cyberpunk' />
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'cover' }}>
          <Link to={`/product/2`}>
            <div
              className='carousel-item active'
              style={{
                width: '100%',
              }}
            >
              <img src={diablo} className='d-block w-100' alt='diablo' />
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'cover' }}>
          <Link to='./product/5'>
            <div
              className='carousel-item active'
              style={{
                width: '100%',
              }}
            >
              <img src={dbz} className='d-block w-100' alt='dbz' />
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
      <br />
      <hr />
      <br />
      <h2 className='fw-bold'>
        Video<span className='text-danger fw-bold'>Games</span>
      </h2>
      <br />
      <div>
        <button onClick={handleFilterPS5}>ps5</button>
        <button onClick={handleFilterXbox}>xbox</button>
        <button onClick={handleShowAll}>Mostra tutti i giochi</button>
      </div>
      <br />
      <Row md={2} xs={1} lg={4} className='g-5'>
        {itemsToRender.map((item) => {
          if (item.name.toLowerCase().includes(searchString.toLowerCase()) || searchString == '') {
            return (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            );
          } else {
            return <></>;
          }
        })}
      </Row>
    </>
  );
};

export default Store;