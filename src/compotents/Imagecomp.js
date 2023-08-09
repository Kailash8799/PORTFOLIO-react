import React from "react";

const Imagecomp = ({ src }) => {
    console.log("Hey");
    console.log(src);
  return (
      <img
        src={src}
        loading="lazy"
        alt={src + "Image"}
        className="block w-full mx-auto max-h-[400px] object-contain min-h-[200px] rounded-lg imgw"
      />
  );
};

export default Imagecomp;
