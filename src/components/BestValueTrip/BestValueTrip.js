import React from "react";
import "./BestValueTrip.scss";
import Data from "../../data/Data";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImageCustom from "../ImageCustom/ImageCustom";

function BestValueTrip() {
  return (
    <div className="bestvalue-container">
      <div className="text-container">
        <h1 className="text-h1">Best Value Trips</h1>
        <span className="text-span">Best offers trips from us</span>
        <div className="image-value-trip">
          {Data.slice(4, 7).map((item, index) => (
            <div key={index} className="image-itemm">
              <span className="price-value">{item.price}</span>
              <ImageCustom
                className="img-value"
                src={item.image}
                alt={item.title}
              />

              <div className="info-to-trip">
                <div className="info-trip">
                  <h3 className="h2-name-trip">{item.name}</h3>
                  <span> {item.title}</span>
                  <div className="icon-starr">
                    <StarIcon style={{ fontSize: "18px" }} />
                    <StarIcon style={{ fontSize: "18px" }} />
                    <StarIcon style={{ fontSize: "18px" }} />
                    <StarIcon style={{ fontSize: "18px" }} />
                    <StarBorderIcon
                      style={{ fontSize: "18px", color: "#000" }}
                    />
                    <span
                      style={{
                        color: "#000",
                        marginLeft: "1rem",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      4 reviews
                    </span>
                    <span
                      className="p-popularr"
                      style={{
                        
                      }}
                    >
                      <AccessTimeIcon
                        style={{ width: "1rem", margin: "-7px 7px" }}
                      />
                      5 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestValueTrip;
