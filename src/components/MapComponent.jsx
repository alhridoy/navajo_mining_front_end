
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Map} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import DeckGL from '@deck.gl/react';
import {ContourLayer} from '@deck.gl/aggregation-layers';
import NavBar from './NavBar';
const DATA_URL =
  'src/utils/simulated_data.json' // eslint-disable-line


const INITIAL_VIEW_STATE = {
  longitude: -106.490898,
  latitude: 36.106965,
  zoom: 7,
  maxZoom: 10
};

export const BANDS = [
  // {threshold: [0, 0.1], color: [255, 255, 178]},
  {threshold: [0.1, 0.2], color: [254, 204, 92]},
  {threshold: [0.2, 0.3], color: [253, 141, 60]},
  {threshold: [0.3, 0.4], color: [240, 59, 32]},
  {threshold: [0.4, 0.5], color: [189, 0, 38]},
  {threshold: [0.5, 0.6], color: [159, 0, 80]}
];

export const LINES = [
  // {threshold: 1, color: [255, 255, 178], strokeWidth: 2},
  {threshold: 10, color: [254, 204, 92], strokeWidth: 2},
  {threshold: 100, color: [253, 141, 60], strokeWidth: 2},
  {threshold: 500, color: [240, 59, 32], strokeWidth: 2},
  {threshold: 2000, color: [189, 0, 38], strokeWidth: 2},
  {threshold: 10000, color: [159, 0, 80], strokeWidth: 2}
];

// const MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

export default function App({
  data = DATA_URL,
  // week = 35,
  contours = BANDS,
  cellSize = 1000,
  mapStyle = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
}) {
  const layers = [
    new ContourLayer({
      data,
      id: 'contour-layer',
      getPosition: d => [d.longitude, d.latitude],
      getWeight: d => d.grid_code,
      // updateTriggers: {
      //   getWeight: week
      // },
      pickable: true,
      aggregation: 'MAX',
      contours,
      cellSize
    })
  ];

  const getTooltip = info => {
    if (!info.object) {
      return null;
    }
    const {threshold} = info.object.contour;
    let str = `${threshold[0]}-${threshold[1]} exposure level`;

    return str;
  };

  // Rest of your code...


  return (
    <>
     <div className="fixed-nav">
    <NavBar />
    </div>


    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={{dragPan: true}}
      layers={layers}
      getTooltip={getTooltip}
      style={{mixBlendMode: 'lighten'}}
      >

      <Map reuseMaps mapLib={maplibregl} mapStyle={mapStyle} preventStyleDiffing={true} />


    </DeckGL>


    </>
  );
}

export function renderToDOM(container) {
  createRoot(container).render(<App />);
}
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Map } from 'react-map-gl';
// import maplibregl from 'maplibre-gl';
// import DeckGL from '@deck.gl/react';
// import { ContourLayer } from '@deck.gl/aggregation-layers';

// const DATA_URL = 'src/utils/exposure_1km.geojson'; // Your GeoJSON file path

// const INITIAL_VIEW_STATE = {
//   latitude: 37.446085607000043,
//   longitude: -109.39891610599994,
//   zoom: 3,
//   maxZoom: 10
// };

// export const BANDS = [
//   { threshold: [0, 0.1], color: [255, 255, 178] },
//   { threshold: [0.1, 0.2], color: [254, 204, 92] },
//   { threshold: [0.2, 0.3], color: [253, 141, 60] },
//   { threshold: [0.3, 0.4], color: [240, 59, 32] },
//   { threshold: [0.4, 0.5], color: [189, 0, 38] },
//   { threshold: [0.5, 0.6], color: [159, 0, 80] }
// ];

// export default function App({
//   data = DATA_URL,
//   contours = BANDS,
//   cellSize = 1000,
//   mapStyle = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
// }) {
//   const layers = [
//     new ContourLayer({
//       id: 'contour-layer',
//       data,
//       getPosition: d  => {
//         const coordinates = d.geometry.coordinates.slice(0, 2);
//         console.log(coordinates);
//         return coordinates;
//       },
//       getWeight: d => d.properties.grid_code,
//       pickable: true,
//       aggregation: 'SUM',
//       contours,
//       cellSize
//     })
//   ];

//   const getTooltip = info => {
//     if (!info.object) {
//       return null;
//     }
//     const { threshold } = info.object.contour;
//     let str = `${threshold[0]}-${threshold[1]} grid code`;

//     return str;
//   };

//   return (
//     <DeckGL
//       initialViewState={INITIAL_VIEW_STATE}
//       controller={true}
//       layers={layers}
//       getTooltip={getTooltip}
//       style={{ mixBlendMode: 'lighten' }}
//     >
//       <Map reuseMaps mapLib={maplibregl} mapStyle={mapStyle} preventStyleDiffing={true} />
//     </DeckGL>
//   );
// }

// export function renderToDOM(container) {
//   createRoot(container).render(<App />);
// }