import React from 'react'
import './experience.css'
import {AiOutlineCheck} from 'react-icons/ai'
export default function Experience() {
  return (
    <section id = 'experience'>
      <h5>All about my Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">


        <div className="experience__gamedevelopment">
          <h3>Game Development</h3>
          <div className="experience_content">

            <article className='experience__details'>
              <AiOutlineCheck/>
              <h4>Unity</h4>
              <small className="text-light">c# | ShaderScripting | AR</small>
            </article>

            <article className='experience__details'>
              <AiOutlineCheck/>
              <h4>Unreal</h4>
              <small className="text-light">Blueprints | Shaders | VR</small>
            </article>

        </div>
        </div>



        <div className="experience__bim">
          <h3>BIM Engineering</h3>
            <div className="experience_content">

              <article className='experience__details'>
                <AiOutlineCheck/>
                <h4>AutoCad</h4>
                <small className="text-light">Experienced | basic Lisp</small>
              </article>

              <article className='experience__details'>
                <AiOutlineCheck/>
                <h4>Revit</h4>
                <small className="text-light">Experienced | basic Dynamo Nodes</small>
              </article>
        </div>
        </div>



          <div className="experience_gamedevelopment">
          <h3>Web Development</h3>
          <div className="experience_content">

            <article className='experience__details'>
              <AiOutlineCheck/>
              <h4>JavaScript</h4>
              <small className="text-light"> HTML | CSS</small>
            </article>

            <article className='experience__details'>
              <AiOutlineCheck/>
              <h4>React</h4>
              <small className="text-light"> Intermediate</small>
            </article>
        </div>
        </div>


        <div className="experience_gamedevelopment">
          <h3>3d Art and visualization</h3>
          <div className="experience_content">

            <article className='experience__details'>
              <AiOutlineCheck/>
              <h4>Maya</h4>
              <small className="text-light">Modelling | Texturing | Lighting | Baking | Rendering</small>
            </article>

            <article className='experience__details'>
              <AiOutlineCheck/>
              <h4>3ds Max</h4>
              <small className="text-light">Lighting | V-ray Rendering</small>
            </article>

          </div>
        </div>  
        
        <div className="experience_gamedevelopment">
          <h3>UI/UX</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <AiOutlineCheck/>
              <h4>Illustrator  </h4>
              <small className="text-light">Logos | patterns</small>
            </article>

            <article className='experience__details'>
              <AiOutlineCheck/>
              <h4>Indesign</h4>
              <small className="text-light">visual communication | book styling</small>
            </article>

            </div>
            </div>

      </div>
    </section>
  )
}
