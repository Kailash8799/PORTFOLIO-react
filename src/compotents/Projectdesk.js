import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Imagecomp from "./Imagecomp";

const Projectdesk = (props) => {
  const images = props?.img;
  const [imgs, setimgs] = useState(0);
  const forwardimg = () => {
    if (imgs + 1 === props.img.length) {
      setimgs(0);
    } else {
      setimgs(imgs + 1);
    }
  };
  const backwardimg = () => {
    if (imgs === 0) {
      setimgs(props.img.length - 1);
    } else {
      setimgs(imgs - 1);
    }
  };
  return (
    <AnimatePresence>
      <div>
        <div className="relative z-50 py-3 my-5 rounded-lg bgback">
          <div className="text-white lg:flex clasna">
            <div className="justify-center mx-auto lg:w-3/5 wclass lg:my-auto">
              <div className="inline-block  min-h-[200px] p-3 mx-3 overflow-hidden rounded-lg  divimg md:mx-10">
                {/* {images.forEach((item, key) => {
                key === imgs && <Imagecomp key={key} src={`/${item}`} />;
              })} */}

                {images.map((item, ind) => {
                  return (
                    ind === imgs && (
                      <motion.div
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        exit={{
                          opacity: 0,
                          x: -1000,
                        }}
                      >
                        <Imagecomp key={ind} src={`/${item}`} />{" "}
                      </motion.div>
                    )
                  );
                })}

                {/* <img
                src={`/${props.img[imgs]}`}
                alt=""
                className="block rounded-lg imgw"
              /> */}
                <hr className="border-2 border-yellow-500" />
                <div className="flex justify-between">
                  <div
                    className="p-2 cursor-pointer arrowbtn rounded-3xl"
                    onClick={() => {
                      backwardimg();
                    }}
                  >
                    <ArrowBackIosIcon />
                  </div>
                  <div className="p-2 arrowbtn rounded-xl">
                    <span className="text-xl">
                      {imgs + 1} / {props.img.length}
                    </span>
                  </div>
                  <div
                    className="p-2 cursor-pointer arrowbtn rounded-3xl"
                    onClick={() => {
                      forwardimg();
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10 lg:w-2/5 wclass p-7">
              <div>
                <h1 className="text-center font">{props.title}</h1>
              </div>
              <hr />
              <div>
                <p className="text-2xl font lg:mx-4">{props.desc}</p>
                <div className="flex items-center justify-around lanicon h-14 rounded-xl">
                  {props.lang.map((itm, num) => {
                    return (
                      <div className="" key={num}>
                        <img src={`/${itm}`} alt="" width={50} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div></div>
              <hr />
              <h1 className="text-3xl text-center namec font">
                Relevant Links
              </h1>
              <div className="justify-center mt-3 text-center">
                <Button
                  className="mx-3 mb-2 text-white hoverbtn font fontw"
                  variant="outlined"
                >
                  Demo
                </Button>
                <Button
                  className="mb-2 text-white hoverbtn font fontw"
                  variant="outlined"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Projectdesk;
