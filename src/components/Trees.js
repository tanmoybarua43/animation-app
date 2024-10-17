// src/components/Trees.js
import React from 'react';
import Tree from "../components/Tree/Tree";
import data from "../components/Tree/data";

const Trees = () => {
  return (
    <div>
      <h2>Tree Page</h2>
      <Tree data={data} width={600} height={500} />
    </div>

);
};

export default Trees;
