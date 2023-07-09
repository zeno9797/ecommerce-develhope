import { Button, Nav, Container, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (

        <NavbarBs sticky="top" className="bg-white shadow-sm mb-4 pb-3">
            <Container>
                <Nav className="d-flex">
                    <Nav.Link to="/" as={NavLink}>
                        Logo
                    </Nav.Link>
                </Nav>
                <div>
                    <input type="text" />
                    <button>cerca</button>
                </div>
                {cartQuantity > -1 && (
                <Button onClick={openCart} style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className="rounded-circle">
                    cart
                    

                    
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)" }}>
                        {cartQuantity}
                    </div>
                </Button>)}

            </Container>
        </NavbarBs>
    )
}