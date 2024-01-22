import React from "react";

import "leaflet/dist/leaflet.css";
import MapComponent from "./components/MapComponent";
import ReactDOM from "react-dom";
// import NavBar from "./components/NavBar";
function App() {
  React.useEffect(() => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      ReactDOM.render(<MapComponent />, mapElement);
    }
  }, []);
  return (
    <div className="App" id="map">
      {/* <NavBar /> */}
      {/* <SliderBox />
      <Map /> */}
      <MapComponent />
    </div>
  );
}

export default App;
