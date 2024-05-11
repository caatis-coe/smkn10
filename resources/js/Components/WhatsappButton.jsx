import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaTimes} from 'react-icons/fa';
import BackgroundWA from '@/Assets/whatsapp.png';

export default function WhatsAppButton({phone, text}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isCloseClicked, setIsCloseClicked] = useState(false);
    const [message, setMessage] = useState('');
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsClicked(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleButtonClick = (event) => {
        event.preventDefault();
        setIsClicked(!isClicked);
        setIsCloseClicked(false);
    };

    const handleCloseButtonClick = () => {
        setIsCloseClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            setIsCloseClicked(false);
        }, 300);
    };

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendButtonClick = () => {
        const URL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        window.open(URL, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-40">
            {!isCloseClicked ? (
                <a 
                    href="#" 
                    className={`whatsapp-button relative flex items-center justify-center text-white ${isClicked ? 'bg-red-500' : 'bg-green-500'} ${isClicked ? 'hover:bg-red-600' : 'hover:bg-green-600'} p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform ${isClicked ? 'swirl-out' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleButtonClick}
                >
                    <div className={``}>
                        {isClicked ? <FaTimes className="text-4xl" onClick={handleCloseButtonClick} /> : <FaWhatsapp className="text-4xl" />}
                    </div>
                </a>
            ) : null}
            {!isClicked && !isCloseClicked && isHovered && (
                <div className="whatsapp-popup bg-slate-100 shadow-xl rounded-xl">
                    <p className="text-black">{text}</p>
                </div>
            )}
            {isClicked && !isCloseClicked && (
                <div ref={popupRef} className={`whatsapp-form rounded-lg`}>
                    <div className="main p-4 rounded-lg shadow-lg" style={{ width: '350px' }}>
                        <div className="flex items-center">
                            <input 
                                id="text"
                                type="text" 
                                placeholder="Write your message..." 
                                value={message}
                                onChange={handleInputChange}
                                className="flex-grow border-0 rounded-3xl px-4 py-2 mr-2 placeholder-gray-400 placeholder-weight-500" 
                                style={{ width: '80%' }}
                            />
                            <button 
                                onClick={handleSendButtonClick}
                                id="send"
                                className="bg-slate-400 text-white p-2 rounded-full hover:bg-slate-500 transition duration-300 ease-in-out"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_9452_6982)">
                                        <path d="M18.5703 9.99996L2.66037 17.6603L5.60665 9.99996L2.66037 2.33963L18.5703 9.99996Z" fill="white" stroke="white" strokeWidth="1.6625" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M8.24069 9.99947L3.07723 9.99992" stroke="#94a3b8" strokeWidth="1.6625" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_9452_6982">
                                            <rect width="20" height="20" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                #text:focus {
                    box-shadow: none !important;
                }

                .whatsapp-popup {
                    display: block;
                    position: absolute;
                    bottom: 13px;
                    right: 80px;
                    width: 160px;
                    padding: 8px;
                }

                .whatsapp-form {
                    position: fixed;
                    bottom: 100px;
                    right: 20px;
                    z-index: 999;
                    background-color: #f0ede7;
                }

                .whatsapp-form .main {
                    position: relative;
                    z-index: 1;

                }

                .whatsapp-form::before {
                    position: absolute;
                    content: "";
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    z-index: 0;
                    opacity: 0.035;
                    background-image: url(${BackgroundWA});
                }

                @keyframes swirl {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .swirl-out {
                    animation: swirl 0.4s linear;
                }
            
                .whatsapp-popup:hover {
                    display: block;
                }
            `}</style>
        </div>
    )
}