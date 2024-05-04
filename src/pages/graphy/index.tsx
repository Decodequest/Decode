import React, { useState, useEffect } from "react";

const Graphy = () => {
  const axios = require("axios");

  const getProducts = async () => {
    const response = await fetch('/api/getCourse');
        const responseData = await response.json();
        console.log("responseData", responseData);
        
  };

  return (
    <>
      <h1>Graphy</h1>
      <button onClick={() => getProducts()}>Get Products</button>
    </>
  );
};

export default Graphy;
