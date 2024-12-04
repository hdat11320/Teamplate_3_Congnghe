import Link from 'next/link';
import React from 'react'

export default function Portfoliomasonry() {

return (
<>
<div id="content" className="site-content">
            <div className="page-header flex items-center justify-center py-8 bg-gray-100">
                <div className="container mx-auto px-2">
                    <div className="inner flex items-center justify-between">
                        <h1 className="page-title text-5xl ">Portfolio Massonry</h1>
                        <ul id="breadcrumbs" className="breadcrumbs flex space-x-2">
                            <li><Link href="index.html" className="text-blue-500 hover:underline">Home</Link></li>
                            <li className="text-gray-500">Portfolio Massonry</li>
                        </ul>    
                    </div>
                </div>
            </div>

        </div>
        <section className="projects-masonry py-12">
    <div className="container mx-auto">
        <div className="text-center mb-8">
            <div className="ot-heading">
                <span className="text-gray-600">// latest case studies</span>
                <h2 className="main-heading text-4xl ">Introduce Our Projects</h2>
            </div>
            <div className="my-5"></div>
            <p className="text-gray-700">Software development outsourcing is just a tool to achieve business goals. But there is no way<br/>to get worthwhile results without cooperation and trust between a client company.</p>
        </div>

        <div>
            <div className="project-filter-wrapper mb-8">
                <ul className="project_filters flex justify-center space-x-4">
                    <li><Link href="#" data-filter="*" className="selected text-blue-500">All</Link></li>
                    <li><Link href="#" data-filter=".design">Design</Link></li>
                    <li><Link href="#" data-filter=".development">Development</Link></li>
                    <li><Link href="#" data-filter=".ideas">Ideas</Link></li>
                    <li><Link href="#" data-filter=".technology">Technology</Link></li>
                </ul>
            </div>

            <div className="projects-grid-ms grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="project-item design ideas">
                    <div className="projects-box relative">
                        <div className="projects-thumbnail">
                            <Link href="portfolio-details-1.html" className="block relative">
                                <img src="images/projects/masonry/project1.jpg" alt="" className="w-full h-auto rounded transition duration-300 ease-in-out" />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <div className="text-center p-4">
                                        <h5 className="text-white text-lg font-bold">App for Virtual Reality</h5>
                                        <p className="portfolio-cates text-white text-sm">
                                            <Link href="#" className="text-white hover:underline">Design</Link>
                                            <span className="mx-1">/</span>
                                            <Link href="#" className="text-white hover:underline">Ideas</Link>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="portfolio-info p-4">
                            <div className="portfolio-info-inner"></div>
                        </div>
                    </div>
                </div>

               
                <div className="project-item technology development">
                    <div className="projects-box relative">
                        <div className="projects-thumbnail">
                            <Link href="portfolio-details-2.html" className="block relative">
                                <img src="../images/projects/masonry/project2.jpg" alt="" className="w-full h-auto rounded"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <div className="text-center p-4">
                                        <h5 className="text-white text-lg font-bold">Mobile Coin View App</h5>
                                        <p className="portfolio-cates text-white text-sm">
                                            <Link href="#" className="text-white hover:underline">Technology</Link>
                                            <span className="mx-1">/</span>
                                            <Link href="#" className="text-white hover:underline">Development</Link>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="portfolio-info p-4">
                            <div className="portfolio-info-inner"></div>
                        </div>
                    </div>
                </div>

                <div className="project-item ideas technology">
                    <div className="projects-box relative">
                        <div className="projects-thumbnail">
                            <Link href="portfolio-details-3.html" className="block relative">
                                <img src="../images/projects/masonry/project3.jpg" alt="" className="w-full h-auto rounded"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <div className="text-center p-4">
                                        <h5 className="text-white text-lg font-bold">Analysis of Security</h5>
                                        <p className="portfolio-cates text-white text-sm">
                                            <Link href="#" className="text-white hover:underline">Ideas</Link>
                                            <span className="mx-1">/</span>
                                            <Link href="#" className="text-white hover:underline">Technology</Link>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="portfolio-info p-4">
                            <div className="portfolio-info-inner"></div>
                        </div>
                    </div>
                </div>

              
                <div className="project-item design development">
                    <div className="projects-box relative">
                        <div className="projects-thumbnail">
                            <Link href="portfolio-details-4.html" className="block relative">
                                <img src="../images/projects/masonry/project4.jpg" alt="" className="w-full h-auto rounded"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <div className="text-center p-4">
                                        <h5 className="text-white text-lg font-bold">eCommerce Website</h5>
                                        <p className="portfolio-cates text-white text-sm">
                                            <Link href="#" className="text-white hover:underline">Design</Link>
                                            <span className="mx-1">/</span>
                                            <Link href="#" className="text-white hover:underline">Development</Link>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="portfolio-info p-4">
                            <div className="portfolio-info-inner"></div>
                        </div>
                    </div>
                </div>
                <div className="project-item design development">
                    <div className="projects-box relative">
                        <div className="projects-thumbnail">
                            <Link href="portfolio-details-4.html" className="block relative">
                                <img src="../images/projects/masonry/project4.jpg" alt="" className="w-full h-auto rounded"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <div className="text-center p-4">
                                        <h5 className="text-white text-lg font-bold">eCommerce Website</h5>
                                        <p className="portfolio-cates text-white text-sm">
                                            <Link href="#" className="text-white hover:underline">Design</Link>
                                            <span className="mx-1">/</span>
                                            <Link href="#" className="text-white hover:underline">Development</Link>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="portfolio-info p-4">
                            <div className="portfolio-info-inner"></div>
                        </div>
                    </div>
                </div>
                <div className="project-item design development">
                    <div className="projects-box relative">
                        <div className="projects-thumbnail">
                            <Link href="portfolio-details-4.html" className="block relative">
                                <img src="../images/projects/masonry/project4.jpg" alt="" className="w-full h-auto rounded"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <div className="text-center p-4">
                                        <h5 className="text-white text-lg font-bold">eCommerce Website</h5>
                                        <p className="portfolio-cates text-white text-sm">
                                            <Link href="#" className="text-white hover:underline">Design</Link>
                                            <span className="mx-1">/</span>
                                            <Link href="#" className="text-white hover:underline">Development</Link>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="portfolio-info p-4">
                            <div className="portfolio-info-inner"></div>
                        </div>
                    </div>
                </div>
                

               

            </div>
        </div>

        <div className="space-60"></div>
        <div className="text-center">
            <Link href="portfolio-grid.html" className="octf-btn octf-btn-primary bg-blue-500 text-white py-2 px-4 rounded">Load More</Link>
        </div>
    </div>
</section>
</>
);

};