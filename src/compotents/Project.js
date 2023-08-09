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
          img={["img-1.png", "img-2.png"]}
          title="My Portfolio"
          desc="A portfolio website made with React.Js for presenting my projects in an organized and decorated way."
          lang={["reacti.svg", "javascripti.svg"]}
        />
        <Projectdesk
          img={["img-1.png", "img-2.png"]}
          title="E-Commerse"
          desc="A portfolio website made with React.Js for presenting my projects in an organized and decorated way."
          lang={["reacti.svg", "javascripti.svg"]}
        />
        <Projectdesk
          img={["img-1.png", "img-2.png"]}
          title="E-Commerse"
          desc="A portfolio website made with React.Js for presenting my projects in an organized and decorated way."
          lang={["reacti.svg", "javascripti.svg"]}
        />
        <Projectdesk
          img={["img-1.png", "img-2.png"]}
          title="E-Commerse"
          desc="A portfolio website made with React.Js for presenting my projects in an organized and decorated way."
          lang={["reacti.svg", "javascripti.svg"]}
        />
        <Projectdesk
          img={["img-1.png", "img-2.png"]}
          title="E-Commerse"
          desc="A portfolio website made with React.Js for presenting my projects in an organized and decorated way."
          lang={["reacti.svg", "javascripti.svg"]}
        />
      </div>
      <hr className="text-white border-2" />
    </>
  );
};

export default About;
