import React from "react";
import "./ImageCustom.scss"; // Import file CSS cho component

const ImageCustom = (props) => {
  const { src, alt, width, height } = props;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="image-custom" // Áp dụng class CSS cho ảnh
    />
  );
};

export default ImageCustom;
