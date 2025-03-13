import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./components/Product";  // Individual product component
import Wishlist from './pages/Wishlist';
import Register from "./pages/Register";
import Login from "./pages/Login";

// ... other imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ... other routes ... */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; 