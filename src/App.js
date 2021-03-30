import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/carousel";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
        <About />
        <Portfolio />
        <Footer />
      </header>
    </div>
  );
}

export default App;
