import React from "react";

import "leaflet/dist/leaflet.css";
import MapView  from "./components/MapComponent";
import { createRoot } from "react-dom/client";
// import NavBar from "./components/NavBar";
function App() {
  React.useEffect(() => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      const root = createRoot(mapElement);
      root.render(<MapView />);
    }
  }, []);
  return (
    <div className="App" id="map">
      {/* <NavBar /> */}
      {/* <SliderBox />
      <Map /> */}
      <MapView />
    </div>
  );
}

export default App;
