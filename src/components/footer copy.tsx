import React from 'react'
// import logo from "../public/images/logo-light.svg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v1 block">
    <div className="container px-[15px] mx-auto">
      <div className="flex flex-wrap mx-[-15px]">
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/4 w-full
">
          <div className="widget-footer">
            <h5 className="text-white">Services</h5>
            <ul className="list-items">
              <li className="list-item">
                <a href="web-development.html">Web Development</a>
              </li>
              <li className="list-item">
                <a href="mobile-development.html">Mobile Development</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">On-Demand Apps</a>
              </li>
              <li className="list-item">
                <a href="our-team.html">Dedicated Team</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">iOS &amp; Android</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/4 w-full
">
          <div className="widget-footer">
            <h5 className="text-white">Learn</h5>
            <ul className="list-items">
              <li className="list-item">
                <a href="it-services.html">Social Media Platform</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">Business Management Tools</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">Gambling &amp; Betting Web Apps</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">Sports and Fitness App</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">Software as a Service (SaaS)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/4 w-full
">
          <div className="widget-footer">
            <h5 className="text-white">Company</h5>
            <ul className="list-items">
              <li className="list-item">
                <a href="about-us.html">About Company</a>
              </li>
              <li className="list-item">
                <a href="faq.html">For Customers</a>
              </li>
              <li className="list-item">
                <a href="blog.html">Blog &amp; News</a>
              </li>
              <li className="list-item">
                <a href="contact.html">Careers &amp; Reviews</a>
              </li>
              <li className="list-item">
                <a href="contact.html">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/4 w-full
">
          <div className="widget-footer">
            <h5 className="text-white">Subscribe</h5>
            <p>Follow our newsletter to stay updated about agency.</p>
            <form
              id="mc4wp-form-1"
              className="mc4wp-form mc4wp-form-1343"
              method="post"
              action="newsletter.php"
            >
              <div className="mc4wp-form-fields">
                <div className="subscribe-inner-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <button type="submit" className="subscribe-btn-icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-[65px]">
        <div className="md:w-1/2 mb-4 md:mb-0">
        <Image src="/images/logo-light.svg" alt="Engitech" width={140} height={40} />
        </div>
        <div className="md:text-right self-center">
          <p className="copyright-text">
            Copyright © 2020 Engitech by ThemeModern. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer