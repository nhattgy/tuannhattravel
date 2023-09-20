import React from "react";
import "./ArticelesTrip.scss";
import Data from "../../data/Data";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ImageCustom from "../ImageCustom/ImageCustom";

function ArticelesTrip() {
  return (
    <div className="bestvalue-container">
      <div className="text-container">
        <h1 className="text-h1">Articles & Tips</h1>
        <span className="text-span">
          Explore some of the best tips from around the world
        </span>
        <div className="image-value-trip">
          {Data.slice(7, 10).map((item, index) => (
            <div key={index} className="image-itemm">
              <ImageCustom
                className="img-value"
                src={item.image}
                alt={item.title}
              />

              <div className="info-to-trip">
                <div className="info-trip">
                  <span className="span-art">{item.date}</span>
                  <h3 className="h2-name-trip">{item.name}</h3>
                  <span> {item.title}</span>
                </div>
                <button className="btn-art">
                  Read More <KeyboardArrowRightIcon className="icon-arrow" />{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticelesTrip;
