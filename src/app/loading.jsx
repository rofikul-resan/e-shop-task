import React from "react";
import { ScaleLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ScaleLoader color="#000" height={50} />
    </div>
  );
};

export default loading;
