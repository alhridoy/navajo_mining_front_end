import React, { useState } from "react";
import InstructionsModal from "./InstructionsModal";
import AboutModal from "./AboutModal";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function NavBar({ searchTerm, setSearchTerm }) {
  const [instructionsModalIsOpen, setInstructionsModalIsOpen] = useState(false);
  const [aboutModalIsOpen, setAboutModalIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const navStyles = {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(233, 191, 53)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    zIndex: 10000,
  };

  const linkStyles = {
    color: "#5a4a00", // Darker Shade for Text
    fontWeight: "bold",
    fontSize: "1.125rem", // larger text
    textDecoration: "none",
  };

  const actionButtonStyles = {
    backgroundColor: "#00E5e5", // Lighter Yellow
    color: "#ffffff",
    borderRadius: "0.375rem",
    // padding: '0.5rem 1.25rem',
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    cursor: "pointer",
  };

  const actionButtonHoverStyles = {
    ...actionButtonStyles,
    backgroundColor: "#009999", // Slightly brighter on hover
  };

  const openSite = () => {
    window.open("https://unmcop.unm.edu/metals/platform.html", "_blank");
  };

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#007BFF",
    border: "none",
    marginRight: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const hoverStyles = {
    backgroundColor: "#0056b3",
  };

  const iconStyles = {
    marginLeft: "8px",
  };

  const mobileNavStyles = {
    ...navStyles,
    justifyContent: "space-between",
    padding: "0.5rem",
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav style={window.innerWidth > 768 ? navStyles : mobileNavStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {window.innerWidth <= 768 && (
          <button
            onClick={toggleMenu}
            style={{ marginRight: "10px", background: "none", border: "none" }}
          >
            &#9776; {/* Unicode for menu icon */}
          </button>
        )}
        <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Potential Exposure to Abandoned Uranium Mines in Navajo Nation
        </p>
      </div>

      {window.innerWidth > 768 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              style={{
                textAlign: "center",
                padding: "10px",
                border: "none",
                borderRadius: "10px",
              }}
            />
          </div>
          <button
            style={{ ...actionButtonStyles, margin: "10px" }}
            onClick={() => setInstructionsModalIsOpen(true)}
          >
            Instructions
          </button>
          <button
            style={{ ...actionButtonStyles, margin: "10px" }}
            onClick={() => setAboutModalIsOpen(true)}
          >
            About the Data
          </button>
          {/* <a href="https://unmcop.unm.edu/metals/platform.html" target="_blank" >
            Navajo WaterGIS 2.1
          </a> */}
          <button
            style={buttonStyles}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                hoverStyles.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyles.backgroundColor)
            }
            onClick={openSite}
          >
            Navajo WaterGIS 2.1 <FaExternalLinkAlt style={iconStyles} />
          </button>
        </div>
      ) : (
        isMenuOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "50px",
              right: "10px",
              width: "80%",
              background: "white",
              borderRadius: "5px",
              padding: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              style={{
                marginBottom: "10px",
                padding: "8px",
                border: "none",
                borderRadius: "5px",
                zIndex: 10,
              }}
            />
            <button
              style={actionButtonStyles}
              onClick={() => setInstructionsModalIsOpen(true)}
            >
              Instructions
            </button>
            <button
              style={actionButtonStyles}
              onClick={() => setAboutModalIsOpen(true)}
            >
              About the Data
            </button>
          </div>
        )
      )}

      <InstructionsModal
        isOpen={instructionsModalIsOpen}
        onRequestClose={() => setInstructionsModalIsOpen(false)}
      />
      <AboutModal
        isOpen={aboutModalIsOpen}
        onRequestClose={() => setAboutModalIsOpen(false)}
      />
    </nav>
  );
}
