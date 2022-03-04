import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getFirestore } from "../../firebase/firebase";
import Loading from "../loading/Loading";
import "./Catalogo.css";

export default function Catalogo () {

    const { catalogoId } = useParams();
    const [loading, setLoading] = useState(true)
    const [categorias, setCategorias] = useState ([]);

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("items").where('categoria', '==', catalogoId);
        itemCollection.get()
            .then((querySnapShot) => {
                if (querySnapShot.size == 0) {
                    console.log("no hay items para mostrar");
                    return
                }
                console.log("hay documentos");
                setCategorias(querySnapShot.docs.map((doc)=> {
                    return {id: doc.id, ...doc.data()}
                }
                ));
            })
            .catch((err)=> {
                console.log(err);
            })
            .finally(() => { setLoading(false) })
    }, [catalogoId])

    return (
        <>
            <div>
                <p className="greeting">Mirá todas las prendas del catálogo {catalogoId}</p>
            </div>
            
            { (loading) ?
                ( <Loading />)
                :
                (<>
                    {categorias.map(item => (
                        <div className="productItem">
                        <div><img src={item.url} style={{height: "250px"}}/></div>
                        <p className="itemTitle">{item.title} color {item.color}</p>
                        <p className="itemDescription">${item.price}</p>
                        <Link to={`/item/${item.id}`} className="boton">Ver detalle</Link>
                        </div>
                    ))}
                </>)
            }
        </>
    )

}