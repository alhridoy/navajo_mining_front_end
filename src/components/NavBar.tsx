import React, { useState } from "react";
import InstructionsModal from "./InstructionsModal";
import AboutModal from "./AboutModal";

const NavBar: React.FC = () => {
  const [instructionsModalIsOpen, setInstructionsModalIsOpen] = useState(false);
  const [aboutModalIsOpen, setAboutModalIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between p-4 bg-yellow-400 shadow-md">
      <div className="flex items-center space-x-4">
        <button className="flex items-center px-3 py-2 border rounded text-yellow-900 border-yellow-900 lg:hidden">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <a className="text-yellow-900 font-semibold text-lg" href="#">
          Potential Exposure to Abandoned Uranium Mines in Navajo Nation
        </a>
        <button
          className="bg-yellow-200 text-yellow-900 rounded px-5 py-2 shadow-md hover:bg-yellow-100"
          onClick={() => setInstructionsModalIsOpen(true)}
        >
          Instructions
        </button>
        <InstructionsModal
          isOpen={instructionsModalIsOpen}
          onRequestClose={() => setInstructionsModalIsOpen(false)}
        />
        <button
          className="bg-yellow-200 text-yellow-900 rounded px-5 py-2 shadow-md hover:bg-yellow-100"
          onClick={() => setAboutModalIsOpen(true)}
        >
          About the Data
        </button>
        <AboutModal
          isOpen={aboutModalIsOpen}
          onRequestClose={() => setAboutModalIsOpen(false)}
        />
      </div>
    </nav>
  );
};

export default NavBar;
