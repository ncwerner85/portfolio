import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/carousel";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
        <hr className="featurette-divider" />
        <About />
        <hr className="featurette-divider" />
        <Portfolio />
        <hr className="featurette-divider" />
        <Contact />
        <hr className="featurette-divider" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
