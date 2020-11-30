import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import BrandStore from "./BrandStore";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart/:id" component={Cart}></Route>
          <Route path="/" exact>
            <Header />
            <BrandStore />
          </Route>
          <Route path="/product/:id" component={ProductDetails}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
