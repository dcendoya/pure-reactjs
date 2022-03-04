import React, {useState, useEffect} from "react";
import Item from "./Item";
import Loading from "../loading/Loading";


export default function ItemList ({items, loading}) {
    

   
    return (
        <>
            {loading ? 
            ( <Loading/> )
            :
            (
                <>
                    {items.map((item) => <Item key={item.id} item={item} />)}
                </>
            )
            }
        
        </>
    )
}