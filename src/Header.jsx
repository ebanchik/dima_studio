// Header.js
import Carousel from './Carousel';

export function Header() {
  const images = [
    "/assets/images/chair.png",
    "/assets/images/dining_room.png",
    "/assets/images/closet.png",
  ];

  return (
    <header className="header-container">
    <img src="/assets/013_381.jpeg" alt="Background" className="header-background" />
    <div className="carousel-container">
      <Carousel images={images} />
      <img src="/assets/images/frame1.png" alt="Frame" className="frame" />
    </div>
    <h1>Dima Studio</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
