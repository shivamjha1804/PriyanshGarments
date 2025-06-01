import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
import ProductPage from "../components/ProductDetails/ProductDetails";
import WhyChooseUs from "./WhyChooseUs";
import RelatedProducts from "./RelatedProducts";

const SingleProduct = () => {
  return (
    <div>
      <NavBar />
      <ProductPage />
      <WhyChooseUs />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default SingleProduct;
