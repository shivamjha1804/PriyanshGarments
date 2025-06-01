import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <Router basename="/PriyanshGarments">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
      </Routes>
    </Router>
  );
};

export default App;