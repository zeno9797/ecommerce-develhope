import { Button, Nav, Container, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Input } from "./Input";
import "./navbar.css";


export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (

    <NavbarBs sticky="top" className="bg-white shadow-sm mb-4 pb-3">

      <Container>
        <Nav className="d-flex">
          <Nav.Link to="/" as={NavLink}>
            LOGO
          </Nav.Link>
        </Nav>
        <div className="w-25">
          <Input />
        </div>

        <div className="nav">
          <Button
            className="rounded-circle login-btn"
            variant="outline-white"
            style={{ width: "3rem", height: "3rem", position: "relative" }}>
            <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 22C3.57038 20.0332 4.74796 18.2971 6.3644 17.0399C7.98083 15.7827 9.95335 15.0687 12 15C16.12 15 19.63 17.91 21 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h6 
            className="login-text"
            style={{marginLeft: "-7px"}}
            >Login</h6>
          </Button>
          {cartQuantity > -1 && (
            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative", marginRight: "20px" }}
              variant="outline-white"
              className="rounded-circle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />{" "}
                </g>
              </svg>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.2rem",
                  height: "1.2rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(10%, 10%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </div>
      </Container>
    </NavbarBs>
  );
}
