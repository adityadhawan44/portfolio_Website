"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>Typescript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education & Experiences",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Delhi Technological University</li>
        <br />  
        <li>New Green Field School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>How Computers Work</li>
        <li>Html, CSS and Javascript for Web Developers</li>
        <li>Google SEO Fundementals</li>
        <li>Introduction to Google SEO</li>
        {/* <li>Typescript Fundementals, Operators, Variables, Properties and Methods </li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/computer.jpg" width={500} height={500} alt="about-image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a full-stack web developer with a passion for creating dynamic and scalable web applications. My expertise lies in building responsive, user-friendly platforms using modern frameworks and tools. As a creative Python programmer, I enjoy crafting efficient solutions for various technical challenges, particularly in data analysis and automation.

Currently, I am pursuing a degree in Engineering Physics at Delhi Technological University, which has deepened my analytical and problem-solving skills. With strong communication abilities, I am also a confident speaker, effectively conveying complex ideas to diverse audiences
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education & Experiences
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
