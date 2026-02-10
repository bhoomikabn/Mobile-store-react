import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCards";
import Products from "./Components/Products";
import Todo from "./Components/Todo,jsx";

function App() {
  return (
    <>
      <Navbar headerName="React Mobile Store" />
      <Main
        h1="Welcome to the mobile store"
        p="This mobile store website is built on reactJS"
        buttonName="Get Started"
      />
      <Products />
      
      <Footer />
      <Todo/>
    </>
  );
}

export default App;
