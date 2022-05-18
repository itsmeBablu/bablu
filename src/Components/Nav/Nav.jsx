import React from 'react';
import './nav.css'

import {GoHome} from 'react-icons/go'
import {BiUser} from 'react-icons/bi'
import {VscDebug} from 'react-icons/vsc'
import {BsBookmarkStar} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'

import { useState } from 'react';
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#"      onClick={()=> setActiveNav('#')}  className ={activeNav === '#'? 'active': ''}><GoHome/></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className = {activeNav === '#about'?'active':''}><BiUser/></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className = {activeNav === '#experience'?'active':''}><BsBookmarkStar/></a>
            <a href="#services" onClick={()=> setActiveNav('#services')} className = {activeNav === '#services'?'active':''}><VscDebug/></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className = {activeNav === '#contact'?'active':''}><AiOutlineContacts/></a>
        </nav>
    );
}

export default Nav;
