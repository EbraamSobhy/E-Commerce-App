import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
// import images
import bannnermens from "./assets/bannermens.png";
import bannnerwomens from "./assets/bannerwomens.png";
import bannnerkids from "./assets/bannerkids.png";

export default function App() {

  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Category category="men" banner={bannnermens} />} />
          <Route path="/women" element={<Category category="women" banner={bannnerwomens} />} />
          <Route path="/kids" element={<Category category="kid" banner={bannnerkids} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}