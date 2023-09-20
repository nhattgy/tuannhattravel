import React from "react";
import location1 from "../../asset/img/map.png";
import location2 from "../../asset/img/crile.png";
import location3 from "../../asset/img/khicau.png";
import banner from "../../asset/img/banner.jpg";
import "./WhychoiceUs.scss";
function WhychoiceUs() {
  return (
    <div className="whychoice-container">
      <div className="text-whychoice">
        <h1 className="h1-choice">WhychoiceUs</h1>
        <span className="span-choice">
          Here are reasons you should plan trip with us
        </span>
        <div className="item-image">
          <div className="image-container">
            <img className="img-whychoice" src={location1} alt="Location 1" />
            <h3 className="h3-whychoice">Handpicked Hotels</h3>
            <span className="span-whychoice">
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </span>
          </div>

          <div className="image-container">
            <img className="img-whychoice" src={location2} alt="Location 2" />
            <h3 className="h3-whychoice">World Class Service</h3>
            <span className="span-whychoice">
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </span>
          </div>

          <div className="image-container">
            <img className="img-whychoice" src={location3} alt="Location 3" />
            <h3 className="h3-whychoice">Best Price Guarantee</h3>
            <span className="span-whychoice">
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </span>
          </div>
        </div>
        <div className="img-banner">
          <img className="img-banner2" src={banner} />
        </div>
      </div>
    </div>
  );
}

export default WhychoiceUs;
