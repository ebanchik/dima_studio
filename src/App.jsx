import { Header } from "./Header";
// import { Content } from "./Content";
// import { Footer } from "./Footer";
import { About } from "./About";
import { Carousel } from "./Carousel";

function App() {
  const images = [
    "/assets/images/chair.png",
    "/assets/images/dining_room.png",
    "/assets/images/living_room.png",
  ];

  return (
    <div>
      <Header />
      <Carousel images={images} />
      <About />
    </div>
  );
}


export default App;