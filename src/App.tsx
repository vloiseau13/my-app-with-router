import { useState } from "react";

import "./App.css";

// page components

import Home from "./pages/Home";
import About from "./pages/About";

// the App

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
      <nav>
        <button onClick={() => setCurrentLocation("/")} type="button">
          Home
        </button>
        <button onClick={() => setCurrentLocation("/about")} type="button">
          About
        </button>
      </nav>
      <main>
        {/* POur pouvoir jongler de page en page on va pouvoir utiliser le current location */}
        {/* en précisant  ce qu'on veut afficher */}
        {currentLocation === "/" && <Home />}
        {currentLocation === "/about" && <About />}
      </main>
    </>
  );
}

export default App;
