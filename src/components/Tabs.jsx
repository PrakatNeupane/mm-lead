import React from "react";

const Tabs = ({ str }) => {
  return (
    <div className="w-full border text-center text-sm fond-bold hover:scale-95 hover:cursor-pointer transition-transform duration-300 transform origin-center rounded-lg p-2 my-2 bg-cyan-500 text-yellow-200">
      {str}
    </div>
  );
};

export default Tabs;
