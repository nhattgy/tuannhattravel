import React from "react";
import logofooter from "../../asset/img/logofooter.png";
import image1 from "../../asset/img/image1.jpg";
import image2 from "../../asset/img/image2.jpg";
import image3 from "../../asset/img/image3.jpg";
import image4 from "../../asset/img/image4.jpg";
import image5 from "../../asset/img/image5.jpg";
import image6 from "../../asset/img/image6.jpg";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="h3-footer">Our Awards</h3>
        <span className="span-footer">
          London is a megalopolis of people, ideas and frenetic energy. The
          capital and largest city of the United Kingdom.
        </span>
        <div className="logo-footer">
          <img className="img-footer" src={logofooter} />
        </div>
      </div>

      <div className="footer-section">
        <h2 className="h2-contact">Contact Info</h2>
        <div className="container">
          <div>
            <span className="text">
              <PhoneIphoneIcon />
              1-567-124-44227
            </span>
          </div>
          <div>
            <span className="text">
              <PlaceIcon />
              184 Main Street East Perl Habour 8007
            </span>
          </div>
          <div>
            <span className="text">
              <AccessAlarmIcon />
              Mon - Sat 8.00 - 18.00 Sunday CLOSED
            </span>
          </div>
        </div>
        <ul className="icon-footer">
          <li class="facebook">
            <a target="_blank" title="Facebook" href="#" rel="noopener">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li class="twitter">
            <a
              target="_blank"
              title="Twitter"
              href="https://twitter.com/#"
              rel="noopener"
            >
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="youtube">
            <a target="_blank" title="Youtube" href="#" rel="noopener">
              <i class="fa fa-youtube"></i>
            </a>
          </li>
          <li class="pinterest">
            <a
              target="_blank"
              title="Pinterest"
              href="https://pinterest.com/#"
              rel="noopener"
            >
              <i class="fa fa-pinterest"></i>
            </a>
          </li>
          <li class="instagram">
            <a
              target="_blank"
              title="Instagram"
              href="https://instagram.com/theplanetd"
              rel="noopener"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Recent Trips</h2>
        <div className="image-grid">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
          <img src={image4} alt="Image 4" />
          <img src={image5} alt="Image 5" />
          <img src={image6} alt="Image 6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
