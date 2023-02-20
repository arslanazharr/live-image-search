import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");

  const typing = (event) => {
    const data = event.target.value;
    setImg(data);
  };

  return (
    <>
      <div className="text-center" style={{ marginTop: "30px" }}>
        <input
          style={{ width: "200px", height: "41px" }}
          placeholder="Search Image"
          type="search"
          value={img}
          onChange={typing}
        />
      </div>
      {img === "" ? null : <Sresult lol={img} />},
    </>
  );
};

export default Search;
