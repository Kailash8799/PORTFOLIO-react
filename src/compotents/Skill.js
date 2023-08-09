import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const lang = {
    "C++": ["c++.png", "cpplan", "hcpplan"],
    "React JS": ["react.png", "rlan", "hrlan"],
    JavaScript: ["javascript.png", "jslan", "hjslan"],
    "Next JS": ["next.png", "nlan", "hnlan"],
    HTML: ["html.png", "hlan", "hhlan"],
    CSS: ["css.png", "csslan", "hcsslan"],
    PHP: ["php.png", "phplan", "hphplan"],
    C: ["c.png", "clan", "hclan"],
  };
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
        id="skills"
        className="mt-10 mb-20 sm:mx-16 md:mx-10 lg:mx-30 sm:mt-0"
      >
        <div className="text-center sm:pt-10">
          <h1 className="inline-block text-white border-b-4 border-yellow-500 rounded-lg font ">
            Skills
          </h1>
        </div>
        <div className="flex flex-wrap justify-around mx-3 mt-3">
          {Object.keys(lang).map((itm) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 200 }}
                  whileInView={{
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                key={itm}
                className={`border rounded-xl my-3 mx-2 cursor-pointer items-center ${lang[itm][2]}`}
                style={{ width: "300px", height: "160px" }}
              >
                <div className="items-center mt-2 h-2/3">
                  <div className="mt-3">
                    <img
                      src={lang[itm][0]}
                      alt=""
                      className={`mx-auto ${lang[itm][1]}`}
                    />
                  </div>
                </div>
                <div className="text-center h-1/3">
                  <h1 className="text-3xl text-white font">{itm}</h1>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <hr className="text-white border-2" />
    </>
  );
};

export default About;
