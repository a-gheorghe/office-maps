import React, { useEffect, useRef, useState, createContext } from "react";

const Context = createContext(null);

export function Stage({ width, height, children }) {
  const svgRef = useRef(null);
  const [svg, setSvg] = useState(null);
  useEffect(() => setSvg(svgRef.current), []);
  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1866.667 1306.667"
    >
      <Context.Provider value={svg}>{children}</Context.Provider>
    </svg>
  );
}

export function useSvg() {
  return React.useContext(Context);
}
