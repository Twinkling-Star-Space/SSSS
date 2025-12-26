import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import user_3 from '../../assets/user_3.png'
import user_4 from '../../assets/user_4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50){
            tx = tx-25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0){
            tx = tx+25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
         <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Sarah Williams</h3>
                                <span>Professor</span>
                            </div>   
                        </div>
                        <p>Review your own experience, and explain what the place was like and the service you received. Try to be as accurate as possible, and include both the positive and negative aspects of your visit. Be respectful: Business owners often use feedback to improve their offerings.</p> 
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Drake Mark</h3>
                                <span>Student</span>
                            </div>   
                        </div>
                        <p>Review your own experience, and explain what the place was like and the service you received. Try to be as accurate as possible, and include both the positive and negative aspects of your visit. Be respectful: Business owners often use feedback to improve their offerings.</p> 
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Roman Rence</h3>
                                <span>President</span>
                            </div>   
                        </div>
                        <p>Review your own experience, and explain what the place was like and the service you received. Try to be as accurate as possible, and include both the positive and negative aspects of your visit. Be respectful: Business owners often use feedback to improve their offerings.</p> 
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Matrix Boxy</h3>
                                <span>Lecturer</span>
                            </div>   
                        </div>
                        <p>Review your own experience, and explain what the place was like and the service you received. Try to be as accurate as possible, and include both the positive and negative aspects of your visit. Be respectful: Business owners often use feedback to improve their offerings.</p> 
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
