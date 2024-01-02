

import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../img/logo.png"
import logoNav from "../img/logo-nav.png"
import logoCircle from "../img/logo-circle.png"
import { FaLevelDownAlt } from "react-icons/fa";
import arrow from "../img/arrow-down.png"
import { FaAngleDown } from "react-icons/fa";
import scribble from "../img/scribble.png"
import { FaGoogle } from "react-icons/fa";

const Home = () => {
    const scrollTo = (name) => {
        console.log("Trying to scroll to:", name);
        const projectsElement = document.getElementById(name);
        if (projectsElement) {
            console.log("Element found:", projectsElement);
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("Element not found:", name);
        }
    };




  return (
    <div className='home'>
        <div className="home-nav">
            <div className="left">
                <img src={logoNav}/>
            </div>
            <div className="middle">
                <div className="middle-home">
                    <span onClick={() => scrollTo("info")} >About</span>
                    <img src={scribble}/>
                </div>
                <div className="middle-about">
                    <img src={scribble}/>
                    <span onClick={() => scrollTo("menu")} >Menu</span>
                </div>
                <div className="middle-contact">
                    <img src={scribble}/>
                    <span onClick={() => scrollTo("gallery")} >Gallery</span>
                </div>
            </div>
            <div className="right">
                <a className="ig" href="https://www.instagram.com/coffeeologyespressoco/?hl=en" target="_blank"><AiOutlineInstagram className='icon ig'/></a>
                <a className="fb" href="https://m.facebook.com/p/Coffeeology-Espresso-Co-100070251210753/" target="_blank"><FaFacebookF className='icon fb'/></a>
                <a className="google" href="https://www.google.com/search?client=firefox-b-d&q=coffeeology#lrd=0x4b5a2382c9f0b98f:0xd6873cfa8a9db81d,1,,,," target="_blank"><FaGoogle className='icon google'/></a>

            </div>
        </div>

        <div className='home-info'>
            <p className='welcome-message'>For all coffee lovers out there!</p>
            <p className='welcome-description'>Our main goal is to always address a high level of customer satisfaction with consistency and freshest cup of coffee.</p>
            <img src={logoCircle} alt="circle coffeeology logo"/>
            <button className='info-button'>Learn More</button>

            <FaAngleDown className='icon'/>
        </div>

        <div className='address'>
            <p>1587 Dresden Row</p>
            <p>Halifax, NS</p>
            <p>Canada</p>
        </div>
    </div>
  )
}

export default Home