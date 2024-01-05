
import React, { useEffect, useState } from 'react'
import gallery11 from "../img/gallery11.png"



const CoffeeAnimation = () => {

    const [dots, setDots] = useState('');
  
    useEffect(() => {
        const intervalId = setInterval(() => {
        setDots(prevDots => {
            if (prevDots === '...') {
            return '';
            } else {
            return prevDots + '.';
            }
        });
        },500); // Adjust the interval time as needed

        return () => {
        clearInterval(intervalId);
        };
    }, []);

  return (
    <div className='coffeeAnimation'>
        <div className="container">
            <div className="coffee-header">
                <div className="coffee-header__buttons coffee-header__button-one"></div>
                <div className="coffee-header__buttons coffee-header__button-two"></div>
                <div className="coffee-header__display"></div>
                <div className="coffee-header__details"></div>
            </div>
            <div className="coffee-medium">
                <div className="coffe-medium__exit"></div>
                <div className="coffee-medium__arm"></div>
                <div className="coffee-medium__liquid"></div>
                <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
                <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
                <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
                <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
                <div className="coffee-medium__cup"></div>
            </div>
            <div className="coffee-footer"></div>
        </div>
        <div className='loader'>
            <p>Brewing your coffee{dots}</p>
        </div>
    </div>
  )
}

export default CoffeeAnimation