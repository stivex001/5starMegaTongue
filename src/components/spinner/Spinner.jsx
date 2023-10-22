import "./spinner.css"
import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
const Spinner = () => {
  let [color] = useState("#ed4c4e");

  return (
    <div className="container">
      <FadeLoader
        color={color}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
