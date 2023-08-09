import React from "react";
import Projectdesk from "./Projectdesk";

const About = () => {
  return (
    <>
      <div
        id="project"
        className="mt-10 selection:bg-none marg sm:mx-16 md:mx-10 lg:mx-40 sm:mt-0"
      >
        <div className="text-center sm:pt-10">
          <h1 className="inline-block text-white border-b-4 border-yellow-500 rounded-lg font ">
            Project
          </h1>
        </div>
        <Projectdesk
          img={[
            "port-1.png",
            "port-2.png",
            "port-3.png",
            "port-4.png",
            "port-5.png",
            "port-6.png",
            "port-7.png",
            "port-8.png",
          ]}
          title="My Portfolio"
          desc="A portfolio website made with React.Js for presenting my projects in an organized and decorated way."
          lang={["reacti.svg", "javascripti.svg"]}
          link={"https://kailashrajput.vercel.app"}
          github={"https://github.com/Kailash8799/PORTFOLIO-react"}
        />
        <Projectdesk
          img={["food-1.jpg", "food-2.jpg", "food-3.jpg", "food-4.jpg", "food-5.jpg", "food-6.jpg"]}
          title="Food delivery"
          desc="A food delivery application made with React native and tailwind css for improve knowledge in react native"
          lang={["reacti.svg", "javascripti.svg"]}
          link={
            "https://www.linkedin.com/feed/update/urn:li:activity:7068466287584116736/"
          }
          github={"https://github.com/Kailash8799/foody-reactnative-app"}
        />
        <Projectdesk
          img={["ins1.jpg", "ins2.jpg", "ins3.jpg", "ins4.jpg", "ins5.jpg", "ins6.jpg", "ins7.jpg", "ins8.jpg"]}
          title="Instagram-clone"
          desc="A instagram-clone made with react native and tailwind css with firebase for improve knowledge in react native."
          lang={["reacti.svg", "javascripti.svg"]}
          link={
            "https://www.linkedin.com/feed/update/urn:li:activity:7068466287584116736/"
          }
          github={"https://github.com/Kailash8799/foody-reactnative-app"}
        />
        <Projectdesk
          img={["fd1.png", "fd2.png", "fd3.png", "fd4.png", "fd5.png", "fd6.png", "fd7.png", "fd8.png"]}
          title="Food delivery"
          desc="A Food delivery app made with react js for order food from one particular restaurant or canteen"
          lang={["reacti.svg", "javascripti.svg"]}
          link={"https://food-delivery-react-js-app.vercel.app"}
          github={"https://github.com/Kailash8799/food-delivery-react-js"}
        />
        <Projectdesk
          img={["em1.png", "em2.png", "em3.png", "em4.png", "em5.png", "em6.png", "em7.png"]}
          title="E-Commerse app"
          desc="A E-Commerse web app made with reactjs nodejs and mongodb for improve knowledge in MERN stack"
          lang={["reacti.svg", "javascripti.svg"]}
          link={"https://shoppywebapp.netlify.app/"}
          github={"https://github.com/Kailash8799/mernstack"}
        />
      </div>
      <hr className="text-white border-2" />
    </>
  );
};

export default About;
