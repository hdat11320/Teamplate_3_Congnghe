// components/WhatWeDo.tsx
import React from 'react';


const Client = () => {
  return (
    <section className="client-i7 pt-0">
    <div className="container mx-auto px-4 ">
      <div className="flex flex-wrap justify-center">
        <div className="partners flex flex-wrap justify-center">
          <div className="partners-slide mx-4">
            <a href="#" className="client-logo">
              <figure className="partners-slide-inner">
                <img className="partners-slide-image w-32 h-32 object-contain" src="../images/client-logos/client1-removebg-preview (1).png" alt=""/>
              </figure>
            </a>
          </div>
          <div className="partners-slide mx-4">
            <a href="#" className="client-logo">
              <figure className="partners-slide-inner">
                <img className="partners-slide-image w-32 h-32 object-contain" src="../images/client-logos/client2.svg" alt=""/>
              </figure>
            </a>
          </div>
          <div className="partners-slide mx-4">
            <a href="#" className="client-logo">
              <figure className="partners-slide-inner">
                <img className="partners-slide-image w-32 h-32 object-contain" src="../images/client-logos/client3.svg" alt=""/>
              </figure>
            </a>
          </div>
          <div className="partners-slide mx-4">
            <a href="#" className="client-logo">
              <figure className="partners-slide-inner">
                <img className="partners-slide-image w-32 h-32 object-contain" src="../images/client-logos/client4.png" alt=""/>
              </figure>
            </a>
          </div>
          <div className="partners-slide mx-4">
            <a href="#" className="client-logo">
              <figure className="partners-slide-inner">
                <img className="partners-slide-image w-32 h-32 object-contain" src="../images/client-logos/client5.svg" alt=""/>
              </figure>
            </a>
          </div>
          <div className="partners-slide mx-4">
            <a href="#" className="client-logo">
              <figure className="partners-slide-inner">
                <img className="partners-slide-image w-32 h-32 object-contain" src="../images/client-logos/client6.svg" alt=""/>
              </figure>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="my-24"></div> */}
    </div>
  </section>
  );
};

export default Client;
