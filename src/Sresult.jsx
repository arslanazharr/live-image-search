import React from "react";

const Sresult = (props) => {
  const pics = `https://source.unsplash.com/500x500/?${props.lol}`;
  return (
    <div className="text-center" style={{ marginTop: "30px" }}>
      <img className="container w-75" src={pics} alt="results" />
    </div>
  );
};

export default Sresult;
