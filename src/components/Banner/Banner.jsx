'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

const Banner = () => {
    const slides = [
        {
            id: 1,
            title: "Latest Tech Gadgets",
            subtitle: "Discover cutting-edge technology",
            description: "Explore our collection of the newest smartphones, laptops, and smart devices with cutting-edge features",
            buttonText: "Shop Now",
            price: "Starting from $299",
            image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
            overlay: "bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        },
        {
            id: 2,
            title: "Smart Home Solutions",
            subtitle: "Transform your living space",
            description: "Create the perfect smart home with our IoT devices, automation systems, and intelligent controls",
            buttonText: "Explore Smart Home",
            price: "Up to 40% Off",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            overlay: "bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        },
        {
            id: 3,
            title: "Gaming Paradise",
            subtitle: "Level up your gaming experience",
            description: "Premium gaming gear, high-performance consoles, and professional accessories for ultimate gaming",
            buttonText: "Game On",
            price: "New Arrivals",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            overlay: "bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        },
        {
            id: 4,
            title: "Professional Workspace",
            subtitle: "Boost your productivity",
            description: "High-performance laptops, monitors, and accessories designed for professionals and creators",
            buttonText: "Shop Professional",
            price: "Business Deals",
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
            overlay: "bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        }
    ];

    return (
        <>
            {/* Custom Styles */}
            <style jsx>{`
                .custom-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 0 4px;
                }
                
                .custom-pagination .swiper-pagination-bullet:hover {
                    background: rgba(255, 255, 255, 0.8);
                    transform: scale(1.1);
                }
                
                .custom-pagination .swiper-pagination-bullet-active {
                    background: white;
                    transform: scale(1.25);
                }
                
                .progress-bar {
                    animation: progress 5s linear infinite;
                }
                
                @keyframes progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                
                .swiper-slide {
                    overflow: hidden;
                }
                
                @media (max-width: 768px) {
                    .banner-title {
                        font-size: 2.5rem !important;
                        line-height: 1.2 !important;
                    }
                    
                    .banner-description {
                        font-size: 1rem !important;
                    }
                }
            `}</style>
            
            <div className="relative w-full h-[70vh] min-h-125 max-h-200 overflow-hidden rounded-2xl shadow-2xl">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true
                    }}
                    parallax={true}
                    speed={1000}
                    loop={true}
                    className="h-full w-full"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="relative">
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${slide.image})` }}
                                data-swiper-parallax="-23%"
                            />
                            
                            {/* Overlay */}
                            <div className={`absolute inset-0 ${slide.overlay}`} />
                            
                            {/* Content */}
                            <div className="relative h-full flex items-center justify-start px-6 md:px-16 lg:px-24">
                                <div className="max-w-2xl text-white space-y-6" data-swiper-parallax="-300">
                                    {/* Badge */}
                                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                        <span className="text-sm font-medium">{slide.price}</span>
                                    </div>
                                    
                                    {/* Subtitle */}
                                    <p 
                                        className="text-lg md:text-xl font-medium text-white/90 tracking-wide"
                                        data-swiper-parallax="-200"
                                    >
                                        {slide.subtitle}
                                    </p>
                                    
                                    {/* Title */}
                                    <h1 
                                        className="banner-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                                        data-swiper-parallax="-100"
                                    >
                                        {slide.title}
                                    </h1>
                                    
                                    {/* Description */}
                                    <p 
                                        className="banner-description text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
                                        data-swiper-parallax="-50"
                                    >
                                        {slide.description}
                                    </p>
                                    
                                    {/* CTA Button */}
                                    <div className="pt-4" data-swiper-parallax="0">
                                        <button className="group relative inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                            <span className="mr-2">{slide.buttonText}</span>
                                            <svg 
                                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-8 right-16 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group">
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group">
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Custom Pagination */}
                <div className="custom-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-1"></div>

                {/* Progress Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
                    <div className="progress-bar h-full bg-white"></div>
                </div>
            </div>
        </>
    );
};

export default Banner;