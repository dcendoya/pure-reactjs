import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from "react/cjs/react.development";
import { contexto } from "../CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart() {

    const { carrito, clearCart, precioTotal, cantidadTotal } = useContext(contexto);


    return (
        <>
            {carrito.length === 0 ?
                <>
                    <div>
                        <p>El carrito está vacío</p>
                        <Link to="/" style={{ borderStyle: "none", borderRadius: "30px", backgroundColor: "#bababa", color: "#000000", padding: "8px", textTransform: "uppercase", textDecoration: "none", fontWeight: "bold", fontSize: "10px" }}>¡Comenzá a comprar!</Link>
                    </div>
                </>
                :
                <>
                    <div className="CartContainer">
                        <div className="Header">
                            <h3 className="Heading">Carrito</h3>
                            <button onClick={() => clearCart()} className="botonVaciar">Vaciar carrito</button>
                        </div>

                        <div>
                            {carrito.map(e => <CartItem key={e.item.id} prod={e} />)}
                        </div>
                        
                        <hr/>
                            <div className="checkout">
                                <div className="total">
                                    <div>
                                        <div className="Subtotal">Total</div>
                                        <div className="items">{cantidadTotal} productos</div>
                                    </div>
                                    <div className="total-amount">${precioTotal}</div>
                                </div>
                                <div className="buttonContainer">
                                    <Link to={"/checkout"} className="chekoutButton">Iniciar compra</Link>
                                </div>
                            </div>
                    </div>
                    <div style={{marginTop: "100px"}}></div>
                </>
            }
        </>
    )
}