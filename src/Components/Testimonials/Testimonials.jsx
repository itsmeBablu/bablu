import React from "react";
import "./testimonials.css";
import DL from "../../assets/dl1.jpg";
import IVFX from "../../assets/ivfx.jpg";
import IBV from "../../assets/ibv.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: IBV,
      name: "IBV",
      Duration: "from June 2019",
      Role: "BIM Engineer",
      link: "https://www.ibv-hd.de/",
      review:
        " Here I’m working as a BIM engineer, and specifically on Heat Load calculations for commercial and residential projects. IBV is one of the oldest and leading engineering offices for supply technology in the Rhine-Neckar metropolitan region.Provides range of services including consulting, planning and construction supervision of all trades of technical building equipment.",
    },
    {
      avatar: IVFX,
      name: "Infinito VFX",
      Role: "Game Developer",
      Duration: "June 2018 to Dec 2018",
      link: "https://www.infinitovfx.com/",
      review:
        "I worked as an AR/VR Developer, in other ways as a Game Developer for a short period.InfinitoVFX is a startup and provides AR/VR, 2d Animations and Graphic designing Projects, based on client requirement.",
    },
    {
      avatar: DL,
      name: "Digital Lync",
      Role: "3D Visualizer/Artist",
      link: "https://www.digital-lync.com/",
      Duration: "December 2015 to June 2018",
      review:
        "Here, I worked as a 3d Visualizer/Developer.Previously it used to be a IT company, later on that changed to  Skill Up training Institute.Enlightening environment with flexible things dealing with Projects and students.I even trained a few students in UI/UX skill up Programming.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>About the</h5>
      <h2>Companies that, I worked and working</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, Role, link, Duration, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <a href={link} target="_blank">
                  <img src={avatar} alt="" />
                </a>
              </div>
              <h3 className="client__name">{name}</h3>
              <h5 className="client__name">{Duration}</h5>
              <h3 className="client__role">{Role}</h3>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
