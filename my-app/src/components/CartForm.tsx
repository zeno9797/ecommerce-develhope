import React from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

function CartForm() {
    const { closeCart, cartItems } = useShoppingCart();

    return (
        <>
            <div className='d-flex flex-column'>
                <h6>Card type</h6>
                svg carte
                <div>
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='Cognome' />
                </div>
                <input type="text" placeholder='Indirizzo di spedizione' />
                <input type="text" placeholder='Card number' />
                <input type="text" placeholder='Expiration' />
                <input type="text" placeholder='CVV' />

                <div className="fw-bold fs-5">
                    Importo totale:{" "}
                    {cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find((i) => i.id === cartItem.id);
                        return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)}
                    €
                </div>
                <Button
                    className="prd-btn"
                    style={{
                        borderRadius: 5,
                        border: "1px solid red",
                        width: "100px"
                    }}>
                    Checkout
                </Button>
            </div>

        </>
    );
}


export default CartForm