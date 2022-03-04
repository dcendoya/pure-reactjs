import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../../firebase/firebase";
import "./ItemList.css";

export default function ItemListContainer ({greeting}) {
    
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState({});
    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.get()
            .then((querySnapShot) => {
                if (querySnapShot.size == 0) {
                    console.log("no hay items para mostrar");
                    return
                }
                    setItems(querySnapShot.docs.map((doc)=> {
                        return {id: doc.id, ...doc.data()};
                        })
                    );
                    console.log("hay items para mostrar");
             })
            .catch((err)=> {
                console.log(err);
            })
            .finally(() => {setLoading(false)});
    }, [])

    return (
        <>
            <div className="greeting">{greeting}</div>
            <div><ItemList items={items} loading={loading} /></div>

        </>
    )
}