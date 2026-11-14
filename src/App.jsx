import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Categories from "./pages/Categories";
import CategoryCars from "./pages/CategoryCars";
import BookTestDrive from "./pages/BookTestDrive";
import MyBookings from "./pages/MyBookings";
import Contact from "./pages/Contact";
import ThemeProvider from "./context/ThemeContext";
import Footer from "./components/Footer";

function App() {

  return (
    <ThemeProvider>
      <Navbar />

      

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="categories" element={<Categories />}>
          <Route path=":category" element={<CategoryCars />} />

        </Route>

        <Route
         path="/book"
         element={<BookTestDrive /> } 
        />

        <Route path="/bookings" element={<MyBookings />} />

        <Route path="/contact" element={<Contact />} />

        <Route
         path="*" 
         element={<h1 className="page">404 - Page Not Found</h1>} />
      </Routes>

      

      <Footer />
    </ThemeProvider>
  );
}

export default App;