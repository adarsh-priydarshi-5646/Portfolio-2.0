import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQsmb3a2kV2tc-RTUDH0mx8jOxCk_XUzQ&q=Raebareli,Uttar+Pradesh,India&zoom=12`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;