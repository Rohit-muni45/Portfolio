import React from "react";
import "./About.css";

function About() {
  return (
    <>
      {" "}
      <section className="about">
        {" "}
        <div className="container">
          {" "}
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Muni</strong>, a passionate Full Stack Developer
            with 1+ years of professional experience building scalable web and
            mobile applications. I specialize in React.js, React Native,
            JavaScript, TypeScript, and Node.js, with a strong focus on creating
            clean, responsive, and user-friendly digital experiences.
          </p>
          <p>
            In my professional journey, I have contributed to healthcare
            platforms by developing both web and mobile applications. My work
            includes building reusable UI components, integrating REST APIs,
            implementing authentication systems, managing application state with
            Redux and Context API, and optimizing performance to deliver smooth
            user experiences.
          </p>
          <p>
            I enjoy solving complex problems, writing clean and maintainable
            code, and transforming business requirements into practical
            solutions. Whether it's designing intuitive user interfaces or
            developing feature-rich applications, I am always eager to learn and
            improve.
          </p>
          <p>
            Outside of coding, I enjoy exploring emerging technologies,
            experimenting with AI tools, staying updated with industry trends,
            and sharing knowledge with the developer community.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
