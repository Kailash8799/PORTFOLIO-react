import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Im from "../compotents/images/img-2.jpg";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="items-center selection:bg-none pb-3 mt-10 rounded-lg sm:flex bgbackhome sm:mx-16 md:mx-10 lg:mx-28 divh sm:mt-0"
      >
        <motion.div
          initial={{ x: -200 }}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="justify-center sm:w-1/2"
        >
          <img
            src={Im}
            loading="eager"
            alt="Myimage"
            width={300}
            className="justify-center mx-auto rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="mx-5 mt-5 sm:w-1/2 sm:mx-0 sm:mt-0"
        >
          <h1 className="text-4xl text-white md:text-5xl font">Hy! I Am</h1>
          <h1 className="my-2 text-3xl namec font sm:text-5xl">
            Kailash Rajput
          </h1>
          <h2 className="mt-2 text-2xl text-yellow-100 font">
            Fronted Developer with high lavel of experience in web designing and
            development producting the Quality work
          </h2>
          <div className="mt-3">
            <a href="#about" className="text-decoration-none">
              <Button className="text-white font bgo" variant="outlined">
                About me
              </Button>
            </a>
            <a href="#contact" className="text-decoration-none">
              <Button className="mx-1 text-white font bgo" variant="outlined">
                Contact
              </Button>
            </a>
          </div>
          <div className="mt-10">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Kailash8799"
            >
              <i className="text-5xl fa-brands fa-github namec"></i>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/kailash-rajput-9b559422b"
            >
              <i className="mx-3 text-5xl fa-brands fa-linkedin-in namec"></i>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.instagram.com/thekailash8799"
            >
              <i className="text-5xl fa-brands fa-instagram namec"></i>
            </a>
          </div>
        </motion.div>
      </div>
      <hr className="text-white border-2" />
    </>
  );
};

export default Home;
