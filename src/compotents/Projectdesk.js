import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      height:"100%"
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    height:"100%"
  },
  exit: (direction) => {
    return {
      zIndex: 1,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
      height:"100%"
    };
  },
};


const Projectdesk = (props) => {
  const images = props?.img;
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  console.log(page, direction);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
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
    <div>
      <div className="relative z-50 py-3 my-5 rounded-lg bgback">
        <div className="text-white lg:flex clasna">
          <div className="justify-center mx-auto lg:w-3/5 wclass lg:my-auto">
            <div className="inline-block p-3 mx-3 overflow-hidden rounded-lg divimg md:mx-10">
              {/* <img
                src={`/${props.img[imgs]}`}
                alt=""
                className="block rounded-lg imgw"
              /> */}
              <div className="example-container">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    className="relative top-0 left-0 w-full h-full overflow-hidden imgi"
                    key={page}
                    loading="eager"
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "tween", stiffness: 320, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  />
                </AnimatePresence>
              </div>
              <hr className="border-2 border-yellow-500" />
              <div className="flex justify-between">
                <div
                  className="p-2 cursor-pointer arrowbtn rounded-3xl"
                  onClick={() => {
                    paginate(-1);
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
                    paginate(1);
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
            <h1 className="text-3xl text-center namec font">Relevant Links</h1>
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
  );
};

export default Projectdesk;
