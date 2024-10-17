// src/components/LightGloves.js
import React from 'react';
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./LightGloves/Scene";

const LightGloves = () => {
  const { width, height } = useViewportSize();

  return (
    <div>
      <h2>Lighting the Gloves</h2>
      <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
    </div>

);
};

export default LightGloves;
