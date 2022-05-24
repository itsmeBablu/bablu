import React from "react";
import "./services.css";
import { GrServices } from "react-icons/gr";
export default function Services() {
  return (
    <section id="services">
      <h5>small imposing things</h5>
      <h2>to help out your Business</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>AR/VR</h3>
          </div>

          <ul className="service__list">
            <li>
              <GrServices className="service__list-icon" />
              <p>Argumented Reality Applications</p>
            </li>
            <li>
              <GrServices className="service__list-icon" />
              <p>Virtual Reality Applications</p>
            </li>
            <li>
              <GrServices className="service__list-icon" />
              <p>Markerless AR/360° Renders</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <GrServices className="service__list-icon" />
              <p>Logos</p>
            </li>
            <li>
              <GrServices className="service__list-icon" />
              <p>Marketing flyers</p>
            </li>
            <li>
              <GrServices className="service__list-icon" />
              <p>User interface layouts</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>3d Art</h3>
          </div>

          <ul className="service__list">
            <li>
              <GrServices className="service__list-icon" />
              <p>low poly assets</p>
            </li>
            <li>
              <GrServices className="service__list-icon" />
              <p>texturing</p>
            </li>
            <li>
              <GrServices className="service__list-icon" />
              <p>optimise Baking</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
