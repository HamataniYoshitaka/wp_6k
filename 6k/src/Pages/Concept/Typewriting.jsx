import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import { useWindowSize } from "../../hooks/useWindowSize";

export default function Typewriting(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    const [typewriter0, setTypewriter0] = useState(null);
    const [typewriter, setTypewriter] = useState(null);
    useEffect(() => {
        if (typewriter0){
            if(props.currentPage === 1 && props.prevPage === 0) {
                typewriter0.deleteAll()
                .changeCursor('|')
                .typeString('影があることで')
                .callFunction(() => {
                    props.finishTypewriting()
                })
                .start();
            } else if (props.currentPage === 0 && props.prevPage === 1) {
                typewriter0.deleteAll()
                .changeCursor('　')
                .start();
            }
        }
        if (typewriter) {
            if (props.currentPage === 1) {
                typewriter.deleteAll()
                .changeCursor('　')
                .callFunction(()=>{
                    props.finishDeleting()
                    props.finishTypewriting()
                })
                .start();
            } else if (props.currentPage === 2) {
                typewriter0.changeCursor('　')
                .start();
                typewriter.deleteAll()
                .changeCursor('|')
                .callFunction(()=>{
                    props.finishDeleting()
                })
                .typeString('日が差す方向が見えます')
                .callFunction(() => {
                    props.finishTypewriting()
                })
                .start();
            } else if (props.currentPage === 3) {
                typewriter.deleteAll()
                .callFunction(()=>{
                    props.finishDeleting()
                })
                .typeString('見えないものが可視化されます')
                .callFunction(() => {
                    props.finishTypewriting()
                })
                .start();
            } else if (props.currentPage === 4 && props.prevPage === 3) {
                typewriter.deleteAll()
                .callFunction(()=>{
                    props.finishDeleting()
                })
                .typeString('景色に奥行きがでます')
                .callFunction(() => {
                    props.finishTypewriting()
                })
                .start();
            }

        }

    }, [props.currentPage])

  return (
    <div className={`fixed top-0 left-0 w-screen pointer-events-none transition-opacity duration-600 delay-300 ${props.currentPage >= 5? 'opacity-0': 'opacity-1'}`} style={{height: windowHeight}}>
        <div className="fixed top-0 opacity-0 pointer-events-none text-xs">影があることで日が差す方向が見えます見えないものが可視化されます景色に奥行きがでます</div>
        <div className="fixed top-[calc(50vh-200px)] md:top-[calc(50vh-30px)] left-[calc(50vw-70px)] md:left-[calc(50vw-360px)] lg:left-[calc(50vw-440px)] w-60 md:w-96 text-xl md:text-2xl">
            <Typewriter
                onInit={(typewriter) => {
                    setTypewriter0(typewriter);
                }}
                options = {{
                    looop: false,
                    deleteSpeed: 10,
                    cursor: '　',
                }}
            />

        </div>
        <div className="fixed left-[calc(50vw-160px)] md:left-[calc(50vw-360px)] lg:left-[calc(50vw-440px)] w-80 md:w-96 text-xl md:text-2xl text-center md:text-left" style={{top: windowWidth<576? windowHeight/2+120: windowHeight/2+30}}>
            <Typewriter
                onInit={(typewriter) => {
                    setTypewriter(typewriter);
                }}
                options = {{
                    looop: false,
                    cursor: '　',
                    deleteSpeed: 10,
                }}
            />
        </div>
    </div>

  );
}