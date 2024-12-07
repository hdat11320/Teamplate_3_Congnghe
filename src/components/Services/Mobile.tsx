import { faKeyboard, faLaptopCode, faMobileScreenButton, faNoteSticky, faPhotoFilm, faPlay, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const MobileDevelopment: React.FC = () => {
    // const counterData = [
    //     { number: 330, label: 'active Clients' },
    //     { number: 850, label: 'projects done' },
    //     { number: 25, label: 'team advisors' },
    //     { number: 10, label: 'Glorious Years' },
    // ];
    
    const industriesData = [
        { title: 'Business & Finance', description: 'The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.', image: '../../images/b-image.png' },
        { title: 'Gaming & Entertainment', description: 'The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.', image: '../images/g-image.png' },
        // { title: 'Information Technology', description: 'The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.', image: '..//images/t-image.png' },
        // { title: 'Retail & Distribution', description: 'The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.', image: '..//images/r-image.png' },
    ];
    
  return (
    <div>
      <div className="page-header flex items-center">
        <div className="container mx-auto">
          <div className="inner flex items-center justify-between">
            <h1 className="page-title text-5xl font-bold">Mobile Development</h1>
            <ul className="breadcrumbs flex space-x-4">
              <li><a href="index.html" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="web-development.html" className="text-blue-600 hover:underline">IT Services</a></li>
              <li className="active">Mobile Development</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mobile-app py-16">
        <div className="container mx-auto">
          <div className="row text-center pb-12">
            <div className="col-md-12">
              <div className="ot-heading mb-10">
                <span className="text-gray-500">business benefits</span>
                <h2 className="main-heading text-4xl font-bold">Mobile Apps Benefits</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-8 ">
              <div className="icon-box-s2 s3 app-benefits-left mb-10">
                <div className="icon-main">
                  <span className="flaticon-laptop text-5xl"></span>
                  <div className="relative z-10">
                  <FontAwesomeIcon icon={faLaptopCode} className="text-5xl" />
</div>

                </div>
                <div className="content-box">
                  <h5 className="text-xl font-semibold">Software as a Service</h5>
                  <p>51% of smartphone users have discovered a new company or product.</p>
                </div>
              </div>
              <div className="icon-box-s2 s3 app-benefits-left mb-10 pr-12">
                <div className="icon-main">
                  <span className="flaticon-seo-and-web text-5xl"></span>
                  <div className="relative z-10">
                  <FontAwesomeIcon icon={faMobileScreenButton}  className="text-5xl"  />
</div>
                </div>
                <div className="content-box">
                  <h5 className="text-xl font-semibold">Internet of Things</h5>
                  <p>Move your SaaS products to mobile, Companies with a professional mobile.</p>
                </div>
              </div>
              <div className="icon-box-s2 s3 app-benefits-left">
                <div className="icon-main">
                  <span className="flaticon-process text-5xl"></span>
                  <div className="relative z-10">
                  <FontAwesomeIcon icon={faKeyboard}  className="text-5xl"  />
</div>
                </div>
                <div className="content-box">
                  <h5 className="text-xl font-semibold">Gambling &amp; Betting</h5>
                  <p>Develop a custom mobile app to thrive in a mobile market worth over $100.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 mb-8 flex justify-center ">
              <div className="app-benefits-img ">
                <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/engitech/images/app-watch-1.jpg" alt="App Watch" className=" rounded-lg" />
              </div>
            </div>

            <div className="w-full lg:w-1/3 mb-8">
              <div className="icon-box-s2 s1 app-benefits-right mb-10">
                <div className="icon-main">
                  <span className="flaticon-data-1 text-5xl"></span>
                  <div className="relative z-10">

                  <FontAwesomeIcon icon={faPhotoFilm} className="text-5xl" />
                  </div>
                </div>
                <div className="content-box">
                  <h5 className="text-xl font-semibold">Social Media</h5>
                  <p>80% of time users spend in social media from their mobile devices.</p>
                </div>
              </div>
              <div className="icon-box-s2 s1 app-benefits-right mb-15  pl-12">
                <div className="icon-main">
                  <span className="flaticon-code-2 text-5xl"></span>
                  <div className="relative z-10">

                  <FontAwesomeIcon icon={faWindowRestore} className="text-5xl " />
                  </div>
                </div>
                <div className="content-box">
                  <h5 className="text-xl font-semibold">Business Management</h5>
                  <p>65% of sales representatives have achieved their quotas by adopting.</p>
                </div>
              </div>
              <div className="icon-box-s2 s1 app-benefits-right pt-5">
                <div className="icon-main">
                  <span className="flaticon-report text-5xl"></span>
                  <div className="relative z-10">

                  <FontAwesomeIcon icon={faNoteSticky}  className="text-5xl"/>
                  </div>
                </div>
                <div className="content-box">
                  <h5 className="text-xl font-semibold">Trading Systems</h5>
                  <p>We provide top-tier mobile app development services for brokers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-v5 py-16  bg-gray-100">
        <div className="container mx-auto">
          <div className="flex ">
            <div className="col-xl-3 w-full h-32  col-lg-6 no-padding w-50">
              <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/engitech/images/fun-fact1.jpg" alt="Fun Fact 1" className="w-full  object-cover" />
            </div>
            <div className="col-xl-3 col-lg-6 no-padding align-self-center">
              <div className="ot-counter2 text-center">
                <div className="s-num text-4xl font-bold">
                  <span className="num" data-to="15" data-time="2000">15</span><span>+</span>
                </div>
                <h6 className="text-lg font-semibold">Countries Worldwide</h6>
                <p>To succeed, every software solution must be deeply integrated into the existing tech environment...</p>
                <a href="about-us.html" className="btn-details text-blue-600 hover:underline">LEARN MORE</a>
              </div>
            </div>
            <div className="col-xl-3 w-full col-lg-6 no-padding">
              <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/engitech/images/fun-fact2.jpg" alt="Fun Fact 2" className="w-full object-cover" />
            </div>
            <div className="col-xl-3 col-lg-6 no-padding align-self-center">
              <div className="ot-counter2 text-center">
                <div className="s-num text-4xl font-bold">
                  <span className="num" data-to="23" data-time="2000">23</span><span>k</span>
                </div>
                <h6 className="text-lg font-semibold">Happy Customers</h6>
                <p>To succeed, every software solution must be deeply integrated into the existing tech environment...</p>
                <a href="about-us.html" className="btn-details text-blue-600 hover:underline">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative app-offer">
            <div className="absolute inset-0 opacity-50 overlay-image"></div>
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                        <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/engitech/images/apple-w.png" alt="Apple" />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="right-about-v4">
                            <div className="ot-heading">
                                <span className="text-gray-500"> about company</span>
                                <h2 className="text-4xl font-bold mb-4">Your Partner for <br />Software Innovation</h2>
                            </div>
                            <div className="mb-5"></div>
                            <p>Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
                            <p className="text-dark font-bold"><em>We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.</em></p>
                            <div className="video-popup style-2">
                                <div className="btn-inner">
                                    <a className="btn-play" href="https://www.youtube.com/watch?v=lfDZJqSrIuk">
                                    <FontAwesomeIcon icon={faPlay} />
                                        <span className="circle-1"></span>
                                        <span className="circle-2"></span>
                                    </a>
                                </div>
                                <span>video showcase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="app-projects py-16">
    <div className="container mx-auto">
        <div className="flex flex-wrap mb-8">
            <div className="w-full md:w-5/12">
                <div className="ot-heading mb-0">
                    <span className="text-gray-500"> latest case studies</span>
                    <h2 className="text-4xl font-bold">Introduce Our Projects</h2>
                </div>
            </div>
            <div className="w-full md:w-7/12 self-end">
                <p className="mb-0">Software development outsourcing is just a tool to achieve business goals. But there is no way to get worthwhile results without cooperation and trust between a client company.</p>
            </div>
        </div>
    </div>

    <div className="container-fluid ">
        
    
        <div className="owl-carousel owl-theme project-slider">
            <div className="owl-stage-outer">
                <div className="owl-stage flex ">
                    <div className="owl-item">
                        <div className="project-item projects-style-2">
                            <div className="projects-box rounded-lg shadow-lg overflow-hidden">
                                <div className="projects-thumbnail">
                                    <a href="portfolio-details-1.html">
                                        <img src="../images/projects/project7-720x520.jpg" alt="Project 1" className="w-full h-auto" />
                                        <span className="overlay"></span>
                                    </a>
                                </div>
                                <div className="portfolio-info p-4">
                                    <div className="portfolio-info-inner">
                                        <h5><a href="portfolio-details-1.html">Basics Project</a></h5>
                                        <p className="portfolio-cates">
                                            <a href="#">Design</a><span>/</span>
                                            <a href="#">Development</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="owl-item">
                        <div className="project-item projects-style-2">
                            <div className="projects-box rounded-lg shadow-lg overflow-hidden">
                                <div className="projects-thumbnail">
                                    <a href="portfolio-details-2.html">
                                        <img src="../images/projects/project2-720x520.jpg" alt="Project 2" className="w-full h-auto" />
                                        <span className="overlay"></span>
                                    </a>
                                </div>
                                <div className="portfolio-info p-4">
                                    <div className="portfolio-info-inner">
                                        <h5><a href="portfolio-details-2.html">App for Virtual Reality</a></h5>
                                        <p className="portfolio-cates">
                                            <a href="#">Technology</a><span>/</span>
                                            <a href="#">Innovation</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="owl-item">
                        <div className="project-item projects-style-2">
                            <div className="projects-box rounded-lg shadow-lg overflow-hidden">
                                <div className="projects-thumbnail">
                                    <a href="portfolio-details-3.html">
                                        <img src="../images/projects/project3-720x520.jpg" alt="Project 3" className="w-full h-auto" />
                                        <span className="overlay"></span>
                                    </a>
                                </div>
                                <div className="portfolio-info p-4">
                                    <div className="portfolio-info-inner">
                                        <h5><a href="portfolio-details-3.html">Social Media App</a></h5>
                                        <p className="portfolio-cates">
                                            <a href="#">Design</a><span>/</span>
                                            <a href="#">Social</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="owl-item">
                        <div className="project-item projects-style-2">
                            <div className="projects-box rounded-lg shadow-lg overflow-hidden">
                                <div className="projects-thumbnail">
                                    <a href="portfolio-details-4.html">
                                        <img src="../images/projects/project4-720x520.jpg" alt="Project 4" className="w-full h-auto" />
                                        <span className="overlay"></span>
                                    </a>
                                </div>
                                <div className="portfolio-info p-4">
                                    <div className="portfolio-info-inner">
                                        <h5><a href="portfolio-details-4.html">eCommerce Website</a></h5>
                                        <p className="portfolio-cates">
                                            <a href="#">Development</a><span>/</span>
                                            <a href="#">Commerce</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>  
</section>
<section className="app-industris py-16">
    <div className="container mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="s-counter4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-1/2 text-center mb-4">
                            <div className="ot-counter text-white">
                                <div>
                                    <span className="num" data-to="330" data-time="2000">330</span>
                                    <span>+</span>
                                </div>
                                <p className="text-white uppercase ">active Clients</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-1/2 text-center mb-4">
                            <div className="ot-counter text-white">
                                <div>
                                    <span className="num" data-to="850" data-time="2000">850</span>
                                    <span>+</span>
                                </div>
                                <p className="text-white uppercase ">projects done</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-1/2 text-center mb-4">
                            <div className="ot-counter text-white">
                                <div>
                                    <span className="num" data-to="25" data-time="2000">25</span>
                                    <span>+</span>
                                </div>
                                <p className="text-white uppercase ">team advisors</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-1/2 text-center">
                            <div className="ot-counter text-white">
                                <div>
                                    <span className="num" data-to="10" data-time="2000">10</span>
                                    <span>+</span>
                                </div>
                                <p className="text-white uppercase ">Glorious Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-16 pb-30"></div>
        

        <div className="text-center pt-20 mb-8">
            <div className="ot-heading">
                <span className="text-gray-500"> BUSINESS INDUSTRIES</span>
                <h2 className="main-heading text-4xl ">Business Industries <br />What We Serve</h2>
            </div>
        </div>

        <div className="container-fluid">
    <div className="ot-industries w-full">
        <div className="owl-carousel flex flex-wrap owl-theme industries-inner text-white ot-industries-slider">
            {industriesData.map((industry, index) => (
                <div key={index} className="indus-item w-full md:w-1/2 p-4"> {/* Đặt chiều rộng cho mỗi box */}
                    <div className="item-inner relative">
                        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
                        <div className="i-image mb-4">
                            <img src={industry.image} alt="" className="w-full h-auto rounded" />
                        </div>
                        <div className="info text-center">
                            <h6 className="text-lg font-semibold text-white">{industry.title}</h6>
                            <div className="itext text-gray-500">
                                {industry.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
    </div>
</section>

    </div>
  );
};

export default MobileDevelopment;
