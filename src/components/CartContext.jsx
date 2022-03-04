import React, {useState, useEffect, createContext} from "react";

export const contexto = createContext();

export default function CartContext ({ children }) {

    const [carrito, setCarrito] = useState([]);

    const addToCart = (producto, cantidad) => {
        if (isInCart (producto.id)) {
            const indexItem = carrito.findIndex(element => element.item.id === producto.id);
            carrito[indexItem].cantidad = carrito[indexItem].cantidad + cantidad;
            setCarrito([...carrito]);
        } else {
        setCarrito([...carrito, {item: producto, cantidad}]);
        }
    };

    const isInCart = (id) => {
        return (carrito.some(element => element.item.id === id))
    }

    const deleteItem = (id) => {
        const updatedCart = carrito.filter(e => e.item.id !== id);
        setCarrito(updatedCart);
    }

    const clearCart = () => {
        setCarrito([]);
    }

    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

  
    useEffect(() => {
      if (carrito.length > 0) {
        setPrecioTotal(
          carrito
            .map((product) => product.item.price * product.cantidad)
            .reduce((total, valor) => total + valor)
        );

        setCantidadTotal(
            carrito
                .map((product) => product.cantidad)
                .reduce((a, b) => a + b)
          );
      } else {
        setPrecioTotal(0);
        setCantidadTotal(0);
      }
    }, [carrito]);
    
    return (
        <>
        <contexto.Provider value={{ carrito, addToCart, deleteItem, clearCart, precioTotal, cantidadTotal }}> 
            {children}
        </contexto.Provider>
        </>
    )
}