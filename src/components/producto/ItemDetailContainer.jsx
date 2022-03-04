import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../firebase/firebase";

export default function ItemDetailContainer () {

    const { itemId } = useParams();
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const miItem = itemCollection.doc(itemId);

        miItem
            .get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log("no existe este producto");
                    return
                }
                console.log("producto encontrado");
                setProducto({id: doc.id, ...doc.data()});
            })
            .catch((err)=> {
                console.log(err);
            })
            .finally(() => { setLoading(false) });
    }, [itemId])

    return (
        <>
            <div><ItemDetail key={producto.id} producto={producto} loading={loading} /></div>
        </>
    )
}