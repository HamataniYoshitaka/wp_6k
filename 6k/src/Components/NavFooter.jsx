import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavFooter(props) {
    const navigate = useNavigate()
    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="px-8 relative">
            <div className="grid grid-cols-3 gap-2">
                <button onClick={()=>navigate(-1)} className="flex justify-center items-center bg-white border-2 border-black text-center rounded-full py-1 text-xs jost">
                    <svg className="w-2 h-2 mr-2" viewBox="0 0 4.37 5.24">
                        <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                    </svg>
                    BACK
                </button>
                <Link to="/" className="flex justify-center items-center bg-white border-2 border-black text-center rounded-full py-1 text-xs jost">
                    <svg className="w-2 h-2" viewBox="0 0 4.37 5.24">
                        <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                    </svg>
                    <svg className="w-2 h-2 mr-1.5" viewBox="0 0 4.37 5.24">
                        <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                    </svg>
                    SITE TOP
                </Link>
                <button onClick={()=>returnTop()} className="flex justify-center items-center bg-white border-2 border-black text-center rounded-full py-1 text-xs jost">
                    <svg className="w-2 h-2 mr-2" viewBox="0 0 5.24 4.37">
                        <path fill="currentColor" d="M2.62,0l2.62,4.37H0L2.62,0Z"/>
                    </svg>
                    PAGE TOP
                </button>
            </div>
        </div>
    )
}