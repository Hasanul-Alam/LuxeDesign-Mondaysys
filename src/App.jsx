import "./App.css";
import AwardsAndPress from "./components/AwardsAndPress/AwardsAndPress";
import Banner from "./components/Banner/Banner";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import FusionDesignHub from "./components/FusionDesignHub/FusionDesignHub";
import Header from "./components/Header/Header";
import OurWork from "./components/OurWork/OurWork";
import VisionaryVibes from "./components/VisionaryVibes/VisionaryVibes";

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <OurWork />
      <VisionaryVibes />
      <FusionDesignHub />
      <AwardsAndPress />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
