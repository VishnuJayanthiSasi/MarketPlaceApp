import "./App.css";
import React, { createContext, useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import loginContext from "./Components/loginContext";
import SignUp from "./Components/SignUp";
import Product from "./Components/Product";

import CartPage from "./Components/CartPage";
import UserProfile from "./Components/UserProfile";
import PurchaseHistory from "./Components/PurchaseHistory";

export const userContext = createContext();

function App() {
  const loginData = {
    email: "a",
    password: "123",
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cart, setCart] = React.useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const [auth, setAuth] = React.useState(false);
  return (
    <div className="App">
      <userContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <loginContext.Provider
          value={{
            loginData,
            auth,
            email,
            setEmail,
            setAuth,
            password,
            setPassword,
          }}
        >
          <BrowserRouter>
            <Routes>
              {/* {auth ? (
              <Route path="/home" element={<Home />} />
            ) : (
              <Route path="/" element={<SignIn />} />
            )} */}

              <Route path="/home" element={<Home />} />

              <Route path="/" element={<SignIn />} />

              <Route path="/register" element={<SignUp />} />
              <Route
                path="/product"
                element={<Product cart={cart} setCart={setCart} />}
              />
              <Route
                path="/cart"
                element={
                  <CartPage
                    cart={cart}
                    setCart={setCart}
                    purchaseHistory={purchaseHistory}
                    setPurchaseHistory={setPurchaseHistory}
                  />
                }
              />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route
                path="/history"
                element={<PurchaseHistory purchaseHistory={purchaseHistory} />}
              />

              {/* <Route path="/newpage" element={<NewPage />} /> */}
              {/* <Route path="/checkout" element={<Checkout cart={cart} />} /> */}
              {/* <Route path="/addressform" element={<AddressForm />} /> */}
              {/* <Route path="/paymentform" element={<PaymentForm/>}/> */}

              {/* <Route
              path="/trackorder"
              element={<OrderTrackingPage purchaseHistory={purchaseHistory} />}
            /> */}
            </Routes>
          </BrowserRouter>
        </loginContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
