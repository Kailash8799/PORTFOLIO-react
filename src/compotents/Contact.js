import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import logo from "./images/logo.svg";
import "../App.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        exit={{ y: 100 }}
        id="contact"
        className="mt-10 rounded-lg bgback sm:mb-4 sm:mx-16 md:mx-10 lg:mx-40 divhcon sm:mt-0"
      >
        <div className="pt-5 text-center sm:pt-10">
          <h1 className="inline-block text-white border-b-4 border-yellow-500 rounded-lg font ">
            Contact Us
          </h1>
        </div>
        <div className="pb-5 mt-5 sm:flex">
          <div className="items-center justify-center mb-5 text-white divconh sm:w-2/5 sm:mb-0 sm:border-r-2">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
          <div className="text-white sm:w-3/5">
            <form
              action="https://formsubmit.io/send/kailashrajput8799@gmail.com"
              method="POST"
              className="mx-4"
            >
              <TextField
                required
                id="filled-required"
                color="warning"
                className="w-full rounded-lg conbg"
                label="Name"
                variant="filled"
                name="name"
              />
              <input
                name="_redirect"
                type="hidden"
                id="name"
                value="https://kailashrajput.netlify.app"
              />
              {/* <input name="_formsubmi   */}
              <TextField
                required
                id="filled-required"
                color="warning"
                className="w-full my-3 rounded-lg conbg"
                label="Email"
                variant="filled"
                name="email"
              />
              <TextField
                required
                id="filled-multiline-static"
                label="Message"
                className="w-full rounded-lg conbg"
                multiline
                color="warning"
                rows={4}
                variant="filled"
                name="message"
              />
              <div className="justify-center mt-3 text-center">
                <Button
                  className="text-white hoverbtn font fontw"
                  variant="outlined"
                  type="submit"
                >
                  Say Hello
                </Button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
