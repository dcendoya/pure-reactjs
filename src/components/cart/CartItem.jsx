import React, { useContext } from "react";
import { contexto } from "../CartContext";
import "./Cart.css";

export default function CartItem({ prod }) {

    const { deleteItem } = useContext(contexto);

    return (
        <>
            <div className="Cart-Items">
                <div className="image-box">
                    <img src={prod.item.url} style={{ height: "100px" }} />
                </div>
                <div className="about">
                    <h1 className="title">{prod.item.title}</h1>
                    <h3 className="subtitle">{prod.item.color}</h3>
                </div>
                <div className="cantidad">
                    <div className="count">Cantidad: {prod.cantidad}</div>
                </div>
                <div className="prices">
                    <h1 className="title">${prod.item.price * prod.cantidad}</h1>
                    <h3 className="subtitle">Subtotal</h3>
                </div>
                <div className="prices">
                <button onClick={() => deleteItem(prod.item.id)} className="boton">Quitar</button>
                </div>
            </div>
        </>
    )
}