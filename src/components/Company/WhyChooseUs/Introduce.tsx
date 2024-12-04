'use client'
import React, { useState } from 'react';
import { useEffect } from 'react';
const Introduce: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Quản lý màn hình mobile

    const totalImages = 5;
  
    // Xử lý thay đổi kích thước màn hình
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640); // Kiểm tra nếu màn hình nhỏ hơn 640px
      };
      
      window.addEventListener("resize", handleResize);
      handleResize(); // Kiểm tra lần đầu khi load trang
      
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const handleDotClick = (index: number) => {
      setActiveIndex(index);
    };
    return (
        <div className="relative footer-v2">
            <h5 className="text-purple-700 text-sm  font-semibold mb-4 mx-auto container"> // LASTEST CASE STUDIES</h5>
            {/* Title Section */}
            <div className="container flex justify-between items-center mb-4 py-6 mx-auto">
                <div>
                    <h1 className="text-4xl font-bold text-white">Introduce Our Projects</h1>
                </div>
                <div>
                    <span className="mt-2 w-50 text-gray-600">We’ve excelled in a wide range of industries</span>
                    <p className="mt-2 w-50 text-gray-600">bringing valuable insights to our customers.</p>
                </div>
                <a href="#" className="text-blue-500 hover:underline">
                    <span>→</span> VIEW ALL PROJECTS
                </a>
            </div>

            {/* Image Scroll Section */}
            <div className="relative grid-cols-1 md:grid-cols-4">
            <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(activeIndex % totalImages) * (isMobile ? 100 : 100 / 4)}%)`, // Điều chỉnh transform cho mobile và desktop
        }}
      >
                    {/* Hình ảnh 1 */}
                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2 ">
                        <img
                            src="/images/projects/project8-720x520.jpg"
                            alt="Basic Project"
                            className="w-full h-full object-cover hover:opacity-2 transition-opacity duration-300"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">Basic Project</h3>
                            <p className="text-sm text-white">DESIGN / DEVELOPMENT</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4  bg-gray-400 hover:bg-blue-500 transition-colors duration-300  rounded-br-none rounded-bl-full flex items-center justify-center ">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>

                    </div>

                    {/* Hình ảnh 2 */}
                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project7-720x520.jpg"
                            alt="Social Media App"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">Social Media App</h3>
                            <p className="text-sm text-white">DESIGN / TECHNOLOGY</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>

                    {/* Hình ảnh 3 */}
                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project-single.jpg"
                            alt="App for Virtual Reality"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">App for Virtual Reality</h3>
                            <p className="text-sm text-white">DESIGN / IDEAS</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>

                    {/* Hình ảnh 4 */}
                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project-gallery-4.jpg"
                            alt="E-Commerce Platform"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">E-Commerce Platform</h3>
                            <p className="text-sm text-white">DESIGN / E-COMMERCE</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>

                    {/* Hình ảnh 5 */}
                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project5-720x520.jpg"
                            alt="AI Assistant"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">AI Assistant</h3>
                            <p className="text-sm text-white">DESIGN / INNOVATION</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>

                    {/* Lặp lại 5 hình ảnh để tạo hiệu ứng trượt */}
                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project8-720x520.jpg"
                            alt="Basic Project"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">Basic Project</h3>
                            <p className="text-sm text-white">DESIGN / DEVELOPMENT</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project7-720x520.jpg"
                            alt="Social Media App"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">Social Media App</h3>
                            <p className="text-sm text-white">DESIGN / TECHNOLOGY</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project-single.jpg"
                            alt="App for Virtual Reality"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">App for Virtual Reality</h3>
                            <p className="text-sm text-white">DESIGN / IDEAS</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project-gallery-4.jpg"
                            alt="E-Commerce Platform"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">E-Commerce Platform</h3>
                            <p className="text-sm text-white">DESIGN / E-COMMERCE</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/4 flex-shrink-0 mx-2">
                        <img
                            src="/images/projects/project5-720x520.jpg"
                            alt="AI Assistant"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#262051]  text-white p-2">
                            <h3 className="text-lg font-bold text-white">AI Assistant</h3>
                            <p className="text-sm text-white">DESIGN / INNOVATION</p>
                            <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-gray-400 hover:bg-blue-500 transition-colors duration-300 rounded-br-none rounded-bl-full flex items-center justify-center">
                                <a href="#" className="text-white left-10 bottom-10 text-3xl">→</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dots Section */}
            <div className="flex justify-center space-x-2 mt-20">
                {Array.from({ length: window.innerWidth >= 768 ? 3 : 5 }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-3 h-3 rounded-full ${activeIndex === idx ? 'bg-gray-400 hover:bg-blue-500 transition-colors duration-300' : 'bg-gray-300'}`}
                    />
                ))}
            </div>

        </div>
    );
};

export default Introduce;
