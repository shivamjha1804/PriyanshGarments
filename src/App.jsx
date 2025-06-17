import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
import SingleProduct from "./pages/SingleProduct";
import MainContact from "./pages/MainContact";
import About from "./pages/About";

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<MainContact />} />
        {/* Legacy routes for backwards compatibility */}
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<MainContact />} />
        {/* Catch-all route - must be last */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;