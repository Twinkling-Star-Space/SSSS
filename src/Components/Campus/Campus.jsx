import React from 'react'
import './Campus.css'
import gallery1 from '../../Assets/gallery1.png'
import gallery2 from '../../Assets/gallery2.png'
import gallery3 from '../../Assets/gallery3.png'
import gallery4 from '../../Assets/gallery4.png'
import arrow from '../../Assets/dark-arrow.png'

const Campus = () => {
  return (
    <div className='campus' name='campus'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <button className="btn dark-btn">See More Here<img className='arrow' src={arrow} alt="" /></button>
      
    </div>
  )
}

export default Campus
