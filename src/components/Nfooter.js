import React from 'react'
import "./newfooter.css"
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import { IoLogoInstagram } from "react-icons/io"
import { AiOutlineFacebook } from "react-icons/ai"

const Nfooter = () => {
    return (
        <div className='footer'>
            <div className='p1'>
                <div className='child1'>
                    <h5>JOIN US</h5>
                    <h1>Take your business to <br /> the new level.</h1>
                    <p>Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p>
                </div>
                <div className='child2'>
                    <div className='childern1'>
                        <input type="text" placeholder='Your name' />
                        <div className='line' ></div>
                        <input type="email" placeholder='Your email' />
                        <button>join</button>
                    </div>
                </div>
            </div>

            <div className='p2'>
                <div className='p2child'>
                    <div><img src={img1} alt="" srcset="" /></div>
                    <div><img src={img2} alt="" srcset="" /></div>
                    <div><img src={img3} alt="" srcset="" /></div>
                    <div><img src={img4} alt="" srcset="" /></div>
                </div>
            </div>


            <div className='p3'>
                <div>
                    <h1>Desgy Solutions</h1>
                    <a href="/" ><IoLogoInstagram/></a>
                    <a href="/" ><AiOutlineFacebook/></a>
                    <a href="/" ><IoLogoInstagram/></a>
                </div>
                <div>
                    <h2>Menu</h2>
                    <h3>Home</h3>
                    <h3>Popular</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
                <div>
                    <h2>category</h2>
                    <h3>Design</h3>
                    <h3>mockup</h3>
                    <h3>View all</h3>
                    <h3>Log in</h3>
                </div>
                <div>
                    <h2>Pages</h2>
                    <h3>404</h3>
                    <h3>instruction</h3>
                    <h3>Licence</h3>
                </div>
                <div>
                    <h2>Other</h2>
                    <h3>styleguide</h3>
                    <h3>changelog</h3>
                </div>
            </div>
            <div className='p4'>

            </div>
        </div>
    )
}

export default Nfooter
