import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./ItemList.css";

export default function Item ({item}) {

    return (
        <>
            <div className="productItem">
            <div><img src={item.url} style={{height: "250px"}}/></div>
            <p className="itemTitle">{item.title} color {item.color}</p>  
            <p className="itemDescription">${item.price}</p>
            <Link to={`item/${item.id}`} className="boton">Ver detalle</Link>
            </div>

        </>
    )
}