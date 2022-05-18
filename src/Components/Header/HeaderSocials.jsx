import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FaDribbble} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

export default function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/babu-reddy-6294b4131/" target='_blank'><FiLinkedin/></a>
        <a href="https://github.com/itsmeBablu" target='_blank'><FiGithub/></a>
        <a href="https://dribbble.com/Bablu_202?onboarding=true" target='_blank'><FaDribbble/></a>
        <a href="https://www.instagram.com/itsme_bablu/" target='_blank'><FaInstagram/></a>
    </div>
  )
}
