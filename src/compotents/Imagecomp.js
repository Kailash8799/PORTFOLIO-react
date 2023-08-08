import React from "react";

const Imagecomp = ({ src }) => {
    console.log("Hey");
    console.log(src);
  return (
      <img
        src={src}
        alt={src + "Image"}
        className="block rounded-lg imgw"
      />
  );
};

export default Imagecomp;
