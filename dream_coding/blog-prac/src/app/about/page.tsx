import Hero from "@/components/Hero";
import React from "react";

type Props = {};
const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
const AboutPage = (props: Props) => {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          프론트엔드 신입 개발자 <br />
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>...</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React
          <br />
          Git <br />
          VS Code
        </p>
      </section>
    </>
  );
};

export default AboutPage;
