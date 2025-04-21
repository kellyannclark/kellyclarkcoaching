"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  "https://www.youtube.com/embed/62ClmfZdOyE",
  "https://www.youtube.com/embed/UjlBTK-QJ8I",
  "https://www.youtube.com/embed/e-5EXzlxq38",
  "https://www.youtube.com/embed/a6IlJLz9k8Q",
  "https://www.youtube.com/embed/qnMCqoDCOCg",
];

const ArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className="absolute left-[-30px] top-1/2 z-10 transform -translate-y-1/2 border border-gray-300 text-black p-2 rounded-full shadow"
  >
    <FaChevronLeft />
  </button>
);

const ArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className="absolute right-[-30px] top-1/2 z-10 transform -translate-y-1/2 border border-gray-300 text-black p-2 rounded-full shadow"
  >
    <FaChevronRight />
  </button>
);

const Carousel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // delay rendering of slider until mounted
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    adaptiveHeight: false,
    initialSlide: 0,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="media" className="max-w-7xl mx-auto px-4 py-8 relative">
      {isClient && (
        <Slider {...settings}>
          {videos.map((videoUrl, index) => (
            <div key={index} className="px-2">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </Slider>
      )}

      {/* 🎧 Featured Interview */}
      <div className="mt-10 rounded shadow-md p-6 flex flex-col sm:flex-row items-center gap-4">
        <img
          src="/leadingsaints.png"
          alt="Leading Saints Logo"
          className="h-12 w-auto"
        />
        <div>
          <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: "'Alike', serif" }}>
            Leading Saints: Addiction Was My Vehicle to the Savior
          </h3>
          <p className="text-gray-700 mb-3">
            An interview with Kelly Clark and Heather Warren on Leading Saints. In
            this conversation, they share their powerful journey through addiction
            and into faith, healing, and recovery.
          </p>
          <a
            href="https://leadingsaints.org/addiction-was-my-vehicle-to-the-savior-an-interview-with-kelly-clark-and-heather-warren/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black font-semibold px-5 py-2 rounded transition underline"
          >
            Listen on Leading Saints →
          </a>
        </div>
      </div>

      {/* 📺 BYUtv Segment */}
      <div className="mt-6 rounded shadow-md p-6 flex flex-col sm:flex-row items-center gap-4">
        <img src="/byutv.png" alt="BYUtv Logo" className="h-12 w-auto" />
        <div>
          <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: "'Alike', serif" }}>
            BYUtv Special Feature
          </h3>
          <p className="text-gray-700 mb-3">
            Watch Kelly Clark featured in this powerful segment on BYUtv,
            highlighting the journey of recovery and faith.
          </p>
          <a
            href="https://www.byutv.org/8022092d-52e4-4958-993b-116981f6448c?utm_source=byub&utm_medium=share&utm_campaign=share_2025&utm_content=Extra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black font-semibold px-5 py-2 rounded transition underline"
          >
            Watch on BYUtv →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
