import React from 'react'
import { Button, Card } from "react-bootstrap"

function Product() {
  return (
    <>
      <div>Home to nome gioco </div>
      <br />
      
      <Card

        style={{
          flexDirection: "row",
          width: "100%",
          backgroundColor: "transparent",
          border: "0px"
        }}>
        <Card.Img variant="top" style={{ width: "380px", height: "460px", marginLeft: "20px" }} src={"https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"} />
        <Card.Body>
          <Card.Title style={{
            marginLeft: "50px",
            display: "flex",
            flexDirection: "column"
          }} >
            <span className="fs-2">NOME GIOCO</span>
            {/* fs = font size */}
            <span className="fs-4">50.99 €</span>
            <span className="fs-6">disponibile in stock</span>
            <Button className='w-50'>
              Aggiungi al carrello
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>

      <br />
      <br />

      <Card
        style={{
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          border: "0px",
        }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card.Img variant="top" style={{ width: "300px", height: "150px" }} src={"https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"} />
          <Card.Img variant="top" style={{ width: "300px", height: "150px" }} src={"https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"} />
          <Card.Img variant="top" style={{ width: "300px", height: "150px" }} src={"https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"} />
          <Card.Img variant="top" style={{ width: "300px", height: "150px" }} src={"https://www.gamingtalker.it/wp-content/uploads/2020/09/returnal-cover-art-800x1024.jpg"} />
        </div>
        <br />
        <Card.Body>
          <Card.Title style={{
            display: "flex",
            flexDirection: "column",
            width: "100%"
          }} >
            <br />
            <h3 style={{textAlign: "center"}}>Descrizione</h3>
            <br />
            <p className="fs-6">Atterrata d’emergenza su un pianeta alieno e sconosciuto, Selena, la protagonista di Returnal per PS5, deve lottare ogni giorno per non sopperire. Il mondo che le si prospetta davanti, però, non è come la Terra: tutto è in continuo mutamento, in un ciclo costante di cambiamenti e capovolgimenti. Mentre si muove tra le rovine di un’antica civiltà, la cosmonauta è chiamata a combattere con le unghie e con i denti per la propria sopravvivenza. E se non c’è nulla di semplice, ricominciare è ancora più complicato: ogni qual volta Selena viene sconfitta, l’avventura riparte dal principio, come fosse intrappolata in un loop apparentemente infinito. Preparati ad un gameplay roguelike dinamico e frenetico, in cui scontri pirotecnici e atmosfere spettacoli si susseguono senza sosta. La noia, su Returnal per PlayStation 5, non è contemplata: ad ogni ciclo vedrai il modo intorno a te trasformarsi, e con lui anche gli oggetti a tua disposizione. Per consentire a Selena di rimanere in vita e di rompere il cerchio del caos su un pianeta in continua evoluzione dovrai uscire dagli schemi e prepararti ad affrontare i combattimenti con una strategia sempre diversa.</p>
            {/* fs = font size */}
          </Card.Title>
        </Card.Body>
      </Card>




    </>
  )
}

export default Product