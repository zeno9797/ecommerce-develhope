import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import storeItems from "../data/items.json";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { increaseCartQuantity } = useShoppingCart();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      <Card
        className="w-100"
        style={{
          height: "420px",
          transition: "all 0.3s ease",
          ...(isHovered && {
            boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.2)",
          }),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            variant="top"
            src={imgUrl}
            height="250px"
            style={{ objectFit: "cover" }}
          />
        </Link>
        <Card.Body className="d-flex flex-column">
          <Card.Title
            className="d-flex justify-content-between align-items-baseline mb-4"
            style={{
              flexDirection: "column",
            }}
          >
            <span className="fs-2">{name}</span>
            {/* fs = font size */}
            <span className="ms-2 text-muted">{price} €</span>
          </Card.Title>

          <div className="mt-auto d-flex align-items-center flex-column">
            <Button
              onClick={() => increaseCartQuantity(id)}
              className="w-100 "
              style={{ display: "flex", justifyContent: "center", gap: 5 }}
            >
              <span>Add to cart</span>
              <svg
                style={{ color: "white", width: 25, height: 25 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
