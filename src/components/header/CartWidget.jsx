import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {BsFillCartFill} from "react-icons/bs";
import { contexto } from "../CartContext";

export default function CartIcon () {
    const { carrito, cantidadTotal } = useContext(contexto);

    return (
        <Link to="/cart" style={{color: (carrito == 0)? '#bababa' : '#000000', textDecoration: "none", fontWeight: "lighter"}}><div><BsFillCartFill style={{color: (carrito == 0)? '#bababa' : '#000000', paddingLeft: "0px", paddingTop: "30px", justifyContent: "center"}}/>{cantidadTotal}</div></Link>
    )
}