import React from "react";

const Sresult = (props) => {
  const pics = `https://source.unsplash.com/500x500/?${props.lol}`;
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <img src={pics} alt="results" />
    </div>
  );
};

export default Sresult;
