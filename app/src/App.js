import "./App.css";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Slideshow from "./components/HomePage/Slideshow";
 import JoinUs from "./components/HomePage/JoinUs";
import ServiceDetails from "./components/HomePage/ServiceDetails";
import Review from "./components/HomePage/Review";
import Help from "./components/HomePage/Help";


function App() {
  return (
    <div>
      <Navbar />
      <Slideshow/>
      <JoinUs/>
      <ServiceDetails/>
      <Help/>
      <Review/>

      <Footer/>
    </div>
  );
}

export default App;
