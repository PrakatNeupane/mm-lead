import React from "react";

const InputLabel = ({ str }) => {
  return (
    <div className="flex  justify-between my-2">
      <div className="mr-4 text-sm">{str}</div>
      <input type="text" className="w-[150px]  h-[30px] p-2 border rounded" />
    </div>
  );
};

export default InputLabel;
