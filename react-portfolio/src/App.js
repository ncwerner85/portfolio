import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/carousel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
        <Footer />
      </header>
    </div>
  );
}

export default App;
