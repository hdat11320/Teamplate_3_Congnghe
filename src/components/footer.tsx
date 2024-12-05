import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import logo from "../public/images/logo-light.svg"

const Footer = () => {
  return (
    <footer id="site-footer" className="bg-[#211E3B] text-white py-10">
    <div className="container mx-auto pt-10">
       <div className="flex justify-center">
           <img src="../images/logo-light.png" alt="" className="mb-6"/>
       </div>
       <div className="space-y-10">
           <div className="flex flex-wrap justify-center">
               <div className="w-full md:w-1/3 p-4">
                   <div className="bg-[#211E3B] p-6 text-center">
                       <div className="text-3xl mb-4"><FontAwesomeIcon  icon={faGlobe} style={{color: "#43baff",}} /></div>
                       <p className="text-lg">411 University St, Seattle, USA</p>
                       <h6 className="font-normal mt-2 text-sm text-gray-400">Our Address</h6>
                   </div>
               </div>
               <div className="w-full md:w-1/3 p-4">
                   <div className="bg-[#211E3B] p-6 text-center">
                       <div className="text-3xl mb-4"><FontAwesomeIcon icon={faEnvelope} style={{color: "#43baff",}} /></div>
                       <p className="text-lg">contact@mail.net</p>
                       <h6 className="font-normal mt-2  text-sm text-gray-400">Our Mailbox</h6>
                   </div>
               </div>
               <div className="w-full md:w-1/3 p-4">
                   <div className="bg-[#211E3B] p-6 text-center">
                       <div className="text-3xl mb-4"><FontAwesomeIcon icon={faPhone} style={{color: "#43baff",}} /></div>
                       <p className="text-lg">+1 -800-456-478-23</p>
                       <h6 className="font-normal mt-2  text-sm text-gray-400">Our Phone</h6>
                   </div>
               </div>
           </div>
           <div className="space-y-6">
               <div className="flex justify-center">
                   <div className="footer-menu">
                       <ul className="flex space-x-13">
                           <li><a href="index.html" className="hover:underline">Home</a></li>
                           <li><a href="services.html" className="hover:underline">Services</a></li>
                           <li><a href="portfolio.html" className="hover:underline">Portfolio</a></li>
                           <li><a href="blog.html" className="hover:underline">Blog</a></li>
                           <li><a href="contact.html" className="hover:underline">Contacts</a></li>
                       </ul>
                   </div>
               </div>
               <p className="text-center text-normal text-gray-400 text-base">Copyright © 2020 Engitech by ThemeModern. All Rights Reserved.</p>
               <div className="flex justify-center space-x-4 mt-4">
                   <a className="text-blue-400 hover:text-blue-300" href="twitter.html"><FontAwesomeIcon icon={faTwitter} /></a>
                   <a className="text-blue-400 hover:text-blue-300" href="facebook.html"><FontAwesomeIcon icon={faFacebook} /></a>
                   <a className="text-blue-400 hover:text-blue-300" href="linkedin.html"><FontAwesomeIcon icon={faLinkedin} /></a>
                   <a className="text-blue-400 hover:text-blue-300" href="instagram.html"><FontAwesomeIcon icon={faInstagram} /></a>
               </div>
           </div>
       </div>
   </div>
</footer>
  )
}

export default Footer