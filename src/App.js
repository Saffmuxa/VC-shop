import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page";
import { ComparisonPage } from "./pages/comparison-page";
import { RightList } from "./components/right-list";
import { Header } from "./components/header";
import { store } from "./redux";
import { Footer } from "./components/footer";

function App() {
  return (
    // <div className="App"></div>
    <BrowserRouter>
      <Provider store={store}>
        <div className="wrap">
          <Header />
          {/* <div className="divide"> */}
          <RightList />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/check" element={<ComparisonPage />} />
          </Routes>
          {/* <div className="foot"> */}
          <Footer />
        </div>
        {/* </div> */}
        {/* </div> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
