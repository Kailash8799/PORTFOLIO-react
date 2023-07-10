import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import logo from "./images/logo.svg";
import "../App.css";

const About = () => {
  return (
    <>
      <div
        id="contact"
        className="bgback rounded-lg sm:mb-4 sm:mx-16 md:mx-10 lg:mx-40 divhcon mt-10 sm:mt-0"
      >
        <div className="sm:pt-10 pt-5 text-center">
          <h1 className="font text-white border-b-4 rounded-lg border-yellow-500 inline-block ">
            Contact Us
          </h1>
        </div>
        <div className="sm:flex mt-5 pb-5">
          <div className="divconh sm:w-2/5 text-white mb-5 sm:mb-0 sm:border-r-2 items-center justify-center">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
          <div className="sm:w-3/5 text-white">
            <form action="https://formsubmit.io/send/kailashrajput8799@gmail.com" method="POST" className="mx-4">
              <TextField
                required
                id="filled-required"
                color="warning"
                className="conbg w-full rounded-lg"
                label="Name"
                variant="filled"
                name="name"
              />
              <input name="_redirect" type="hidden" id="name" value="https://kailashrajput.netlify.app"/>
               {/* <input name="_formsubmi   */}
              <TextField
                required
                id="filled-required"
                color="warning"
                className="conbg w-full rounded-lg my-3"
                label="Email"
                variant="filled"
                name="email"
              />
              <TextField
                required
                id="filled-multiline-static"
                label="Message"
                className="conbg w-full rounded-lg"
                multiline
                color="warning"
                rows={4}
                variant="filled"
                name="message"
              />
              <div className="mt-3 justify-center text-center">
                <Button
                  className="hoverbtn text-white font fontw"
                  variant="outlined"
                  type="submit"
                >
                  Say Hello
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
