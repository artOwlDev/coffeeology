

import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import arrow from "../img/arrow-down.png"
import { FaGoogle } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer'>
        <p> © 2024 Coffeeology Espresso Co </p>
        <p>|</p>
        <a href="https://www.instagram.com/coffeeologyespressoco/?hl=en"><AiOutlineInstagram className='icon'/></a>
        <a href="https://m.facebook.com/p/Coffeeology-Espresso-Co-100070251210753/"><FaFacebookF className='icon'/></a>
        <a href="https://www.google.com/search?client=firefox-b-d&q=coffeeology#lrd=0x4b5a2382c9f0b98f:0xd6873cfa8a9db81d,1,,,,"><FaGoogle className='icon'/></a>
    </div>
  )
}

export default Footer