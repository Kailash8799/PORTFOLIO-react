import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
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
        id="resume"
        className="mt-10 selection:bg-none sm:mx-16 md:mx-10 lg:mx-40 sm:mt-0"
      >
        <div className="text-center sm:pt-10">
          <h1 className="inline-block text-white border-b-4 border-yellow-500 rounded-lg font ">
            Resume
          </h1>
        </div>
        <div>
          <div className="py-3 my-5 rounded-lg bgback">
            <div className="text-white lg:flex clasna">
              <div className="justify-center mx-auto lg:w-2/5 wclass lg:my-auto">
                <div className="inline-block p-3 mx-3 rounded-lg divimg lg:mx-10">
                  <img
                    src={`/resumep.svg`}
                    alt="resume"
                    className="block rounded-lg imgw"
                  />
                  <hr className="border-2 border-yellow-500" />
                </div>
              </div>
              <div className="px-10 lg:w-3/5 wclass p-7">
                <div>
                  <h1 className="text-center font">
                    You can find my updated resume by clicking on the link
                    below.
                  </h1>
                </div>
                <hr />

                <div>
                  <p className="text-2xl font lg:mx-4">
                    Please feel free to contact for hiring as well as freelance
                    projects through phone / email.
                  </p>
                  <div className="items-center justify-around rounded-xl lg:flex">
                    <div className="p-3 my-2 lanicon rounded-xl">
                      Frontend Developer
                    </div>
                    <div className="p-3 my-2 lanicon md:mx-1 rounded-xl">
                      Frontend Developer
                    </div>
                    <div className="p-3 my-2 lanicon rounded-xl">
                      Frontend Developer
                    </div>
                  </div>
                </div>
                <div></div>
                <hr />
                <div className="justify-center mt-3 text-center">
                  <Button
                    className="mx-3 mb-2 text-white hoverbtn font fontw"
                    variant="outlined"
                  >
                    RESUME
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <hr className="text-white border-2" />
    </>
  );
};

export default Resume;
