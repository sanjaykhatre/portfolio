import React from "react";

export default function Resume({ active }) {
  return (
    <article
      className={`resume ${active.resume && "active"} `}
      data-page="resume"
    >
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Victoria University, Sydney, Australia
            </h4>

            <span>2023 — 2025</span>

            <p className="timeline-text">
              Master’s in Applied Information and Technology
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Tribhuvan University, Kathmandu, Nepal
            </h4>

            <span>2016 – 2020</span>

            <p className="timeline-text">BSc. in Computer Science</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Software Engineer - Brainant’s Technology, Kathmandu,
              Nepal
            </h4>

            <span>2020 — 2023</span>

            <p className="timeline-text">
              ● Developed responsive and user.-friendly web applications using
              React.js, Next.js, delivering high-quality code on time. <br /> ●
              Developed UI components for application and web dashboards using
              Typescript, React.Js, Tailwind Css <br /> ● Collaborated closely
              with UX/UI designers and back-end developers to implement seamless
              front-end and back-end integration <br /> ● Implemented state
              management using React query, improving application performance by
              15%. ● Participated in code reviews, providing constructive
              feedback and consultations, ensuring code quality and consistency.
              <br /> ● Worked in an Agile environment, product management,
              participating in daily stand-ups and contributing to sprint
              planning and estimation. <br /> ● Developed APIs for various
              application modules, including chat system leveraging Node.js,
              Express.js, MongoDB, Firebase and Jest
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Web Developer Intern - Cartmade Ecommerce, Kathmandu, Nepal{" "}
            </h4>

            <span>Jun 2020 – Sept 2020</span>

            <p className="timeline-text">
              ● Developed and maintained user interfaces for web applications,
              utilising Shopify and modern front-end technologies.
              <br /> ● Collaborated with cross-functional teams to define and
              refine project requirements and deliverables.
              <br /> ● Assisted in improving application accessibility and
              implementing responsive design techniques.
              <br /> ● Applied Agile scrum development methodology which enabled
              faster release of features and fixes.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Languages:</h5>
              <data> JavaScript/TypeScript, Python, PHP</data>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frameworks/Libraries/CMS:</h5>
              <data> Node, Express</data>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Front-end Development:</h5>
              <data>
                {" "}
                HTML, CSS, React, Redux, React Query, MaterialUI, Tailwind Css,
                ChakraUI
              </data>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Mobile Development:</h5>
              <data> React Native, Android Studio</data>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Data Analysis and Machine Learning:</h5>
              <data> Keras, TensorFlow</data>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Database:</h5>
              <data> MySQL, PostgreSQL, MongoDB, Firebase</data>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Tools:</h5>
              <data> SQL, Bash, Git, GitLab CI/CD, Jira</data>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Methodologies:</h5>
              <data>
                {" "}
                Object Oriented Programming, Agile Software Development,
                Test-driven Development, Scrum, Pair Programming
              </data>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
