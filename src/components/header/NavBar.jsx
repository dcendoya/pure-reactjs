import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CartIcon from "./CartWidget";
import "./NavBar.css";

export default function NavBar (){
    return (
        <>
            <div className="navBarCointainer">
                <div className="brandIconContainer"><Link to={"/"} className="brandIcon">Pure™</Link></div>
                <ul className="navList">
                    <li className="listItem"><Link to={"/"} className="itemLink">Home</Link></li>
                    <li className="listItem"><Link to={"/catalogo/tops"} className="itemLink">Top Wear</Link></li>
                    <li className="listItem"><Link to={"/catalogo/bottoms"} className="itemLink">Bottom Wear</Link></li>
                </ul>
                <CartIcon style={{display: "inline"}}/>
            </div>
        </>
)
}