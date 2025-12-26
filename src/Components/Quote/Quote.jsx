import React from 'react'
import './Quote.css'
import principal_photo from '../../assets/principal_photo.png'
import quote_icon from '../../assets/quote_icon.png'

const Quote = () => {
  return (
    <div className='quote'>
        <div className="photo">
            <img src={principal_photo} alt="" />
            <h2>Niroj Dhakal</h2>
            <h3>Principal</h3>
        </div>
      <p><img src={quote_icon} alt="" /> Our school is not only a place to achieve results, but a place to grow character, curiosity, and confidence. <img className="unquote" src={quote_icon} alt="" /></p>
    </div>
  )
}

export default Quote
