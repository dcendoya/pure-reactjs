import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { contexto } from "../CartContext";
import ItemCount from "./ItemCount";
import Loading from "../loading/Loading";
import "./ItemDetail.css";


export default function ItemDetail({ producto, loading }) {
    const { addToCart } = useContext(contexto);

    const [showItemCount, setShowItemCount] = useState(true);

    const [cantidad, setCantidad] = useState(0);

    function sumar() {

        if (cantidad < producto.stock) setCantidad(cantidad + 1);
    }

    function restar() {
        if (cantidad > 0) setCantidad(cantidad - 1);
    }

    function onAdd() {
        console.log(`Agregaste ${cantidad} ${producto.title} al carrito.`);
        addToCart(producto, cantidad);
        setShowItemCount(false);
    }

    return (
        <>

            {(loading) ?
                (<Loading />)
                :
                (
                    <div className="container">
                        <div className="images">
                            <img src={producto.url} style={{width: "200px", marginTop: "30px"}}/>
                        </div>
                        <div className="product">
                            <h1>{producto.title} color {producto.color}</h1>
                            <h2>${producto.price}</h2>
                            <p className="desc">{producto.description}</p>
                            <p className="desc">Stock del producto: {producto.stock}</p>

                            <div>
                                {(showItemCount)?
                                <>
                                    <ItemCount onAdd={onAdd} cantidad={cantidad} sumar={sumar} restar={restar} />
                                </>
                                :
                                <>
                                    <Link to={"/cart"} className="botonVerCarrito">Ver carrito</Link>
                                </>
                                }

                            </div>
                        </div>

                    </div>
                )

            }
        </>
    )
}