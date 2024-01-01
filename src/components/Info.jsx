
import React from 'react'
import coffeePic from "../img/sample2.png"
import menuPic from "../img/menu-image.jpg"


const Info = () => {
    const scrollTo = (name) => {
        sElement = document.getElementById(name);
        if (projectsElement) {
            console.log("Element found:", projectsElement);
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("Element not found:", name);
        }

    };


  return (
    <div className='info' id='info'>
        <div className="info-container">
            <img src={coffeePic}/>
            <div className="info-text">
                <h1>About us</h1>
                <p>At coffeeology, we pour extra care into every cup of coffee, striving for impeccable consistency, freshness, and unique characteristics. Crafting the perfect brew might take a bit more time and effort, but the delicious taste is well worth it.</p>
                <h3>Come visit us!</h3>
                <p>Monday - Saturday : <span className='open'>8am to 5pm</span></p>
                <p>Sunday - <span className='closed'>Closed</span></p>
                <button  onClick={() => scrollTo("menu")} className='button-74'>Our drinks</button>
            </div>
        </div>
        
    </div>
  )
}

export default Info