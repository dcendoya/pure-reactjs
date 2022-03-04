import React, { useContext, useEffect, useState, useRef } from "react";
import firebase from "firebase";
import { contexto } from "../CartContext";
import { getFirestore } from "../../firebase/firebase";
import "./Checkout.css";

export default function Checkout() {

    const { carrito, clearCart, precioTotal } = useContext(contexto);

    const [orderId, setOrderId] = useState();
    const [val, setVal] = useState();

    const nombreRef = useRef();
    const mobileRef = useRef();
    const emailRef = useRef();
    const provinciaRef = useRef();
    const ciudadRef = useRef();
    const direccionRef = useRef();

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                nombre: nombreRef.current.value,
                mobile: mobileRef.current.value,
                email: emailRef.current.value,
                provincia: provinciaRef.current.value,
                ciudad: ciudadRef.current.value,
                direccion: direccionRef.current.value,

            },
            items: carrito,
            total: precioTotal,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log("Orden ingresada: " + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setVal("");
                clearCart();
            })

    }





    return (

        <>
            <p className="greeting">Por favor, completá tus datos para realizar la orden de compra:</p>
            <div className="inputContainer">
                <input type="text" name="nombre" ref={nombreRef} placeholder="Nombre y Apellido" value={val} />
                <br />

                <input type="text" name="mobile" ref={mobileRef} placeholder="Celular" value={val} />
                <br />

                <input type="text" name="email" ref={emailRef} placeholder="Email" value={val} />
                <br />

                <input type="text" name="provincia" ref={provinciaRef} placeholder="Provincia" value={val} />
                <br />

                <input type="text" name="ciudad" ref={ciudadRef} placeholder="Ciudad" value={val} />
                <br />

                <input type="text" name="direccion" ref={direccionRef} placeholder="Dirección" value={val} />
                <br />

                <button onClick={() => handleClick()} className="orderButton">Generar orden</button>
            </div>

            <div className="orderIdContainer">
                {orderId && (
                    <>
                        <p>Tu orden de compra es: <span className="orderId">{orderId}</span></p>
                        <p>¡Gracias por elergirnos!</p>
                    </>)}
            </div>
        </>
    )
}