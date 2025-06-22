import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
import SingleProduct from "./pages/SingleProduct";
import MainContact from "./pages/MainContact";
import About from "./pages/About";

// Maintenance Popup Component
const MaintenancePopup = ({ isOpen, onClose, onContactClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 shadow-2xl">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Website Under Maintenance
          </h2>
          <p className="text-gray-600 mb-6">
            This website is currently under maintenance. Please contact us for
            any inquiries or assistance.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={onContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Router Component
const AppRouter = () => {
  const navigate = useNavigate();
  const [showMaintenancePopup, setShowMaintenancePopup] = useState(false);

  useEffect(() => {
    // Show maintenance popup after 6 seconds
    const timer = setTimeout(() => {
      setShowMaintenancePopup(true);
    }, 6000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    setShowMaintenancePopup(false);
    navigate("/contact");
  };

  const handleClosePopup = () => {
    setShowMaintenancePopup(false);
  };

  return (
    <>
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

      <MaintenancePopup
        isOpen={showMaintenancePopup}
        onClose={handleClosePopup}
        onContactClick={handleContactClick}
      />
    </>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <AppRouter />
    </Router>
  );
};

export default App;
