import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`floating-button p-3 text-white rounded ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <IoIosArrowUp className='text-3xl'/>
      <style jsx>{`
        .floating-button {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background-color: #61CE70;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .floating-button.visible {
          opacity: 1;
        }
        
        .floating-button i {
          font-size: 20px;
        }
    `}</style>
    </div>
  )
}
