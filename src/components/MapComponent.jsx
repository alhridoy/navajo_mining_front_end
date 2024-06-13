import React from "react";
import { createRoot } from "react-dom/client";
import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";
import DeckGL from "@deck.gl/react";
import {
  ScatterplotLayer,
  BitmapLayer,
  GeoJsonLayer,
  IconLayer,
} from "@deck.gl/layers";
import { ContourLayer } from "@deck.gl/aggregation-layers";
import { TileLayer } from "@deck.gl/geo-layers";
import NavBar from "./NavBar.jsx";
import AUM from "../utils/AUM.js";
import osm from "../utils/osm.js";
import Slider from "./SliderBox.jsx";
import MapControllerComponent from "./MapControllerComponent.jsx";
import MapLegendComponent from "./MapLegendComponent.jsx";

// const DATA_URL = 'src/utils/Day1.geojson'; // eslint-disable-line
const DATA_URL = "http://localhost:8000/Day1.geojson"; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  longitude: -109.831362192,
  latitude: 36.304772560300002,
  zoom: 7,
  maxZoom: 17,
  minZoom: 3,
};

const BANDS = [
  { color: [255, 255, 255, 0] },
  { color: [255, 255, 178] },
  { color: [255, 204, 204] },
  { color: [255, 153, 153] },
  { color: [255, 102, 102] },
  { color: [255, 51, 51] },
  { color: [139, 0, 0] },
];

const LINES = [
  // {threshold: 1, color: [255, 255, 178], strokeWidth: 2},
  { threshold: 10, color: [254, 204, 92], strokeWidth: 2 },
  { threshold: 100, color: [253, 141, 60], strokeWidth: 2 },
  { threshold: 500, color: [240, 59, 32], strokeWidth: 2 },
  { threshold: 2000, color: [189, 0, 38], strokeWidth: 2 },
  { threshold: 10000, color: [159, 0, 80], strokeWidth: 2 },
];

// const MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

export default function App({
  week = 35,
  contours = BANDS,
  cellSize = 1000,
  mapStyle = osm.street_dark_maptiler.url,
}) {
  const initialMinMinesize = 0;
  const initialMaxMinesize = 1200;

  const [viewState, setViewState] = React.useState(INITIAL_VIEW_STATE);
  const [currentMapStyle, setCurrentMapStyle] = React.useState(mapStyle);
  const [layerOpacity, setLayerOpacity] = React.useState(1);
  const [isContourLayerVisible, setIsContourLayerVisible] =
    React.useState(true);
  const [isScatterPlotLayerVisible, setIsScatterPlotLayerVisible] =
    React.useState(true);
  const [isFilterVisible, setIsFilterVisible] = React.useState(
    window.innerWidth > 768
  );
  const [searchTerm, setSearchTerm] = React.useState("");
  const [minSize, setMinSize] = React.useState(initialMinMinesize);
  const [maxSize, setMaxSize] = React.useState(initialMaxMinesize);
  const [minSqrtArea, setMinSqrtArea] = React.useState(minSize);
  const [maxSqrtArea, setMaxSqrtArea] = React.useState(maxSize);
  const [exposureData, setExposureData] = React.useState(
    "http://localhost:8000/roads" + new Date().getDay() + ".geojson"
  );

  const filteredData = AUM.features.filter(
    (feature) =>
      feature.properties.Area_sqm / 1000 >= minSqrtArea &&
      feature.properties.Area_sqm / 1000 <= maxSqrtArea &&
      (feature.properties.Mine_Name.toLocaleUpperCase().includes(
        searchTerm.toLocaleUpperCase()
      ) ||
        feature.properties.Aliases.toLocaleUpperCase().includes(
          searchTerm.toLocaleUpperCase()
        ))
  );

  const layers = [
    new TileLayer({
      id: "TileLayer",
      data: [currentMapStyle],
      maxZoom: INITIAL_VIEW_STATE.maxZoom,

      renderSubLayers: (props) => {
        const { boundingBox } = props.tile;

        return new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [
            boundingBox[0][0],
            boundingBox[0][1],
            boundingBox[1][0],
            boundingBox[1][1],
          ],
        });
      },
      pickable: true,
    }),
    isContourLayerVisible &&
      new GeoJsonLayer({
        id: "geojson-layer",
        data: exposureData, // this is your GeoJSON data
        pickable: true,
        stroked: true,
        filled: true,
        lineWidthMinPixels: 1,
        getFillColor: (d) => contours[d.properties.gridcode].color,
        getLineColor: [0, 0, 0, 255],
        getLineWidth: 1,
        opacity: layerOpacity,
      }),
    // new ContourLayer({
    //   data,
    //   id: 'contour-layer',
    //   getPosition: d => [d.longitude, d.latitude],
    //   getWeight: d => d.grid_code,
    //   pickable: true,
    //   aggregation: "MAX",
    //   contours,
    //   cellSize,
    //   opacity: layerOpacity,
    // }),
    isScatterPlotLayerVisible &&
      new IconLayer({
        id: "triangles-layer",
        data: filteredData,
        pickable: true,
        // Icon mapping
        iconAtlas: "src/icons/Triangle.png", // Specify the path to your triangle icon image
        // iconAtlas:
        //   "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
        iconMapping: {
          triangle: {
            x: 0,
            y: 0,
            width: 256,
            height: 256,
            mask: true,
          },
        },
        getIcon: () => "triangle",
        // sizeScale: 15,
        getPosition: (d) => d.geometry.coordinates,
        getSize: 40,
        getColor: [255, 255, 0, 200],
        getLineColor: [0, 0, 0, 255],
        onClick: ({ object, x, y }) => {
          if (object) {
            setViewState({
              ...viewState,
              longitude: object.geometry.coordinates[0],
              latitude: object.geometry.coordinates[1],
              zoom: Math.max(viewState.zoom, 14),
              bearing: 0,
              pitch: 60,
            });
            console.log(new Date().getDay());
          }
        },
        lineWidthMinPixels: 1,
        opacity: layerOpacity,
      }),
    // new ScatterplotLayer({
    //   id: 'geojson-layer-circles',
    //   data: filteredData,
    //   filled: true,
    //   getFillColor: [255, 255, 0,200],
    //   getLineColor: [0, 0, 0,255],
    //   getPosition: d => d.geometry.coordinates,
    //   getRadius: d => d.properties.Area_sqm,
    //   onClick: ({object, x, y}) => {
    //     if (object) {
    //       setViewState({
    //         ...viewState,
    //         longitude: object.geometry.coordinates[0],
    //         latitude: object.geometry.coordinates[1],
    //         zoom: Math.max(viewState.zoom, 14),
    //         bearing: 0,
    //         pitch: 60,
    //       });
    //     }
    //   },
    //   lineWidthMinPixels: 1,
    //   radiusMaxPixels: 30,
    //   radiusScale: 1,
    //   radiusUnits: 'meters',
    //   stroked: true,
    //   opacity: layerOpacity,
    //   pickable: true,
    // })
  ].filter(Boolean);

  const buttonStyle = {
    position: "absolute",
    top: "100px",
    left: "10px",
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderRadius: "5px",
  };

  const individualButtonStyle = {
    width: "30px", // Adjust size as needed
    height: "30px", // Adjust size as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    padding: "0",
    margin: "0",
    backgroundColor: "rgba(255,255,255,0)",
    color: "#000",
  };

  const zoomIn = () => {
    setViewState({
      ...viewState,
      zoom: Math.min(viewState.zoom + 1, INITIAL_VIEW_STATE.maxZoom),
    });
  };

  const zoomOut = () => {
    setViewState({
      ...viewState,
      zoom: Math.max(viewState.zoom - 1, 0),
    });
  };
  const resetView = () => {
    setViewState({
      ...viewState,
      longitude: INITIAL_VIEW_STATE.longitude,
      latitude: INITIAL_VIEW_STATE.latitude,
      zoom: INITIAL_VIEW_STATE.zoom,
      bearing: 0,
      pitch: 0,
    });
  };

  const getTooltip = (info) => {
    if (info.object) {
      let str = "";
      if (info.object.contour) {
        const { threshold } = info.object.contour;
        str = `${threshold[0]}-${threshold[1]} exposure level`;
      } else if (new String(info.layer).search("geojson-layer-circles") > -1) {
        const Mine_Name = info.object.properties.Mine_Name;
        const Mill_Name = info.object.properties.MILL_NAME;
        const Aliases = info.object.properties.Aliases;
        let MineName = "";
        if (Mine_Name != " " && Mine_Name != "" && Mine_Name != null) {
          MineName = Mine_Name;
        } else if (Aliases != " " && Aliases != "" && Aliases != null) {
          MineName = Aliases;
        } else {
          MineName = info.object.properties.MILL_NAME;
        }
        const MineSize = Math.round(info.object.properties.Area_sqm / 1000);
        str = `Mine Name - ${MineName} \nMine Size - ${MineSize} Square Kilometers`;
      }
      return str;
    }
    return null;
  };

  return (
    <>
      <div className="fixed-nav">
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <MapControllerComponent
        currentMapStyle={currentMapStyle}
        isContourLayerVisible={isContourLayerVisible}
        setIsContourLayerVisible={setIsContourLayerVisible}
        isScatterPlotLayerVisible={isScatterPlotLayerVisible}
        setIsScatterPlotLayerVisible={setIsScatterPlotLayerVisible}
        setCurrentMapStyle={setCurrentMapStyle}
        layerOpacity={layerOpacity}
        setLayerOpacity={setLayerOpacity}
        exposureData={exposureData}
        setExposureData={setExposureData}
      />
      <button
        onClick={() => {
          setIsFilterVisible(!isFilterVisible);
        }}
        style={{
          zIndex: 11,
          position: "absolute",
          bottom: "0px",
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
        {isFilterVisible ? "▼" : "▲"}
      </button>
      <div
        className="size-slider bg-gray-200 p-4 mt-4"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 10,
          display: isFilterVisible ? "block" : "none",
        }}
      >
        <p
          style={{
            fontWeight: "bolder",
            fontSize: "18px",
            margin: 0,
            textAlign: "center",
          }}
        >
          Filter Mines by Size
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {/* Min Label and Input */}
          <div style={{ marginBottom: "10px" }}>
            <label
              style={{
                textAlign: "center",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Min
            </label>
            <input
              type="number"
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              value={minSize}
              onChange={(e) => {
                const newMin = parseInt(e.target.value);
                if (
                  newMin <= initialMaxMinesize &&
                  newMin >= initialMinMinesize
                ) {
                  setMinSize(newMin);
                }
              }}
            />
          </div>

          {/* Max Label and Input */}
          <div style={{ marginBottom: "10px" }}>
            <label
              style={{
                textAlign: "center",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Max
            </label>
            <input
              type="number"
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              value={maxSize}
              onChange={(e) => {
                const newMax = parseInt(e.target.value);
                if (
                  newMax <= initialMaxMinesize &&
                  newMax >= initialMinMinesize
                ) {
                  setMaxSize(newMax);
                }
              }}
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => {
              let newMax = maxSize;
              let newMin = minSize;
              if (minSize >= maxSize) {
                newMin = Math.max(maxSize - 1, initialMinMinesize);
                newMax = Math.min(maxSize + 1, initialMaxMinesize);
              }
              setMinSize(newMin);
              setMaxSize(newMax);
              setMinSqrtArea(newMin);
              setMaxSqrtArea(newMax);
            }}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Filter
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <p style={{ textAlign: "center", flex: 1 }}>
            {Math.round(minSqrtArea)}
          </p>
          <Slider
            style={{ textAlign: "center", flex: 10 }}
            min={initialMinMinesize}
            max={initialMaxMinesize}
            minVal={minSqrtArea}
            maxVal={maxSqrtArea}
            setMinVal={(val) => {
              setMinSize(val);
              setMinSqrtArea(val);
            }}
            setMaxVal={(val) => {
              setMaxSize(val);
              setMaxSqrtArea(val);
            }}
          />
          <p style={{ textAlign: "center", flex: 2 }}>
            {Math.round(maxSqrtArea)}
          </p>
        </div>
      </div>

      <div style={buttonStyle}>
        <button onClick={zoomIn} style={individualButtonStyle}>
          +
        </button>
        <button onClick={resetView} style={individualButtonStyle}>
          ◉
        </button>
        <button onClick={zoomOut} style={individualButtonStyle}>
          -
        </button>
      </div>
      <MapLegendComponent />
      <div style={{ display: "flex", flexGrow: 1 }}>
        <DeckGL
          initialViewState={viewState}
          onViewStateChange={({ viewState }) => setViewState(viewState)}
          controller={{ dragPan: true, inertia: true }}
          layers={layers}
          getTooltip={getTooltip}
        />
      </div>
    </>
  );
}
