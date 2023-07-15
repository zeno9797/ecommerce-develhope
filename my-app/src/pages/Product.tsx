import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { useParams, Link } from "react-router-dom";
import './productPage.css'

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function Product({ id, name, price, imgUrl }: StoreItemProps) {
  const { n } = useParams();
  const [products, setProducts] = useState(storeItems);

  const dataProduct: StoreItemProps = products.find((item) => {
    return item.id === Number(n);
  }) as StoreItemProps;

  console.log(dataProduct.name);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(dataProduct.id);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 6,
          fontSize: 22,
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
        {dataProduct.name}{" "}
      </div>
      <br />
      <Card
        className="d-flex flex-column flex-sm-row "
        style={{
          justifyContent: "center",
          width: "100%",
          backgroundColor: "transparent",
          border: "0px",
        }}
      >
        <Card.Img
          variant="top"
          style={{ width: "15%", marginLeft: "18%", marginTop: "10px" }}
          src={dataProduct.imgUrl}
        />
        <Card.Body>
          <Card.Title
            style={{
              marginLeft: "50px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <span className="fs-2 mb-4">{dataProduct.name}</span>

            <span className="fs-4 mb-4">{dataProduct.price} € </span>
            <span className="fs-6 mb-4">Availability : In stock</span>
            <div className="d-flex  flex-column">
              {quantity === 0 ? (
                <Button
                  style={{
                    borderRadius: 25,
                    height: 50,
                    marginTop: 50,
                    border: '1px solid red',
                  }}
                  className="w-50 prd-btn"
                  onClick={() => increaseCartQuantity(dataProduct.id)}
                >
                  <span>Add to cart</span>
                  <svg
                    style={{
                      color: "white",
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                    }}
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
              ) : (
                <div
                  className="d-flex align-items-center flex-column "
                  style={{ gap: 20 }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: 20 }}
                  >
                    <Button
                    style={{
                       
                      border: '1px solid red',
                       }}
                    className="add-btn"
                      onClick={() => decreaseCartQuantity(dataProduct.id)}
                    >
                      <span
                      className="add-text"
                      >-</span>
                    </Button>
                    <div>
                      <span className="fs-0">
                        {quantity} Product in the cart
                      </span>
                    </div>
                    <Button
                     className="add-btn"
                      style={{
                       
                        border: '1px solid red',
                         }}
                      onClick={() => increaseCartQuantity(dataProduct.id)}
                    >
                      <span
                      className="add-text"
                      >+</span>
                    </Button>
                  </div>
                  <Button
                    onClick={() => removeFromCart(dataProduct.id)}
                    variant="danger"
                    size="sm"
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </Card.Title>
        </Card.Body>
      </Card>

      <br />
      <br />
      <div
        style={{
          border: "0.5px solid #dee2e6",
        }}
      ></div>
      <Card
        style={{
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          border: "0px",
          marginTop: "20px",
        }}
      >
        <div
          className="flex-column flex-sm-row flex-md-wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Card.Img
            variant="top"
            style={{ width: "300px", height: "150px" }}
            src={
              "https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"
            }
          />
          <Card.Img
            variant="top"
            style={{ width: "300px", height: "150px" }}
            src={
              "https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"
            }
          />
          <Card.Img
            variant="top"
            style={{ width: "300px", height: "150px" }}
            src={
              "https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"
            }
          />
          <Card.Img
            variant="top"
            style={{ width: "300px", height: "150px" }}
            src={
              "https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"
            }
          />
        </div>
        <br />
        <Card.Body>
          <Card.Title
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <br />
            <div
              style={{ border: "0.5px solid #dee2e6", marginBottom: 20 }}
            ></div>
            <h3 style={{ textAlign: "center" }}>Description</h3>
            <br />
            <p className="fs-6">
              Atterrata d’emergenza su un pianeta alieno e sconosciuto, Selena,
              la protagonista di Returnal per PS5, deve lottare ogni giorno per
              non sopperire. Il mondo che le si prospetta davanti, però, non è
              come la Terra: tutto è in continuo mutamento, in un ciclo costante
              di cambiamenti e capovolgimenti. Mentre si muove tra le rovine di
              un’antica civiltà, la cosmonauta è chiamata a combattere con le
              unghie e con i denti per la propria sopravvivenza. E se non c’è
              nulla di semplice, ricominciare è ancora più complicato: ogni qual
              volta Selena viene sconfitta, l’avventura riparte dal principio,
              come fosse intrappolata in un loop apparentemente infinito.
              Preparati ad un gameplay roguelike dinamico e frenetico, in cui
              scontri pirotecnici e atmosfere spettacoli si susseguono senza
              sosta. La noia, su Returnal per PlayStation 5, non è contemplata:
              ad ogni ciclo vedrai il modo intorno a te trasformarsi, e con lui
              anche gli oggetti a tua disposizione. Per consentire a Selena di
              rimanere in vita e di rompere il cerchio del caos su un pianeta in
              continua evoluzione dovrai uscire dagli schemi e prepararti ad
              affrontare i combattimenti con una strategia sempre diversa.
            </p>
            {/* fs = font size */}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
