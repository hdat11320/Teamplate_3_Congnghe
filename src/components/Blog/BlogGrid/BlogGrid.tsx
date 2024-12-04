import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default  function BlogGrid(){
    return(
        <>
        <div id="content" className="site-content">
        <div className="page-header flex items-center justify-center py-8 bg-gray-100">
                <div className="container mx-auto px-2">
                    <div className="inner flex items-center justify-between">
                        <h1 className="page-title text-5xl font-bold">Blog Grid</h1>
                        <ul id="breadcrumbs" className="breadcrumbs flex space-x-2">
                            <li><a href="index.html" className="text-blue-500 hover:underline">Home</a></li>
                            <li className="text-gray-500">Blog Grid</li>
                        </ul>    
                    </div>
                </div>
            </div>
            
        <div className="entry-content">
            <div className="container mx-auto px-4">
                <div className="blog-grid pgrid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <article className="post-box blog-item bg-white shadow-md rounded-md overflow-hidden">
                                <div className="post-inner">
                                    <div className="entry-media">
                                        <div className="post-cat">
                                            <span className="posted-in">
                                                <a href="#" rel="category tag">Development</a>
                                            </span>
                                        </div>
                                        <a href="post.html">
                                            <img src="/images/blog1-601x520.jpg" alt="" className="w-full h-auto"/>
                                        </a>
                                    </div>
                                    <div className="inner-post p-4">
                                        <div className="entry-header">
                                            <div className="entry-meta text-gray-500">
                                                <span className="posted-on">_ <a href="#">November 21, 2019</a></span>
                                                <span className="byline">_ <a className="url fn n" href="#">Tom Black</a></span>
                                                <span className="comment-num">_ <a href="#">3 Comments</a></span>
                                            </div>
                                            <h3 className="entry-title text-lg font-semibold mt-2">
                                                <a href="post.html">How Web Apps Can Benefit Online Stores?</a>
                                            </h3>
                                        </div>
                                        <div className="btn-readmore mt-4">
                                            <a href="post.html" className="text-blue-500 hover:underline">
                                                <FontAwesomeIcon icon={faArrowRight} /> LEARN MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        
                      
                        
                        <div>
                            <article className="post-box blog-item bg-white shadow-md rounded-md overflow-hidden">
                                <div className="post-inner">
                                    <div className="entry-media">
                                        <div className="post-cat">
                                            <span className="posted-in">
                                                <a href="#" rel="category tag">Development</a>
                                            </span>
                                        </div>
                                        <a href="post.html">
                                            <img src="/images/blog/grid2.jpg" alt="" className="w-full h-auto"/>
                                        </a>
                                    </div>
                                    <div className="inner-post p-4">
                                        <div className="entry-header">
                                            <div className="entry-meta text-gray-500">
                                                <span className="posted-on">_ <a href="#">November 21, 2019</a></span>
                                                <span className="byline">_ <a className="url fn n" href="#">Tom Black</a></span>
                                                <span className="comment-num">_ <a href="#">0 Comments</a></span>
                                            </div>
                                            <h3 className="entry-title text-lg font-semibold mt-2">
                                                <a href="post.html">Plan Your Project with Your Software</a>
                                            </h3>
                                        </div>
                                        <div className="btn-readmore mt-4">
                                            <a href="post.html" className="text-blue-500 hover:underline">
                                                <FontAwesomeIcon icon={faArrowRight} /> LEARN MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
        
                       
                        <div>
                            <article className="post-box blog-item bg-white shadow-md rounded-md overflow-hidden">
                                <div className="post-inner">
                                    <div className="entry-media">
                                        <div className="post-cat">
                                            <span className="posted-in">
                                                <a href="#" rel="category tag">Development</a>
                                            </span>
                                        </div>
                                        <a href="post.html">
                                            <img src="/images/blog/grid3.jpg" alt="" className="w-full h-auto"/>
                                        </a>
                                    </div>
                                    <div className="inner-post p-4">
                                        <div className="entry-header">
                                            <div className="entry-meta text-gray-500">
                                                <span className="posted-on">_ <a href="#">September 24, 2019</a></span>
                                                <span className="byline">_ <a className="url fn n" href="#">Tom Black</a></span>
                                                <span className="comment-num">_ <a href="#">3 Comments</a></span>
                                            </div>
                                            <h3 className="entry-title text-lg font-semibold mt-2">
                                                <a href="post.html">Does Magento Shared Hosting Suit You?</a>
                                            </h3>
                                        </div>
                                        <div className="btn-readmore mt-4">
                                            <a href="post.html" className="text-blue-500 hover:underline">
                                                <FontAwesomeIcon icon={faArrowRight} /> LEARN MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="post-box blog-item bg-white shadow-md rounded-md overflow-hidden">
                                <div className="post-inner">
                                    <div className="entry-media">
                                        <div className="post-cat">
                                            <span className="posted-in">
                                                <a href="#" rel="category tag">Development</a>
                                            </span>
                                        </div>
                                        <a href="post.html">
                                            <img src="/images/blog/grid3.jpg" alt="" className="w-full h-auto"/>
                                        </a>
                                    </div>
                                    <div className="inner-post p-4">
                                        <div className="entry-header">
                                            <div className="entry-meta text-gray-500">
                                                <span className="posted-on">_ <a href="#">September 24, 2019</a></span>
                                                <span className="byline">_ <a className="url fn n" href="#">Tom Black</a></span>
                                                <span className="comment-num">_ <a href="#">3 Comments</a></span>
                                            </div>
                                            <h3 className="entry-title text-lg font-semibold mt-2">
                                                <a href="post.html">Does Magento Shared Hosting Suit You?</a>
                                            </h3>
                                        </div>
                                        <div className="btn-readmore mt-4">
                                            <a href="post.html" className="text-blue-500 hover:underline">
                                                <FontAwesomeIcon icon={faArrowRight} /> LEARN MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="post-box blog-item bg-white shadow-md rounded-md overflow-hidden">
                                <div className="post-inner">
                                    <div className="entry-media">
                                        <div className="post-cat">
                                            <span className="posted-in">
                                                <a href="#" rel="category tag">Development</a>
                                            </span>
                                        </div>
                                        <a href="post.html">
                                            <img src="/images/blog/grid3.jpg" alt="" className="w-full h-auto"/>
                                        </a>
                                    </div>
                                    <div className="inner-post p-4">
                                        <div className="entry-header">
                                            <div className="entry-meta text-gray-500">
                                                <span className="posted-on">_ <a href="#">September 24, 2019</a></span>
                                                <span className="byline">_ <a className="url fn n" href="#">Tom Black</a></span>
                                                <span className="comment-num">_ <a href="#">3 Comments</a></span>
                                            </div>
                                            <h3 className="entry-title text-lg font-semibold mt-2">
                                                <a href="post.html">Does Magento Shared Hosting Suit You?</a>
                                            </h3>
                                        </div>
                                        <div className="btn-readmore mt-4">
                                            <a href="post.html" className="text-blue-500 hover:underline">
                                                <FontAwesomeIcon icon={faArrowRight} /> LEARN MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="post-box blog-item bg-white shadow-md rounded-md overflow-hidden">
                                <div className="post-inner">
                                    <div className="entry-media">
                                        <div className="post-cat">
                                            <span className="posted-in">
                                                <a href="#" rel="category tag">Development</a>
                                            </span>
                                        </div>
                                        <a href="post.html">
                                            <img src="/images/blog/grid3.jpg" alt="" className="w-full h-auto"/>
                                        </a>
                                    </div>
                                    <div className="inner-post p-4">
                                        <div className="entry-header">
                                            <div className="entry-meta text-gray-500">
                                                <span className="posted-on">_ <a href="#">September 24, 2019</a></span>
                                                <span className="byline">_ <a className="url fn n" href="#">Tom Black</a></span>
                                                <span className="comment-num">_ <a href="#">3 Comments</a></span>
                                            </div>
                                            <h3 className="entry-title text-lg font-semibold mt-2">
                                                <a href="post.html">Does Magento Shared Hosting Suit You?</a>
                                            </h3>
                                        </div>
                                        <div className="btn-readmore mt-4">
                                            <a href="post.html" className="text-blue-500 hover:underline">
                                                <FontAwesomeIcon icon={faArrowRight} /> LEARN MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        
                      
                        
                    </div>
                </div>
                <div className="ot-button text-center mt-6">
                    <a href="#" className="octf-btn octf-btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Load More</a>
                </div>
            </div>
        </div>
        </div>
        </>

    );
}