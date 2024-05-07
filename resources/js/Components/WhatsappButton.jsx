import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaTimes} from 'react-icons/fa';

export default function WhatsAppButton() {
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
        const phoneNumber = '6281396969696';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8">
            {!isCloseClicked ? (
                <a 
                    href="#" 
                    className={`relative flex items-center justify-center text-white bg-${isClicked ? 'red' : 'green'}-500 hover:bg-${isClicked ? 'red' : 'green'}-600 p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform ${isClicked ? 'swirl-out' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleButtonClick}
                >
                    <div className={`absolute text-white bg-${isClicked ? 'red' : 'green'}-500 rounded-full p-3`}>
                        {isClicked ? <FaTimes className="text-4xl" onClick={handleCloseButtonClick} /> : <FaWhatsapp className="text-4xl" />}
                    </div>
                </a>
            ) : null}
            {!isClicked && !isCloseClicked && isHovered && (
                <div className="whatsapp-popup bg-slate-100 shadow-xl rounded-xl">
                    <p className="text-black">Chat with SMKN 10</p>
                </div>
            )}
            {isClicked && !isCloseClicked && (
                <div ref={popupRef} className={`whatsapp-form`}>
                    <div className="bg-white rounded-lg p-4 shadow-lg" style={{ width: '350px' }}>
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
                                className=" bg-slate-400 text-white p-2 rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#clip0_9452_6982)"><path d="M18.5703 9.99996L2.66037 17.6603L5.60665 9.99996L2.66037 2.33963L18.5703 9.99996Z" fill="white" stroke="white" stroke-width="1.6625" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.24069 9.99947L3.07723 9.99992" stroke="#C6D7E3" stroke-width="1.6625" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_9452_6982"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                .bg-green-500 {
                    --tw-bg-opacity: 1;
                    background-color: rgb(34 197 94 / var(--tw-bg-opacity));
                }

                .bg-red-500 {
                    --tw-bg-opacity: 1;
                    background-color: rgb(239 68 68 / var(--tw-bg-opacity));
                }

                #text:focus {
                    box-shadow: none !important;
                }
                
                .whatsapp-popup {
                    display: block;
                    position: absolute;
                    bottom: 0px;
                    right: 60px;
                    width: 160px;
                    padding: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
                }

                .whatsapp-form {
                    display: block;
                    position: absolute;
                    bottom: 60px;
                    right: -10px;
                    z-index: 999;
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