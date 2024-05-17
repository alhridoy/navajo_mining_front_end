// import React, { useState } from "react";
// import InstructionsModal from "./InstructionsModal";
// import AboutModal from "./AboutModal";

// export default function NavBar ({ searchTerm, setSearchTerm}) {
//   const [instructionsModalIsOpen, setInstructionsModalIsOpen] = useState(false);
//   const [aboutModalIsOpen, setAboutModalIsOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navStyles = {
//     position: 'fixed',
//     top: 0,
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     // padding: '1rem',
//     backgroundColor: 'rgb(233, 191, 53)', // Brighter Yellow
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     zIndex: 10,
//   };

//   const linkStyles = {
//     color: '#5a4a00', // Darker Shade for Text
//     fontWeight: 'bold',
//     fontSize: '1.125rem', // larger text
//     textDecoration: 'none',
//   };

//   const actionButtonStyles = {
//     backgroundColor: '#fff9b1', // Lighter Yellow
//     color: '#5a4a00',
//     borderRadius: '0.375rem',
//     // padding: '0.5rem 1.25rem',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
//     cursor: 'pointer',
//   };

//   const actionButtonHoverStyles = {
//     ...actionButtonStyles,
//     backgroundColor: '#ffeb4d', // Slightly brighter on hover
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <nav style={navStyles}>
//       <p style={{ color: "white", fontSize: 18,flex: 6}} >
//         Potential Exposure to Abandoned Uranium Mines in Navajo Nation
//       </p>
//       <div style={{flex: 2}}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search..."
//           style={{textAlign:"center",backgroundColor:"white",padding:10,border:0,borderRadius:10,color:"black"}}
//         />
//       </div>
//       <div style={{ display: 'flex',justifyContent: "space-around",flex: 3,maxHeight: 50}}>
//         <button
//           style={actionButtonStyles}
//           onMouseEnter={e => (e.currentTarget.style.backgroundColor = actionButtonHoverStyles.backgroundColor)}
//           onMouseLeave={e => (e.currentTarget.style.backgroundColor = actionButtonStyles.backgroundColor)}
//           onClick={() => setInstructionsModalIsOpen(true)}
//         >
//           Instructions
//         </button>

//         <button
//           style={actionButtonStyles}
//           onMouseEnter={e => (e.currentTarget.style.backgroundColor = actionButtonHoverStyles.backgroundColor)}
//           onMouseLeave={e => (e.currentTarget.style.backgroundColor = actionButtonStyles.backgroundColor)}
//           onClick={() => setAboutModalIsOpen(true)}
//         >
//           About the Data
//         </button>
//       </div>

//       <InstructionsModal
//         isOpen={instructionsModalIsOpen}
//         onRequestClose={() => setInstructionsModalIsOpen(false)}
//       />
//       <AboutModal
//         isOpen={aboutModalIsOpen}
//         onRequestClose={() => setAboutModalIsOpen(false)}
//       />
//     </nav>
//   );
// };

import React, { useState } from "react";
import InstructionsModal from "./InstructionsModal";
import AboutModal from "./AboutModal";

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
    // padding: '1rem',
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
