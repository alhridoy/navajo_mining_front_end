import React from "react";
import osm from "../utils/osm";

export default function MapControllerComponent({
  currentMapStyle = osm.street_dark_maptiler,
  setCurrentMapStyle,
  isScatterPlotLayerVisible = true,
  setIsScatterPlotLayerVisible,
  isContourLayerVisible = false,
  setIsContourLayerVisible,
  layerOpacity = 0.8,
  setLayerOpacity,
  exposureData,
  setExposureData,
}) {
  const url = "http://localhost:8000/";

  let dates = [7];
  for (let i = 0; i < 7; i++) dates[i] = i + 1 + ".geojson";

  let layers = [
    "drain",
    "exposure",
    "gwhi",
    "land",
    "ndvi",
    "proximity",
    "roads",
    "twe",
    "wi",
  ];

  const [isVisible, setIsVisible] = React.useState(window.innerWidth > 768);
  const [selectedDate, setselectedDate] = React.useState(
    dates[new Date().getDay() - 1]
  );
  const [selectedLayer, setselectedLayer] = React.useState(layers[6]);

  React.useEffect(() => {
    setExposureData(url + selectedLayer + selectedDate);
  }, [selectedDate, selectedLayer]);

  const prevDay = ((new Date().getDay() - 2 + 7) % 7) + 1;
  const nextDay = new Date().getDay() % 7;

  // let DataUrlArr;
  // for (let i = 0; i < multArrRows.length; i++) {
  //   for (let j=0; j < multArrColumns.length; j++) {
  //     DataUrlArr[i][j] = ("http://localhost:8000/" + multArrRows[i] + "_" + multArrColumns[j] + ".geojson");
  //   }
  // }

  const ControllerStyle = {
    position: "absolute",
    top: "100px",
    right: "10px",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "5px",
    zIndex: 10,
    transition: "max-height 0.5s ease-in-out",
    maxWidth: "300px", // Maximum width to ensure it fits on small screens
    maxHeight: isVisible ? "500px" : "0", // Control expansion
    padding: isVisible ? "10px" : "0 10px", // Padding only when visible
    display: isVisible ? "block" : "none",
  };

  const toggleLegend = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button
        onClick={toggleLegend}
        style={{
          zIndex: 11,
          position: "absolute",
          top: "100px",
          right: "10px",
          background: "rgba(255, 255, 255, 0.8)",
          color: "black",
          borderRadius: "5px",
          cursor: "pointer",
          padding: "5px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
        tooltip="Legend"
      >
        {isVisible ? "▲" : "▼"}
      </button>
      <div className="map-style-selector" style={ControllerStyle}>
        <label>
          <input
            type="radio"
            name="mapStyle"
            value={osm.street_dark_maptiler.url}
            checked={currentMapStyle === osm.street_dark_maptiler.url}
            onChange={(e) => {
              setCurrentMapStyle(e.target.value);
            }}
          />
          Street Map Dark
        </label>
        <label>
          <input
            type="radio"
            name="mapStyle"
            value={osm.street_light_maptiler.url}
            checked={currentMapStyle === osm.street_light_maptiler.url}
            onChange={(e) => {
              setCurrentMapStyle(e.target.value);
            }}
          />
          Street Map Light
        </label>
        <label>
          <input
            type="radio"
            name="mapStyle"
            value={osm.sat_maptiler.url}
            checked={currentMapStyle === osm.sat_maptiler.url}
            onChange={(e) => {
              setCurrentMapStyle(e.target.value);
            }}
          />
          Satellite Map
        </label>
        <label>
          <input
            type="radio"
            name="mapStyle"
            value={osm.dark_matter_cartocdn.url}
            checked={currentMapStyle === osm.dark_matter_cartocdn.url}
            onChange={(e) => {
              setCurrentMapStyle(e.target.value);
            }}
          />
          Dark Matter Map
        </label>
        <label>
          <input
            type="checkbox"
            checked={isScatterPlotLayerVisible}
            onChange={() =>
              setIsScatterPlotLayerVisible(!isScatterPlotLayerVisible)
            }
          />
          Show Mines
        </label>
        <label>
          <input
            type="checkbox"
            checked={isContourLayerVisible}
            onChange={() => setIsContourLayerVisible(!isContourLayerVisible)}
          />
          Show Data Layer
        </label>
        <label>
          Data Layer
          <select
            value={selectedLayer}
            onChange={(e) => setselectedLayer(e.target.value)}
            style={{ marginLeft: 5 }}
          >
            {layers.map((layer, index) => (
              <option value={layer}>{layer.toUpperCase()}</option>
            ))}
          </select>
        </label>
        <label>
          Day of Data
          <select
            value={selectedDate}
            onChange={(e) => setselectedDate(e.target.value)}
            style={{ marginLeft: 5 }}
          >
            <option value={dates[prevDay - 1]}>Yesterday</option>
            <option value={dates[new Date().getDay() - 1]}>Today</option>
            <option value={dates[nextDay]}>Tomorrow</option>
          </select>
        </label>

        <label>Layer Opacity: {Math.round(layerOpacity * 100) + "%"}</label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={layerOpacity}
          onChange={(e) => setLayerOpacity(parseFloat(e.target.value))}
          style={{ width: 300 }}
        />
      </div>
    </>
  );
}
