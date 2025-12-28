import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'
import program_icon_1 from '../../assets/program_icon_1.png'
import program_icon_2 from '../../assets/program_icon_2.png'
import program_icon_3 from '../../assets/program_icon_3.png'
import arrow from '../../assets/dark-arrow.png'


const Programs = () => {
  return (
    <div className='programs' name="program">
        <div className="program">
            <img src={program_1} alt="" />
            <button><img src={arrow} alt="" /></button>
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>BLE</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <button><img src={arrow} alt="" /></button>
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>SEE</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <button><img src={arrow} alt="" /></button>
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>NEB</p>
            
            </div>    
        </div>
      
    </div>
  )
};

export default Programs;
