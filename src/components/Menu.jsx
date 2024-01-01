

import React from 'react'
import { BiSolidCoffeeBean } from "react-icons/bi";
import { GiCoffeeBeans } from "react-icons/gi";
import { PiCoffeeFill } from "react-icons/pi";
import { SiGitea } from "react-icons/si";
import { TbScribble } from "react-icons/tb";


const Menu = () => {
  return (
    <div className='menu' id='menu'>

      <div className="menu-container">
        <div className="h1-container">
          <BiSolidCoffeeBean className='bean-icon'/>
          <h1 className='main-h1'>Coffee and Alternatives!</h1>
          <GiCoffeeBeans className='bean-icon'/>


        </div>

        <div className="menu-items">
        <div className="coffee">
          <h1>Coffee <PiCoffeeFill/></h1>
          <p><BiSolidCoffeeBean className='icon'/> Drip coffee</p>
          <p><BiSolidCoffeeBean className='icon'/> Pour over</p>
          <p><BiSolidCoffeeBean className='icon'/> Espresso</p>
          <p><BiSolidCoffeeBean className='icon'/> Long black</p>
          <p><BiSolidCoffeeBean className='icon'/> Red eye</p>
          <p><BiSolidCoffeeBean className='icon'/> Flat white</p>
          <p><BiSolidCoffeeBean className='icon'/> Latte</p>
          <p><BiSolidCoffeeBean className='icon'/> Cappuccino</p>
          <p><BiSolidCoffeeBean className='icon'/> Mocha</p>
        </div>
        <div className="alternatives">
          <h1>Alternatives <SiGitea/></h1>

          <p><TbScribble className='icon'/> Tea</p>
          <p><TbScribble className='icon'/> Chai latte</p>
          <p><TbScribble className='icon'/> Hot chocolate</p>
          <p><TbScribble className='icon'/> Matcha</p>
          <p><TbScribble className='icon'/> London fog</p>
          <p><TbScribble className='icon'/> Chai cider</p>
        </div>
      </div>


      </div>

      
    </div>
  )
}

export default Menu