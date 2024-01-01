
import React from 'react'
import gallery1 from "../img/gallery1.png"
import gallery2 from "../img/gallery2.png"
import gallery3 from "../img/gallery3.png"
import gallery4 from "../img/gallery4.png"
import gallery5 from "../img/gallery5.png"
import gallery6 from "../img/gallery6.png"
import gallery7 from "../img/gallery7.png"
import gallery8 from "../img/gallery8.png"
import gallery9 from "../img/gallery9.png"


const Gallery = () => {
  return (
    <div className='gallery' id="gallery">


      <div className="photo-div">
        <img src={gallery1}/>
        <img src={gallery2}/>
        <img src={gallery3}/>
        <img src={gallery4}/>
        <img src={gallery5}/>
        <img src={gallery6}/>
        
       

      </div>
      
    </div>
  )
}

export default Gallery