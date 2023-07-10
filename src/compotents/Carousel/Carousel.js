import React, { Children, useState } from "react";
import classes from "./Carousel.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

const widthSpan = 100.1;

function Carousel(props) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);
  const [touched, setTouched] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const [mouseStartPosition, setMouseStartPosition] = useState(0);
  const [mouseEndPosition, setMouseEndPosition] = useState(0);
  const [mouseClicked, setMouseClicked] = useState(false);
  const [mouseSwiped, setMouseSwiped] = useState(false);

  const { children, infinite, timer, stopOnManual } = props;
  const [autoAdvance, setAutoAdvance] = useState(timer !== undefined);
  let interval;

  const prevSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    } else if (infinite) {
      newPosition = children.length - 1 || 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < children.length - 1) {
      newPosition = newPosition + 1;
    } else if (infinite) {
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const jumpToSlideHandler = (id) => {
    translateFullSlides(id);
    setSliderPosition(id);
  };

  const manageTimer = () => {
    clearInterval(interval);
    if (stopOnManual) {
      setAutoAdvance(false);
    }
  };

  const prevClickHandler = () => {
    manageTimer();
    prevSlideHandler();
  };

  const nextClickHandler = () => {
    manageTimer();
    nextSlideHandler();
  };


  const speedUpAnimation = () => {
    for (
      let i = Math.max(0, sliderPosition - 2);
      i < (Math.min(children.length, sliderPosition + 3) || 1);
      i++
    ) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.classList.add(classes.FastAnimation);
    }
  };

  const slowDownAnimation = () => {
    for (
      let i = Math.max(0, sliderPosition - 2);
      i < (Math.min(children.length, sliderPosition + 3) || 1);
      i++
    ) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.classList.remove(classes.FastAnimation);
    }
  };

  const touchStartHandler = (e) => {
    manageTimer();
    speedUpAnimation();
    setTouchStartPosition(e.targetTouches[0].clientX);
    setTouchEndPosition(e.targetTouches[0].clientX);
    setTouched(true);
  };

  const touchMoveHandler = (e) => {
    setTouchEndPosition(e.targetTouches[0].clientX);
    const frameWidth = document.getElementById("DisplayFrame").offsetWidth;
    const translateDist =
      ((touchEndPosition - touchStartPosition) / frameWidth) * 100;
    translatePartialSlides(translateDist);
    if (touched === true) {
      setSwiped(true);
    }
  };

  const touchEndHandler = (e) => {
    if (swiped) {
      slowDownAnimation();
      if (touchStartPosition - touchEndPosition > 75) {
        nextSlideHandler();
      } else if (touchStartPosition - touchEndPosition < -75) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setTouched(false);
    setSwiped(false);
  };

  const mouseStartHandler = (e) => {
    manageTimer();
    e.preventDefault();
    speedUpAnimation();
    setMouseStartPosition(e.clientX);
    setMouseEndPosition(e.clientX);
    setMouseClicked(true);
  };

  const mouseMoveHandler = (e) => {
    e.preventDefault();
    var frameWidth = document.getElementById("DisplayFrame").offsetWidth;
    if (mouseClicked === true) {
      setMouseEndPosition(e.clientX);
      let translateDist =
        ((mouseEndPosition - mouseStartPosition) / frameWidth) * 100;
      translatePartialSlides(translateDist);
      setMouseSwiped(true);
    }
  };

  const mouseEndHandler = (e) => {
    slowDownAnimation();
    if (mouseSwiped === true) {
      if (mouseStartPosition - mouseEndPosition > 100) {
        nextSlideHandler();
      } else if (mouseStartPosition - mouseEndPosition < -100) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setMouseClicked(false);
    setMouseSwiped(false);
  };

  const wheelHandler = () => {
    document.getElementById("DisplayFrame").scrollLeft = 0;
  };

  const translatePartialSlides = (toTranslate) => {
    let currentTranslation = -sliderPosition * widthSpan;
    let totalTranslation = currentTranslation + toTranslate;
    for (var i = 0; i < (children.length || 1); i++) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.style.transform = `translateX(` + totalTranslation + `%)`;
    }
  };

  const translateFullSlides = (newPosition) => {
    let toTranslate = -widthSpan * newPosition;
    for (var i = 0; i < (children.length || 1); i++) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.style.transform = `translateX(` + toTranslate + `%)`;
    }
  };

  const displayItems = Children.map(children, (child, index) => (
    <div className={classes.CarouselItem} id={`carouselitem` + index}>
      {child}
    </div>
  ));

  return (
    <div>
      <div className="py-3 my-5 rounded-lg bgback">
        <div className="text-white lg:flex clasna">
          <div className="justify-center mx-auto lg:w-3/5 wclass lg:my-auto">
            <div className="inline-block p-3 mx-3 rounded-lg divimg md:mx-10">
              <div className={classes.Container}>
                <div className={classes.LeftArrow} onClick={prevClickHandler}>
                  ❰
                </div>
                <div
                  className={classes.DisplayFrame}
                  id="DisplayFrame"
                  onTouchStart={(e) => touchStartHandler(e)}
                  onTouchMove={(e) => touchMoveHandler(e)}
                  onTouchEnd={(e) => touchEndHandler(e)}
                  onMouseDown={(e) => mouseStartHandler(e)}
                  onMouseMove={(e) => mouseMoveHandler(e)}
                  onMouseUp={(e) => mouseEndHandler(e)}
                  onMouseLeave={(e) => mouseEndHandler(e)}
                  onWheel={() => wheelHandler()}
                >
                  {displayItems}
                </div>
                <div className={classes.RightArrow} onClick={nextClickHandler}>
                  ❱
                </div>
              </div>

              <hr className="border-2 border-yellow-500" />
              <div className="flex justify-between">
                <div
                  className="p-2 cursor-pointer arrowbtn rounded-3xl"
                  onClick={prevClickHandler}
                >
                  <ArrowBackIosIcon />
                </div>
                <div className="p-2 arrowbtn rounded-xl">
                  <span className="text-xl">
                    2/2{/* {imgs + 1} / {props.img.length} */}
                  </span>
                </div>
                <div
                  className="p-2 cursor-pointer arrowbtn rounded-3xl"
                  onClick={nextClickHandler}
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
}

export default Carousel;
