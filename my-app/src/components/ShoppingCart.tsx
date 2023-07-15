import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    return (
        
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Il tuo carrello 
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <br />
                    <div className="ms-auto fw-bold fs-5">
                        Importo totale: {cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0 )* cartItem.quantity
                        }, 0)}€
                    </div>
                </Stack>
                <Button 
                className="w-50 mt-5 order-btn"
                style={{
                    marginLeft: "25%",
                    border: '1px solid red'
                    
                }}>
                    Procedi all'ordine
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
        
    )
}