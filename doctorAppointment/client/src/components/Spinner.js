// import { useState, CSSProperties } from "react";
// import CircleLoader from "react-spinners/CircleLoader";
import "./Spinner.css";

import React from "react";

const Spinner = () => {
  return (
    <div class="text-center spinner">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only"></span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
