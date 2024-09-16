import React from "react";

function Container({ children }) {
  return (
    <div className="flex  min-h-screen mx-auto  w-1265 bg-black">
      {children}
    </div>
  );
}

export default Container;
