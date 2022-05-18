import React from 'react'
import './footer.css'

import {FiLinkedin} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {RiFacebookLine} from 'react-icons/ri'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineDribbble} from 'react-icons/ai'
export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Bablu</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer footer__socials" >
        <a href="https://www.linkedin.com/in/babu-reddy-6294b4131/" target= '_blank'><FiLinkedin/></a>
        <a href="https://www.instagram.com/itsme_bablu/" target= '_blank'><FaInstagram/></a>
        <a href="https://www.facebook.com/kanala.bablureddy" target= '_blank'><RiFacebookLine/></a>
        <a href="https://github.com/itsmeBablu" target= '_blank'><FiGithub/></a>
        <a href="https://dribbble.com/Bablu_202" target= '_blank'><AiOutlineDribbble/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bablu. All rights, may be reserved</small>
      </div>
    </footer>
  )
}
