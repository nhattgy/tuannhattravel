import React, { useEffect, useState } from "react";
import myVideo from "../../asset/video/travel.mp4";
import Logo from "../../asset/Logo/logo@2x_white.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Data from "../../data/Data";
import "./Navbar.scss";
import IconMxh from "../IconMxh/IconMxh";
import InputNavbar from "../InputNavbar/InputNavbar";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Khi mobile menu được mở, thêm một class (ví dụ: 'no-scroll') vào body
      document.body.classList.add("no-scroll");
    } else {
      // Khi mobile menu bị đóng, loại bỏ class 'no-scroll' khỏi body
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileMenuOpen]);
  const slicedMenuData = Data.slice(0, 2);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 480) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div
        className={`background-video ${
          isMobileMenuOpen ? "blur-background" : ""
        }`}
      >
        {isScrolled && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
          </div>
        )}
        <video autoPlay muted loop playsInline className="video-element">
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
      <div className="navbar-content">
        <div className={`logo ${isMobileMenuOpen ? "hide-logo" : ""}`}>
          <img className="logo-header" src={Logo} alt="Logo" />
        </div>
        <div className={`menu ${isMobileMenuOpen ? "hide-logo" : ""}`}>
          <ul>
            <li className="menu-item">
              <a href="#" className="a-menu">
                Home <KeyboardArrowDownIcon style={{ width: "1rem" }} />
              </a>
              <div className="dropdown-menu">
                <ul
                  style={{
                    display: "block",
                    position: "fixed",
                    backgroundColor: "#fff",
                    width: "220px",
                    borderRadius: "10px",

                    padding: "1rem 2rem",
                  }}
                >
                  <li>
                    <a className="menu-link" href="#">
                      Home 1 – Background Image
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Home 2 – Youtube Video
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Home 3 – Google Inspired
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Home 4 – Travel Site
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a href="#" className="a-menu">
                Tours
                <KeyboardArrowDownIcon style={{ width: "1rem" }} />
              </a>
              <div className="dropdown-menu">
                <ul
                  style={{
                    display: "block",
                    position: "fixed",
                    backgroundColor: "#fff",
                    width: "220px",
                    borderRadius: "10px",

                    padding: "1rem 2rem",
                  }}
                >
                  <li className="tour-class">
                    <a class="menu-link" href="#">
                      Tour Classic Sidebar
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              1 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              2 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              3 Columns
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>

                  <span className="strain"></span>
                  <li className="tour-class">
                    <a className="menu-link" href="#">
                      Tour Classic Sidebar
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Right Sidebar
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Left Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li className="tour-class">
                    <a className="menu-link" href="#">
                      Tour Grid Fullwidth
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              1 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              2 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              3 Columns
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Tour List Sidebar
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Right Sidebar
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Left Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Tour Header Type
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              1 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              2 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              3 Columns
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Tour Categories
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Right Sidebar
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Left Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <a href="#" className="a-menu">
                Booking
                <KeyboardArrowDownIcon style={{ width: "1rem" }} />
              </a>
              <div className="dropdown-menu">
                <ul
                  style={{
                    display: "block",
                    position: "fixed",
                    backgroundColor: "#fff",
                    width: "220px",
                    borderRadius: "10px",

                    padding: "1rem 2rem",
                  }}
                >
                  <li className="tour-class">
                    <a class="menu-link" href="#">
                      Online Payment for Booking
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              1 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              2 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              3 Columns
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>

                  <span className="strain"></span>
                  <li className="tour-class">
                    <a className="menu-link" href="#">
                      Custom Booking Form
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Right Sidebar
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Left Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li className="tour-class">
                    <a className="menu-link" href="#">
                      Tour Durations
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              1 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              2 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              3 Columns
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Custom Booking URL for Affiliate Tour
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Right Sidebar
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Left Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Custom Booking using custom HTML & Shortcode
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              1 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              2 Columns
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              3 Columns
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Header Options
                      <KeyboardArrowRightIcon
                        style={{
                          position: "absolute",
                          right: "25px",
                          fontSize: "20px",
                        }}
                      />
                      <div class="menu-con">
                        <ul
                          style={{
                            position: "fixed",
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            width: "220px",
                            marginLeft: "2px",
                            borderRadius: "5px",
                            padding: "0 25px",
                          }}
                          class="sub-menu"
                        >
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Right Sidebar
                            </a>
                          </li>
                          <li class="sub-menu-item">
                            <a className="sub-menu-a" href="#">
                              Left Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <span className="strain"></span>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <a href="#" className="a-menu">
                Destinations
                <KeyboardArrowDownIcon style={{ width: "1rem" }} />
              </a>
              <div className="dropdown-menu">
                <ul
                  style={{
                    display: "block",
                    position: "fixed",
                    backgroundColor: "#fff",
                    width: "220px",
                    borderRadius: "10px",

                    padding: "1rem 2rem",
                  }}
                >
                  <li>
                    <a className="menu-link" href="#">
                      Destination Fullwidth
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Destination + Video Header
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Destination Right Sidebar
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Single Destination
                    </a>
                  </li>
                  <span className="strain"></span>
                  <li>
                    <a className="menu-link" href="#">
                      Single Destination + Video
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="a-menu">
                Pages <KeyboardArrowDownIcon style={{ width: "1rem" }} />
              </a>
            </li>
            <li>
              <a href="#" className="a-menu">
                Blog <KeyboardArrowDownIcon style={{ width: "1rem" }} />
              </a>
            </li>
            <li>
              <a href="#" className="a-menu">
                Shortcode <KeyboardArrowDownIcon style={{ width: "1rem" }} />
              </a>
            </li>
            <li>
              <a href="#" className="a-menu">
                Shop <KeyboardArrowDownIcon style={{ width: "1rem" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <div className="close-icon">
              {" "}
              <CancelIcon
                style={{ fontSize: "55px" }}
                onClick={toggleMobileMenu}
              />
            </div>
            <li>
              <a href="#" className="a-menu-mobile">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="a-menu-mobile">
                Tours
              </a>
            </li>
            <li>
              <a href="#" className="a-menu-mobile">
                Booking
              </a>
            </li>
            <li>
              <a href="#" className="a-menu-mobile">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="a-menu-mobile">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="a-menu-mobile">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="a-menu-mobile">
                Shortcode
              </a>
            </li>
            <li>
              <a href="#" className="a-menu-mobile">
                Shop
              </a>
            </li>
          </ul>
          <div className="image-menu-mobile">
            {slicedMenuData.map((item, index) => (
              <li key={index}>
                <img
                  className="image-mobile"
                  src={item.image}
                  alt={item.name}
                />
                <div className="title-name-mobile">
                  <div className="price-container">
                    <h3 style={{ margin: "0" }}>
                      ${new Intl.NumberFormat("en-US").format(item.price)}
                    </h3>
                  </div>

                  <div>
                    {" "}
                    <span className="span-name-mobile">{item.name}</span>
                  </div>
                  <div className="icon-star">
                    <StarIcon style={{ fontSize: "18px" }} />
                    <StarIcon style={{ fontSize: "18px" }} />
                    <StarIcon style={{ fontSize: "18px" }} />
                    <StarIcon style={{ fontSize: "18px" }} />
                    <StarBorderIcon
                      style={{ fontSize: "18px", color: "white" }}
                    />
                  </div>
                </div>
              </li>
            ))}
            <div className="icon-navbar">
              <IconMxh />
            </div>
          </div>
        </div>

        <MenuIcon
          className={`menu-icon ${isMobileMenuOpen ? "hide-logo" : ""}`}
          onClick={toggleMobileMenu}
        />
      </div>

      <div className={`input-navbar ${isMobileMenuOpen ? "hide-logo" : ""}`}>
        <InputNavbar />
      </div>
    </div>
  );
}

export default Navbar;
