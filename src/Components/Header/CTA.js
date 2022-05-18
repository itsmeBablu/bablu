import React from 'react'
import CV from '../../assets/BabuReddy.pdf'
export default function CTA() {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download</a>
        <a className='btn btn-primary' href='#contact'>Let's Talk</a>
    </div>
  )
}
