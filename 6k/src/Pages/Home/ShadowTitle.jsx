import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const duration = 25
let timer = null    // #shadow-titleのsceneを更新するためのタイマー

export default function ShadowTitle(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    const [shadowTitleWidth, setShadowTitleWidth] = useState(0)

    useEffect(() => {
        // #shadow-titleのwidthを更新
        if (props.shadowTitleScene === 0){
            clearTimeout(timer)
            setTimeout(() => {
                props.setShadowTitleScene(1)
            }, 600)
        }
        const shadowTitle = document.getElementById('shadow-title')
        if (shadowTitle && props.shadowTitleScene === 1){
            setShadowTitleWidth(shadowTitle.offsetWidth)
            timer = setTimeout(() => {
                props.setShadowTitleScene(2)
            }, duration*1000-1000)
        }
    }, [props.shadowTitleScene])

    const shadowTitleStyle = (width) => {
        const css = `
            .shadow-title-frame {
                animation: shadowTitleAnimation ${duration}s linear infinite;
            }
            @keyframes shadowTitleAnimation {
                0% {
                    transform:translateX(0);
                }
                100% {
                    transform:translateX(-${(width+48)*2}px);
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
            {shadowTitleStyle(shadowTitleWidth)}
            <div className={`fixed top-0 left-0 w-screen overflow-hidden pointer-events-none transition-opacity duration-500 ${props.shadowTitleScene===2? 'z-0': 'z-10'} ${props.shadowTitleScene<=0? 'opacity-0': 'opacity-100'}`} style={{height: windowHeight}}>
                <div className={`relative ${props.shadowTitleScene!==0 && 'shadow-title-frame'}`}>
                    <p className={`z-10 absolute whitespace-nowrap top-[calc(50vh-200px)] text-transparent text-blur text-[180px] md:text-[260px] tracking-widest cormorant opacity-40`} style={{left:window.innerWidth/2+100-(shadowTitleWidth+48)*2}}>
                        <span className="mr-12">{props.post && props.post.shadow_text}</span><span className="mr-12">{props.post && props.post.shadow_text}</span>
                    </p>                            
                    <h2 id="shadow-title" className=" z-10 left-[calc(50vw+100px)] absolute whitespace-nowrap top-[calc(50vh-200px)] text-transparent text-blur text-[180px] md:text-[260px] tracking-widest cormorant opacity-40">{props.post && props.post.shadow_text}</h2>
                </div>
            </div>
            <div className={`fixed z-0 top-0 left-0 w-screen overflow-hidden pointer-events-none transition-opacity duration-500 ${props.shadowTitleScene<=0? 'opacity-0': 'opacity-100'}`} style={{height: windowHeight}}>
                <div className={`relative ${props.shadowTitleScene!==0 && 'shadow-title-frame'}`}>
                    <p className={`z-10 absolute whitespace-nowrap top-[calc(50vh-200px)] text-transparent text-blur text-[180px] md:text-[260px] tracking-widest cormorant opacity-40`} style={{left:window.innerWidth/2+100+shadowTitleWidth+48}}>
                        <span className="mr-12">{props.post && props.post.shadow_text}</span><span className="mr-12">{props.post && props.post.shadow_text}</span><span>{props.post && props.post.shadow_text}</span>
                    </p>
                </div>
            </div>
        </>
    )
}