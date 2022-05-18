import React from 'react'
import './portfolio.css'
import Unreal from '../../assets/unreal.png'
import Unrealld from '../../assets/unrealld.png'
import Unity from '../../assets/unity.png'
import ImgMax from '../../assets/max.png'
import ImgMaya from '../../assets/maya.png'
import ar from '../../assets/ar.png'

const data=[
  {
    id:1,
    image:Unreal, 
    title: 'Unreal Bot Shooter',
    youTube:'https://www.youtube.com/watch?v=8_7dC57lVCA',
    more:'#'  
  },
  {
    id:2,
    image:Unrealld, 
    title: 'Unreal Level Design',
    youTube:'https://www.youtube.com/watch?v=gB7iR97bVvU',
    more:'#'  
  },
  {
    id:3,
    image:Unity, 
    title: 'Unity VR Archer Game',
    youTube:'https://www.youtube.com/shorts/CSMQM8ifIH4',
    more:'#'  
  },
  {
    id:4,
    image:ImgMax, 
    title: '3d visualisation',
    youTube:'https://www.youtube.com/watch?v=K1NScNv3p-0',
    more:'#'  
  },
  {
    id:5,
    image:ImgMaya, 
    title: '3d Art',
    youTube:'https://www.youtube.com/watch?v=Oiac47i3J9o&t=4s',
    more:'#'  
  },
  {
    id:1,
    image:ar, 
    title: 'Argumented Reality',
    youTube:'https://www.youtube.com/shorts/aGxmbuZdpS8',
    more:'#'  
  }
]
export default function Portfolio() {
  return (
    <section>
      <h5>My imposing work</h5>
      <h2>samples</h2>
      <div className="container portfolio__container">

      {
        data.map(({id, image, title, youTube, more})=>{
          return(
            <article key = {id} className="portfilio__item">
            <div className="portfolio__item-image">
              <h3>{title}</h3>
              <img src={image} alt={title} />
            </div>
            <div className="portfolio__item-cta">
            <a href={youTube} className="btn" target='_blank'>Youtube</a>
            <a href={more} className="btn btn-primary">more</a>
            </div>
        </article>
          )
        })
      }







      </div>
    </section>
  )
}
