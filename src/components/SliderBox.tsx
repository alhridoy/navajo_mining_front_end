import React from 'react';

const SliderBox: React.FC = () => {
  return (
    <div className="bg-gray-200 p-4 mt-4">
      <h2 className="text-xl">Filter Mines by Size</h2>
      <div id="current_center"></div>
      <div id="slider"></div>
    </div>
  );
};

export default SliderBox;