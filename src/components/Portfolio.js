import React from "react";
import programizLogo from "../assets/images/programizLogo.svg";
import curaHealth from "../assets/images/curaHealth.png";
import sewa from "../assets/images/sewa360.png";

export default function Portfolio({ active }) {
  return (
    <article
      className={`portfolio ${active.portfolio && "active"} `}
      data-page="portfolio"
    >
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://www.programiz.com/html/online-compiler/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={programizLogo} alt="P" loading="lazy" />
              </figure>

              <h3 className="project-title">Online Html Editor </h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://www.programiz.com/sql/online-compiler/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={programizLogo} alt="orizon" loading="lazy" />
              </figure>

              <h3 className="project-title"> Online SQL Compiler</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>
          <br />
          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="https://play.google.com/store/apps/details?id=com.curahealth&hl=en&gl=US&pli=1">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={curaHealth} alt="Cura Health" loading="lazy" />
              </figure>

              <h3 className="project-title">Cura Health</h3>

              <p className="project-category">
                {" "}
                Telemedicine app- Cura Health (Admin side and Backend )
              </p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://app.sewa360.com/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={sewa} alt="Sewa360" loading="lazy" />
              </figure>

              <h3 className="project-title">Sewa360 </h3>

              <p className="project-category">Web Application</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
