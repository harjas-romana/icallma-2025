import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top' style={{color:"black", background:'white'}}>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+91 75 6025 4500 / 501 / 502</h3>
                  <h3>+91 75 6035 0900 / 901 / 902</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>VIT Bhopal University</h3>
                  <span>Bhopal-Indore Highway Kothrikalan, Sehore, Madhya Pradesh</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>admissions@vitbhopal.ac.in</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>sr.ad@vitbhopal.ac.in</h3>
                  <span>International Relation Office</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70' style={{
  background: 'linear-gradient(180deg, rgba(160, 216, 225, 1) 0%, #005b99 100%)',
  position: 'relative',
  overflow: 'hidden',
  height: '100vh',
  width: '100%',
}}>
              <TitleSm title='Reach out to us!' />
              <p className='desc-p'>Got questions? Fill out the form below... </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name*</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email*</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Address</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>Your Message*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary2'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
