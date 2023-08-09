import React from "react";
import Im from "../compotents/images/img-1.jpg";
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
        id="about"
        className="py-4 selection:bg-none mt-10 sm:mx-16 bgback md:mx-10 lg:mx-28 rounded-xl sm:mt-0"
      >
        <div className="text-center lg:pt-10">
          <h1 className="inline-block text-white border-b-4 border-yellow-500 rounded-lg font ">
            About Me
          </h1>
        </div>
        <div className="items-center pt-10 lg:mt-5 lg:flex">
          <motion.div
            initial={{ x: -500 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            exit={{ x: -100 }}
            className="items-center pb-4 mx-5 lg:w-1/3 lg:m-0"
          >
            <img src={Im} alt="" className="mx-auto rounded-full h96" />
          </motion.div>
          <motion.div
            initial={{ x: 500 }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            exit={{ x: 100 }}
            className="px-6 lg:w-2/3 lg:pl-28 lg:pr-4"
          >
            <h1 className="namec">
              A tech enthusiast with a passion for learning and building things.
            </h1>
            <hr className="namec" />
            <p className="text-xl text-white font">
              Greetings, I'm Kailash—a passionate Full Stack Developer and
              dedicated Competitive Programmer. Proficient in an array of
              languages including C++, C, HTML, CSS, JavaScript, Java, and
              Python, I've sculpted numerous websites and applications.
              Currently pursuing Computer Engineering at Dharmsinh Desai
              University, I'm driven by a relentless pursuit of knowledge and
              innovation. Let's collaborate and bring remarkable ideas to life.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <hr className="text-white border-2" />
    </>
  );
};

export default About;
