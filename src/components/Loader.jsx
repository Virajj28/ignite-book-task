import React, { useEffect, useState } from "react";

const Loader = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 45);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className="w-16 h-16 border-4 border-t-[#5E56E7] border-b-[#F8F7FF] border-l-[#5E56E7] border-r-[#F8F7FF] rounded-full"
        style={{ transform: `rotate(${rotation}deg)` }}
      ></div>
      <p className="mt-4 text-lg text-[#5E56E7]">Loading...</p>
    </div>
  );
};

export default Loader;
