// import React from "react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home-page";
import { VideoCards } from "./pages/video-cards";
import { ComparisonPage } from "./pages/comparison-page";
import { RightList } from "./components/right-list";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { CartMenu } from "./components/cart-menu/cart-menu";
// import { BlackBG } from "./components/black-background";
// import { items } from "./components/header";

function App() {
  const items = useSelector((state) => state.cart.itemsInCart);

  const [isCart, setCartOpened] = useState(false);
  // const items = useSelector((state) => state.cart.itemsInCart);

  const closeOpenCart = () => {
    setCartOpened(!isCart);
    console.log(isCart);
  };

  return (
    // <div className="App"></div>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      {isCart ? <CartMenu items={items} closeOpenCart={closeOpenCart} /> : ""}
      <div className="wrap">
        {/* {isCart ? <BlackBG items={items} closeOpenCart={closeOpenCart} /> : ""} */}

        <Header closeOpenCart={closeOpenCart} />
        <RightList />
        <Home />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/video-cards" element={<VideoCards />} />
          {/* <Route exact path="/check" element={<ComparisonPage />} /> */}
        </Routes>
        <Footer />
      </div>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
