import "./App.css";
import AwardsAndPress from "./components/AwardsAndPress/AwardsAndPress";
import Banner from "./components/Banner/Banner";
import FusionDesignHub from "./components/FusionDesignHub/FusionDesignHub";
import Header from "./components/Header/Header";
import OurWork from "./components/OurWork/OurWork";

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <OurWork />
      <FusionDesignHub />
      <AwardsAndPress />
    </div>
  );
}

export default App;
