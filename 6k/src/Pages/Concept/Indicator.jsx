import React, { useEffect } from "react";

export default function ConceptIndicator(props) {
    return (
        <>
            <div className={`transition-opacity duration-700 pointer-events-none ${props.currentPage===0? 'opacity-100': 'opacity-0'}`}>
                <p className="fixed bottom-40 left-[calc(50vw-56px)] w-28 text-sm text-center jost tracking-wider">SCROLL DOWN</p>
            </div>
            <ul className="w-2 space-y-1 fixed bottom-20 left-[calc(50vw-4px)] pointer-events-none">
                {[1,2,3,4,5].map((i) => (
                <li key={i}>
                    <svg className={`w-2 h-2 opacity-100 transition-opacity duration-1000 ${props.currentPage>i&&'!opacity-0'}`} viewBox="0 0 24 24">
                        <polygon fill="currentColor" stroke="none" points="0,0 12,22 24,0" />
                    </svg>
                </li>
                ))}
            </ul>
        </>

    )
}