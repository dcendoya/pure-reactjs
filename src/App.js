import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/home/ItemListContainer';
import ItemDetailContainer from './components/producto/ItemDetailContainer';
import Catalogo from './components/catalogo/Catalogo';
import Cart from './components/cart/Cart';
import CartContext from './components/CartContext';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
            <Switch>
              {/* ruta home */}
              <Route exact path="/">
                <ItemListContainer greeting={'¡Hola! Conocé todos nuestros productos:'} />
              </Route>

              {/* ruta catálogo */}
              <Route path="/catalogo/:catalogoId">
                <Catalogo />
              </Route>

              {/* ruta item */}
              <Route path="/item/:itemId">
                <ItemDetailContainer />
              </Route>

              {/* ruta carrito */}
              <Route exact path="/cart">
                <Cart />
              </Route>

              {/* ruta checkout */}
              <Route exact path="/checkout">
                <Checkout />
              </Route>
            </Switch>
          <Footer />
        </BrowserRouter>
      </CartContext>


    </>
  );
}

export default App;