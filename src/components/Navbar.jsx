
import {MenuAlt3Icon, ShoppingCartIcon, XIcon} from "@heroicons/react/outline"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { carts } from "../atom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [mobile, setMobile] = useState(false)
  const {user} = useContext(AuthContext)
  const [totalCart, SetTotalCart] = useRecoilState(carts)

  return (
    <header className="bg-gray-100 border-b shadow border-gray-200 p-5 fixed w-full z-50">
      <div className="max-w-[1350px] mx-auto">
        <div className="w-full flex items-center justify-between">
          <Link to="/">
            <h1 className="text-center text-3xl md:text-4xl font-bold tangerine">
              Perfumes and More Stores
            </h1>
          </Link>
          <div className="md:flex items-center justify-center gap-5">
            <div className="md:flex items-center justify-center hidden gap-5">
              {!user && (
                <Link to="/register">
                  <p className="text-gray-600 font-semibold">Register</p>
                </Link>
              )}
              {!user && (
                <Link to="/login">
                  <p className="text-gray-600 font-semibold">Sign In</p>
                </Link>
              )}
              {user && (
                <Link to="/">
                  <p className="text-gray-600 font-semibold">Home</p>
                </Link>
              )}
              <Link to="/product">
                <p className="text-gray-600 font-semibold">Products</p>
              </Link>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Link to="/cart">
                <div className="flex items-center justify-center">
                  <p className="text-gray-600 font-semibold md:block hidden">
                    Cart
                  </p>
                  <div className="relative">
                    <ShoppingCartIcon className="text-gray-700 h-7" />
                    <div className="bg-blue-500 w-5 h-5 borderFull flex items-center justify-center absolute -top-3 -right-3">
                      <p className="text-white font-semibold text-xs">{totalCart.length}</p>
                    </div>
                  </div>
                </div>
              </Link>
              {mobile ? (
                <XIcon
                  onClick={() => setMobile(!mobile)}
                  className="h-7 ml-2 md:hidden"
                />
              ) : (
                <MenuAlt3Icon
                  onClick={() => setMobile(!mobile)}
                  className="h-7 ml-2 md:hidden"
                />
              )}
            </div>
          </div>
        </div>
        {mobile && (
          <div className="md:hidden flex flex-col items-center justify-center gap-5 my-10 w-full transition-all duration-[1.5s] ease-out">
            {!user && (
              <Link to="/register">
                <p className="text-gray-600 border-y pt-6 pb-2 border-white w-full text-center">
                  REGISTER
                </p>
              </Link>
            )}
            {!user && (
              <Link to="/login">
                <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
                  SIGN IN
                </p>
              </Link>
            )}
            <Link to="/">
              <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
                Home
              </p>
            </Link>
            <Link to="/product">
              <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
                Product
              </p>
            </Link>
            <Link to="/cart">
              <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
                Cart
              </p>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
