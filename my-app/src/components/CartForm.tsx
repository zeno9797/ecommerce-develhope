import React, { useState } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { CartItem } from './CartItem';
import "./cartForm.css"
import paypal from "./loghi/PayPal.svg.webp"
import mastercard from "./loghi/Mastercard-logo.svg.png"
import visa from "./loghi/Visa_Inc._logo.svg.png"
import { useNavigate } from 'react-router-dom';


function CartForm() {
    const { closeCart, cartItems, setCartItems } = useShoppingCart();
    const [checkoutMessage, setCheckoutMessage] = useState("")
    const navigate = useNavigate();

    function onClick(){
        setCheckoutMessage("Acquisto effettuato!")
        setTimeout(() => {
            navigate("/");
        }, 1500);

        removeFromCart(0)
    }

    function removeFromCart(id:number) {
        setCartItems((currItems: any[]) => {
            return currItems.filter(item => item.id == id  )
        })
    }

    return (
        <>
            <div className='container-cart-form'>
                <div className='form-dati'>
                    <h4>Inserisci dettagli spedizione</h4>
                    <div>
                        <input type="text" placeholder='Nome' required />
                        <input type="text" placeholder='Cognome' required/>
                    </div>
                    <input type="text" placeholder='Indirizzo di spedizione' required/>
                </div>


                <div className='form-pagamento'>
                    <h4>Metodo di pagamento</h4>
                    <input type="text" 
                    inputMode="numeric" 
                    placeholder='Card number'
                    pattern="[0-9\s]{13,19}"
                    maxLength={19}
                    required />
                    <div>
                        <input type="month" placeholder='Scadenza' required/>
                        <input type="password"
                        required
                        inputMode="numeric" 
                        maxLength={3} placeholder='CVV' />
                    </div>
                    <div>
                        <img style={{
                            width: 50,
                            marginRight: 15
                        }} 
                        src={paypal} alt="" />

                        <img style={{
                            width: 30,
                            marginRight: 15
                        }} 
                        src={mastercard} alt="" />

                        <img style={{
                            width: 40,
                            marginRight: 15
                        }} 
                        src={visa} alt="" />
                    </div>

                </div>

                <div className="fw-bold fs-5" >
                    <h4 style={{
                        fontWeight: "bold"
                    }}>
                        Importo totale:{" "}
                        {cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find((i) => i.id === cartItem.id);
                            return total + (item?.price || 0) * cartItem.quantity;
                        }, 0)}
                        € </h4>
                    <Button
                    onClick={onClick}
                        className="prd-btn"
                        style={{
                            borderRadius: 5,
                            border: "1px solid red",
                            width: "100px",
                            height: "50px",
                            marginTop: "10px"
                        }}>
                        Checkout
                    </Button>

                        <h3
                        style={{
                            color: "rgb(239, 66, 66)",
                            marginTop: "10px"
                        }}
                        >{checkoutMessage}</h3>

                </div>

            </div>

        </>
    );
}


export default CartForm