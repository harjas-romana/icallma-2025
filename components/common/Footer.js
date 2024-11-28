import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { VscWhitespace } from "react-icons/vsc";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='VIT Bhopal' caption='' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+91 123 456 7890</h3>
              <br />
              <button className='button-primary2'>Request for quote</button>
            </div>
            <ul>
              <h3>ABOUT VIT</h3>
              <li>
                <Link href='/'>About VIT Bhopal</Link>
              </li>
              <li>
                <Link href='/'>Our Faculty</Link>
              </li>
              <li>
                <Link href='/'>Research Initiatives</Link>
              </li>
              <li>
                <Link href='/'>Campus Life</Link>
              </li>
              <li>
                <Link href='/'>Contact Us</Link>
              </li>
            </ul>
            <ul>
              <h3>EVENTS</h3>
              <li>
                <Link href='/'>Upcoming Conferences</Link>
              </li>
              <li>
                <Link href='/'>Workshops</Link>
              </li>
              <li>
                <Link href='/'>Seminars</Link>
              </li>
              <li>
                <Link href='/'>Webinars</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/VITUnivBhopal/' target="_blank" rel="noopener noreferrer">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/vit.bhopal/?hl=en' target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/vit-bhopal-university/posts/?feedView=all' target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 Vellore Institute of Technology, Bhopal. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>VIT Bhopal</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}



export default Footer;