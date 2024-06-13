import { toUnicode } from "punycode";
import React, { useState } from "react";

export default function MapLegendComponent() {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 768);

  const legendStyles = {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    zIndex: 10,
    margin: 0,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "5px",
    maxWidth: "300px", // Maximum width to ensure it fits on small screens
    maxHeight: isVisible ? "500px" : "0", // Control expansion
    padding: isVisible ? "10px" : "0 10px", // Padding only when visible
  };

  const toggleLegend = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button
        onClick={toggleLegend}
        style={{
          zIndex: 100,
          position: "absolute",
          bottom: "0px",
          left: "5px",
          backgroundColor: legendStyles.backgroundColor,
          color: "black",
          border: "none",
          borderRadius: "20%",
          padding: "5px",
          paddingTop: "0px",
          paddingBottom: "0px",
          cursor: "pointer",
        }}
        tooltip="Legend"
      >
        {isVisible ? "▼" : "▲"}
      </button>

      <div className="legend size-slider" style={legendStyles}>
        <p style={{ fontWeight: "bold" }}>Legend</p>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span
            style={{
              // backgroundColor: "rgb(0, 0, 0)",
              width: 30,
              height: 30,
              marginBottom: 15,
              marginRight: 10,
              textAlign: "center",
              fontSize: 30,
              // borderRadius: 50,
              color:"rgb(255, 255, 0)"
            }}
          >
            ▲
          </span>
          Mines
        </p>
        <div>
          {" "}
          {/* Hide details if not visible */}
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0)",
                width: 20,
                height: 18,
                margin: 3,
                marginRight: 6,
              }}
            />
            0 - 0.17 (low potential exposure)
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "rgb(255, 204, 204)",
                width: 20,
                height: 18,
                margin: 3,
                marginRight: 6,
              }}
            />
            0.17 - 0.26 (low potential exposure)
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "rgb(255, 153, 153)",
                width: 20,
                height: 18,
                margin: 3,
                marginRight: 6,
              }}
            />
            0.26 - 0.34 (medium potential exposure)
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "rgb(255, 102, 102)",
                width: 20,
                height: 18,
                margin: 3,
                marginRight: 6,
              }}
            />
            0.34 - 0.42 (medium potential exposure)
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "rgb(255, 51, 51)",
                width: 20,
                height: 18,
                margin: 3,
                marginRight: 6,
              }}
            />
            0.42 - 0.5 (high potential exposure)
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "rgb(139, 0, 0)",
                width: 20,
                height: 18,
                margin: 3,
                marginRight: 6,
              }}
            />
            0.5 - 0.6 (high potential exposure)
          </p>
        </div>
      </div>
    </>
  );
}
