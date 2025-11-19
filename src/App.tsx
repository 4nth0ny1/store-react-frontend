import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx"; // Assuming you have these components
import ProductPage from "./pages/ProductPage.tsx";
import StoresPage from "./pages/StoresPage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add a catch-all route for 404 pages */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
