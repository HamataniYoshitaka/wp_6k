import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {

    return (
        <>
        <nav className={`fixed bg-black z-40 top-0 left-0 w-screen h-screen text-white flex justify-center items-center transition-opacity duration-300 ${props.menuShowing? ' opacity-100': ' pointer-events-none opacity-0'}`}>
            <ul className="text-xl jost">
                <li className=" px-20 overflow-hidden">
                    <Link to="/" className={`p-2 tracking-widest block transition-transform duration-1000 delay-200  ${props.menuShowing? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`} onClick={()=>props.setMenuShowing(false)}>CREATIVE</Link>
                </li>
                <li className=" px-20 overflow-hidden">
                    <Link to="/concept" className={`p-2 tracking-widest block transition-transform duration-1000 delay-300  ${props.menuShowing? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`} onClick={()=>props.setMenuShowing(false)}>CONCEPT</Link>
                </li>
                <li className=" px-20 overflow-hidden">
                    <Link to="/company" className={`p-2 tracking-widest block transition-transform duration-1000 delay-[400ms]  ${props.menuShowing? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`} onClick={()=>props.setMenuShowing(false)}>COMPANY</Link>
                </li>
                <li className=" px-20 overflow-hidden">
                    <Link to="/contact" className={`p-2 tracking-widest block transition-transform duration-1000 delay-500  ${props.menuShowing? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`} onClick={()=>props.setMenuShowing(false)}>CONTACT</Link>
                </li>
            </ul>
            {/* instagram */}
            <a href="#" target="_blank" className="absolute bottom-20 right-6">
                <svg className="w-7 h-7 " viewBox="0 0 448 512">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
            </a>
            <div className="fixed bottom-10 md:bottom-20 left-6 md:left-10 glitch-logo scale-75 md:scale-100">
                <a href="https://mazerunakiken.net" target="_blank" className="block">
                    <img src="https://mazerunakiken.net/wp2020/wp-content/themes/mazeruna/assets/images/logo-glitch/1.svg"/>
                </a>
            </div>
        </nav>
        <footer className={`fixed z-50 bottom-0 left-0 w-full h-9  ${props.menuShowing? 'bg-white text-black': 'bg-black text-white'}`}>
            <button className=" w-full h-full relative " onClick={()=>props.setMenuShowing(!props.menuShowing)}>
                <svg className={`w-7 h-auto absolute bottom-3 left-[calc(50vw-14px)] transition-all duration-300 ${props.menuShowing? 'opacity-0 scale-50': 'opacity-100 scale-100'}`} viewBox="0 0 26 10">
                    <line fill="none" stroke="currentColor" strokeWidth="1.5" x1="0" y1="1" x2="26" y2="1" />
                    <line fill="none" stroke="currentColor" strokeWidth="1.5" x1="5" y1="9" x2="21" y2="9" />
                </svg>
                <svg className={`w-8 h-auto absolute bottom-3 left-[calc(50vw-16px)] transition-all duration-300 ${!props.menuShowing? 'opacity-0 scale-50': 'opacity-100 scale-100'}`} viewBox="0 0 26 10">
                    <line fill="none" stroke="currentColor" strokeWidth="1.5" x1="0" y1="1" x2="26" y2="9" />
                    <line fill="none" stroke="currentColor" strokeWidth="1.5" x1="0" y1="9" x2="26" y2="1" />
                </svg>
            </button>
        </footer>
        </>
    )
}