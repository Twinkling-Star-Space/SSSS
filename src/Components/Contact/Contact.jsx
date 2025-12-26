import React from 'react'
import './Contact.css'
import msg_icon_1 from '../../assets/msg_icon_1.png'
import msg_icon_2 from '../../assets/msg_icon_2.png'
import msg_icon_3 from '../../assets/msg_icon_3.png'
import msg_icon_4 from '../../assets/msg_icon_4.png'
import arrow from '../../assets/dark-arrow.png'

const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending........");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact' name="contact">
        <div className="contact-col">
        <h3>Send us message <img src={msg_icon_1} alt="" /></h3>
        <p>Feel free to reach out us. We are just a mail, phone and text away.</p>
        <ul>
            <li><img src={msg_icon_2} alt="" />diplalthakurbarhi1489@gmail.com</li>
            <li><img src={msg_icon_3} alt="" /> +9779804034587</li>
            <li><img src={msg_icon_4} alt="" />Tinkune-32, Kathmandu Metropolitan City</li>
        </ul>

        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />

                <label>Phone number</label>
                <input type="number" name='phone' placeholder='Enter your phone number' required />

                <label>Write your message</label>
                <textarea name="message" rows="6"  placeholder='Enter your message' id="" required/>

                <button className='btn dark-btn' type="submit">Send Message <img src={arrow} alt="" /></button>
            
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
