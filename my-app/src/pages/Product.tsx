import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { useParams, Link } from "react-router-dom";
import "./productPage.css";

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
          className="card-img-smartphone"
          style={{ width: "25%", marginLeft: "18%", marginTop: "10px" }}
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
            <span className="fs-6 mb-4">
              Disponibile per il download
              {/* <svg
                style={{ marginLeft: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="green"
                height="25px"
                width="25px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1   c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256   S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315   c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047   C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256   c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687   c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064   C482.762,174.736,478.245,172.445,474.045,173.813z" />
                  <path d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161   c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344   s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75   c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663   c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411   c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314   c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037   s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728   c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978   S509.502,87.794,504.969,83.262z" />
                </g>
              </svg> */}
            </span>
            <div className="d-flex  flex-column">
              {quantity === 0 ? (
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    height: 50,
                    marginTop: 50,
                    border: "1px solid red",
                    padding: "0 10px",
                  }}
                  className="w-50 prd-btn"
                  onClick={() => increaseCartQuantity(dataProduct.id)}
                >
                  <span>Aggiungi al carrello</span>
                  <svg
                    className="svg-cart"
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
                        border: "1px solid red",
                      }}
                      className="add-btn"
                      onClick={() => decreaseCartQuantity(dataProduct.id)}
                    >
                      <span className="add-text">-</span>
                    </Button>
                    <div>
                      <span className="fs-0">
                        {quantity} Prodotto/i nel carrello
                      </span>
                    </div>
                    <Button
                      className="add-btn"
                      style={{
                        border: "1px solid red",
                      }}
                      onClick={() => increaseCartQuantity(dataProduct.id)}
                    >
                      <span className="add-text">+</span>
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
            <h3 style={{ textAlign: "center" }}>Descrizione</h3>
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
