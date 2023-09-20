import React from "react";
import Data from "../../data/Data";
import "./Popular.scss";
import ImageCustom from "../ImageCustom/ImageCustom";

function Popular() {
  return (
    <div className="popular-container">
      <div className="text-popular">
        <h1 className="text-h1">Popular Destinations</h1>
        <span className="text">World's best tourist destinations</span>
      </div>
      <div className="image-gallery">
        {Data.slice(0, 4).map((item, index) => (
          <div key={index} className="image-item">
            <ImageCustom
              style={{ with: "70%" }}
              className="img-popular"
              src={item.image}
              alt={item.title}
            />
            <p className="p-popular">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
