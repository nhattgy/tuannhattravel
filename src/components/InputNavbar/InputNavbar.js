import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import ButtonCustom from "../Button/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./InputNavbar.scss";

function InputNavbar() {
  const [monthAnchorEl, setMonthAnchorEl] = useState(null);
  const [locationAnchorEl, setLocationAnchorEl] = useState(null);
  const [showAdvancedInputs, setShowAdvancedInputs] = useState(false); // Track whether to show advanced inputs
  const [isIconUp, setIsIconUp] = useState(false);
  const handleMonthClick = (event) => {
    setMonthAnchorEl(event.currentTarget);
  };

  const handleLocationClick = (event) => {
    setLocationAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMonthAnchorEl(null);
    setLocationAnchorEl(null);
  };

  const openMonthPopover = Boolean(monthAnchorEl);
  const openLocationPopover = Boolean(locationAnchorEl);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const locations = [
    "Sort By Date",
    "Price Low to High",
    "Price High to Low",
    "Sort By Name",
    "Sort By Review",
  ]; // Replace with your actual location data

  const toggleAdvancedInputs = () => {
    setShowAdvancedInputs(!showAdvancedInputs);
    setIsIconUp(!isIconUp);
  };

  return (
    <div className="input-component">
      <div className="component-input">
        <h1 className="h1-text">Where want to go ?</h1>
      </div>
      <span className="span-text">
        Trips, experiences, and places. All in one service.
      </span>
      <div className="input-container">
        <input
          placeholder="Destination, city"
          type="text"
          className="custom-input large"
        />
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="custom-input large"
          onClick={handleMonthClick}
          value="Select Month"
        />
        <Button
          style={{
            position: "absolute",
            right: "0",
            marginTop: "8px",
            color: "#7f7f7f",
          }}
          onClick={handleMonthClick}
        ></Button>
        <Popover
          open={openMonthPopover}
          anchorEl={monthAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div style={{ padding: "20px", margin: "10px 4rem" }}>
            <h3>Select a Month</h3>
            <ul className="month-list">
              {months.map((month, index) => (
                <li key={index}>{month}</li>
              ))}
            </ul>
          </div>
        </Popover>
        <DateRangeIcon className="date-icon" style={{}} />
        <input
          type="text"
          placeholder="Sort By Date"
          className="custom-input large"
          onClick={handleLocationClick}
        />
        <ImportExportIcon className="import-icon" />
        <Popover
          open={openLocationPopover}
          anchorEl={locationAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div style={{ margin: "10px 1rem", padding: "0 3rem" }}>
            <ul className="location-list">
              {locations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>
        </Popover>
        <div className="button-custom">
          <ButtonCustom>Search</ButtonCustom>
        </div>
      </div>

      {showAdvancedInputs && (
        <div className="input-container">
          <input
            type="text"
            placeholder="All Category"
            className="custom-input large"
            onClick={handleLocationClick}
          />

          <KeyboardArrowDownIcon className="search-icon" />
          <input
            type="text"
            placeholder="Any Destination"
            className="custom-input large"
            onClick={handleLocationClick}
          />
          <KeyboardArrowDownIcon className="date-icon" />
          <input
            type="text"
            placeholder="Max budget ex. 500"
            className="custom-input large"
          />
          <AttachMoneyIcon className="attach-icon" />
        </div>
      )}
      <div className="button-more-input">
        {isIconUp ? (
          <KeyboardArrowUpIcon style={{ color: "#fff", margin: "-4px" }} />
        ) : (
          <KeyboardArrowDownIcon style={{ color: "#fff", margin: "-4px" }} />
        )}
        <button className="button-more" onClick={toggleAdvancedInputs}>
          Advanced Search
        </button>
      </div>
    </div>
  );
}

export default InputNavbar;
