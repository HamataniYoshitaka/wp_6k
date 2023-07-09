import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setOpeningShown } from "../redux/product";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Opening() {
    const [windowWidth, windowHeight] = useWindowSize()
    const openingShown = useSelector((state) => state.product.openingShown)
    const dispatch = useDispatch()
    const [scene, setScene] = useState(0)

    const location = useLocation()

    useEffect(()=>{
        if (location.key !== 'default') {
            dispatch(setOpeningShown(true))
        }
        setTimeout(()=>{
            setScene(1)
        }, 600)
    }, [])

    useEffect(()=>{
        if (scene === 1) {
            setTimeout(()=>{
                setScene(2)
            }, 1200)
        } else if (scene === 2) {
            setTimeout(()=>{
                setScene(3)
            }, 1200)
        } else if (scene === 3) {
            setTimeout(()=>{
                dispatch(setOpeningShown(true))
            }, 600)
        }
    }, [scene])

    return (
        <>
        {openingShown? null: (
            <div className={`fixed z-[60] top-0 left-0 w-screen transition-opacity duration-300 ${scene <=2 ? 'opacity-100': 'opacity-0 pointer-events-none'}`} style={{height: windowHeight}}>
                <div className="fixed bg-white top-1 left-0 w-screen h-20 md:h-28">
                </div>
                <div className="fixed z-[60] bottom-0 left-0 w-screen bg-black transition-all duration-1000" style={{height: scene<=1? '100%': '0%'}}>
                    <div className={`pointer-events-none fixed z-50 left-0 w-full items-center p-5 transition-all duration-1000 ${scene <= 1? 'text-white top-[calc(50vh-50px)]': 'text-black top-5'}`}>
                        <svg className={`w-auto h-[60px] md:h-[95px] absolute top-0 z-20 transition-all ${scene === 0? 'left-[calc(50vw-56px)]': 'left-5'} ${scene <= 1&& 'duration-1000'}`} viewBox="0 0 36.71 70.05">
                            <path fill="currentColor" d="M36.7,15v-1.14H0v1.14l1.09,1.44H35.61l1.09-1.44Z"/>
                            <path fill="currentColor" d="M25.98,2.58l.99-1.43V0H9.76V1.16l.99,1.43h15.23Z"/>
                            <path fill="currentColor" d="M26.96,28.04h-2.88c.95,15.97,4.65,32.57,7.94,41.52,1.5,.6,3.16,.63,4.68,.1-2.46-3.94-4.79-10.54-6.6-18.6-1.65-7.58-2.71-15.28-3.15-23.03"/>
                            <path fill="currentColor" d="M9.76,28.04c-.44,7.75-1.49,15.45-3.15,23.03C4.81,59.13,2.47,65.73,0,69.67c1.52,.53,3.19,.5,4.68-.1,3.3-8.98,7-25.58,7.94-41.52h-2.88Z"/>
                        </svg>
                        <div className={`absolute z-10 w-40 h-16 bg-black top-0 transition-all duration-1000 ${scene === 0 && 'right-[calc(50vw)]'} ${scene === 1 && 'right-[calc(100vw-100px)]'} ${scene >= 2 && 'hidden'}`}></div>
                        <div className={`absolute z-10 w-40 h-16 bg-black top-0 transition-all duration-1000 ${scene === 0 && 'left-[calc(50vw)]'} ${scene === 1 && 'left-[calc(100vw-100px)]'} ${scene >= 2 && 'hidden'}`}></div>
                        <svg className="w-[100px] md:w-[180px] h-auto absolute top-6 md:top-9 left-[calc(50vw-50px)] md:left-[calc(50vw-90px)]" viewBox="0 0 100.7 12.06">
                            <path fill="currentColor" d="M71.26,.12V11.45l.64,.49h.5V.12h-1.14Z"/>
                            <path fill="currentColor" d="M58.12,.12V11.45l.64,.49h.5V.12h-1.14Z"/>
                            <path fill="currentColor" d="M47.29,.12h-.82V11.45l.64,.49h5.94v-1.15h-5.43V6.24h4.34v-1.14h-4.34V1.26h5.43V.12h-5.77Z"/>
                            <path fill="currentColor" d="M84.1,.12V9.79L79.04,.11h-1.14V11.45l.64,.49h.51V2.26l5.06,9.68h1.14V.12h-1.15Z"/>
                            <path fill="currentColor" d="M14.75,0c-1.91,0-3.46,1.55-3.46,3.46v5.14c0,1.91,1.55,3.46,3.46,3.46,1.91,0,3.46-1.55,3.46-3.46h0V3.46c0-1.91-1.55-3.46-3.46-3.46m2.29,8.6c0,1.27-1.03,2.29-2.29,2.29s-2.29-1.03-2.29-2.29V3.46c0-1.27,1.03-2.29,2.29-2.29s2.29,1.03,2.29,2.29h0v5.14Z"/>
                            <path fill="currentColor" d="M92.9,.06c-1.91,0-3.46,1.55-3.46,3.46v5.02c0,1.91,1.55,3.46,3.46,3.46,1.91,0,3.46-1.55,3.46-3.46v-.5h-1.17v.5c0,1.27-1.03,2.29-2.29,2.29s-2.29-1.03-2.29-2.29V3.52c0-1.27,1.03-2.29,2.29-2.29s2.29,1.03,2.29,2.29v.55l.65,.5h.52v-1.04c0-1.91-1.55-3.46-3.46-3.46"/>
                            <path fill="currentColor" d="M4.55,7.67c-.31-.42-.62-.88-.93-1.35,1.71-.21,2.92-1.77,2.7-3.47C6.13,1.27,4.79,.1,3.21,.12H0V11.45l.64,.48h.5V6.35h1.31c1.2,2.03,2.6,3.93,4.19,5.67l.04,.04h.06c.47-.02,.91-.2,1.26-.52l.11-.1-.12-.08c-1.33-1.04-2.49-2.28-3.43-3.68M1.14,5.18V1.29H3.21c1.07-.02,1.97,.83,1.99,1.9,.02,1.07-.83,1.97-1.9,1.99-.03,0-.06,0-.09,0H1.14Z"/>
                            <path fill="currentColor" d="M26.59,7.72c-.5-.58-1-1.22-1.5-1.9l-.32-.43L29.86,.23h-1.53l-4.1,4.24V.12h-1.15V11.46l.64,.48h.5V6.35c1.39,2.01,3,3.87,4.78,5.55l.04,.04h.05c.47-.06,.9-.28,1.21-.63l.1-.11-.13-.07c-1.41-.93-2.66-2.08-3.71-3.4"/>
                            <path fill="currentColor" d="M38.28,7.72c-.49-.58-1-1.22-1.5-1.9l-.31-.43L41.55,.23h-1.53l-4.1,4.24V.12h-1.15V11.46l.64,.48h.51V6.35c1.39,2.01,3,3.87,4.78,5.55l.04,.04h.05c.47-.06,.9-.28,1.21-.63l.1-.11-.13-.07c-1.41-.93-2.66-2.08-3.71-3.4"/>
                            <path fill="currentColor" d="M100.2,10.36h-.64v1.09l.64,.49h.5v-1.57h-.5Z"/>
                        </svg>
                        <svg className={`w-auto h-[60px] md:h-[95px] absolute z-20 right-4 top-0 transition-all ${scene === 0? 'right-[calc(50vw-56px)]': 'right-5'} ${scene <= 1&& 'duration-1000'}`} viewBox="0 0 37.85 71.37">
                            <path fill="currentColor" d="M19.1,71.37h1.32v-28.35h11.95v-11.73h-2.84v9.01H8.31v-9.01h-2.83v11.73h11.95v27.09l1.67,1.27Z"/>
                            <path fill="currentColor" d="M8.36,15.94H29.5v8.16h2.84V0H5.52V24.1h2.83V15.94Zm0-13.22H29.5V13.22H8.36V2.72Z"/>
                            <path fill="currentColor" d="M37.85,27.55v-1.11H0v1.11l1.07,1.41H36.79l1.07-1.41Z"/>
                            <path fill="currentColor" d="M8.01,48.94c-.35,2.13-.74,4.18-1.17,6.11-1.56,6.96-3.57,12.63-5.69,15.98,1.4,.49,2.93,.47,4.31-.07,2.46-7.15,4.19-14.52,5.17-22.02h-2.62Z"/>
                            <path fill="currentColor" d="M31.02,55.04c-.43-1.93-.82-3.98-1.17-6.11h-2.62c.98,7.49,2.72,14.87,5.17,22.02,1.38,.54,2.91,.56,4.32,.07-2.12-3.35-4.13-9.02-5.69-15.98"/>
                        </svg>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}