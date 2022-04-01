

import { useContext, useEffect } from "react";
import {

  Routes,
  Route,
  Link
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { carts, updateTotal } from "./atom";
import { userRequest } from "./components/axiosMethod";
import { AuthContext } from "./context/AuthContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [allCarts, setAllCarts] = useRecoilState(carts)
  const [total, setTotal] = useRecoilState(updateTotal)
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const getUserCart = async () => {
      try {
        const usersCart = await userRequest.get(`/cart/user/${user?.id}?userid=${user?.id}`)
        setAllCarts(usersCart.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    user && getUserCart()
  }, [user, total])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
