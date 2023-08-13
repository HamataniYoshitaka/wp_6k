import React, { useEffect } from "react";

export default function ConceptIndicator(props) {
    const indicatorStyle = () => {
        const css = `
            .indicator-frame {
                animation: indicatorAnimation 4s linear infinite;
                amimation-durat
            }
            @keyframes indicatorAnimation {
                0% {
                    opacity:0;
                }
                25% {
                    opacity:0;
                }
                26% {
                    opacity:1;
                }
                100% {
                    opacity:1;
                }
            }
            `
        return (
            <style>
                {css}
            </style>
        )
    }
    return (
        <>
        {indicatorStyle()}
            <div className={`transition-opacity duration-700 pointer-events-none ${props.currentPage===0? 'opacity-100': 'opacity-0'}`}>
                <p className="fixed bottom-20 md:bottom-28 left-[calc(50vw-56px)] w-28 text-sm text-center jost tracking-wider">SCROLL DOWN</p>
            </div>
            <ul className={`w-2 space-y-1 fixed bottom-12 md:bottom-16 left-[calc(50vw-4px)] pointer-events-none ${props.currentPage===0? 'opacity-100': 'opacity-0'}`}>
                {[1,2,3].map((i) => (
                <li key={i}>
                    <svg className={`w-1.5 md:w-2 h-1.5 md:h-2 indicator-frame `} style={{animationDelay: i===2? '1000ms': i===3? '2000ms': ''}} viewBox="0 0 24 24">
                        <polygon fill="currentColor" stroke="none" points="0,0 12,22 24,0" />
                    </svg>
                </li>
                ))}
            </ul>
        </>

    )
}