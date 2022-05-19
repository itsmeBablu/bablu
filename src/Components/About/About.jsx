import React from 'react'
import './about.css'
import ME from '../../assets/cme.png'

import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'
export default function About() {
  return (
    <section id = 'about'>
      <h5>Get to Know</h5>
      <h2>About me..</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ WorldWide</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Projects</small>
            </article>

            
          </div>

            <p>
              BIM Engineer and Game/Web Developer, 
              3d Visualizer and UI/UX Desiginer, Talented Designer/programmer 
              with the ability to quickly pick up and use new tools, languages 
              and software applications. I am also a dedicated team member with a 
              passion for creation and visualization.
              </p>


              <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}
