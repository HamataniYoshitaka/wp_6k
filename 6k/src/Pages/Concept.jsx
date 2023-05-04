import React, { useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Glass from "./Concept/Glass";
import { imgDir } from "../utils";
import ConceptIndicator from "./Concept/Indicator";
import Typewriting from "./Concept/Typewriting";

export default function Concept(props) {
    const fullpageRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0)
    const [prevPage, setPrevPage] = useState(0)

    const handleScrolling = (allow) => {
        fullpageRef.current.fullpageApi.setAllowScrolling(allow)
    }
    const finishTypewriting = () => {
        // fullpageRef.current.fullpageApi.setAllowScrolling(false)
        handleScrolling(true)

    }
    const finishDeleting = () => {
    }

 
    return (
        <>
            <div className="fixed z-0 inset-0 -top-40 overflow-hidden ">
                <h1 className="absolute top-[calc(50vw-0px)] left-0 text-transparent text-blur text-[160px] tracking-widest cormorant">CONCEPT</h1>
            </div>
            <Typewriting currentPage={currentPage} prevPage={prevPage} finishTypewriting={finishTypewriting} finishDeleting={finishDeleting}/>
            <ConceptIndicator currentPage={currentPage}/>
            <ReactFullpage
                // licenseKey = {'YOUR_KEY_HERE'}
                ref={fullpageRef}
                scrollingSpeed = {2000} /* Options here */
                onLeave={(origin, destination, direction) => {
                    setPrevPage(origin.index)
                    setCurrentPage(destination.index)
                    // console.log(destination.index, direction)
                    if (destination.index < 4 && destination.index > 0) {
                        handleScrolling(false)
                    } else if (destination.index === 4 && direction === 'down') {
                        handleScrolling(false)

                    }
                }}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <section className="section">
                                <div className="px-8 relative">
                                    <h2 className="text-center text-2xl leading-10">景色に輪郭をあたえる<br />影のようなデザイン</h2>
                                </div>
                                <div>
                                    <p className="text-xs text-center">SCROLL DOWN</p>
                                </div>
                            </section>
                            <section className="section">
                            </section>
                            <section className="section">
                                <div className="max-w-[880px] mx-auto">
                                </div>
                            </section>
                            <section className="section">
                                <div className="max-w-[880px] mx-auto">
                                </div>
                            </section>
                            <section className="section">
                                <div className="max-w-[880px] mx-auto">
                                </div>
                            </section>
                            <section className="section">
                                <div className="max-w-[880px] mx-auto flex justify-center">
                                    <p className={`text-lg leading-10 transition-opacity duration-1000 ${currentPage>4? 'opacity-100': 'opacity-0'}`}>
                                        影は決して主役ではありません。<br />
                                        しかし、迷った時に方向性を示し、<br />
                                        見えていなかった新たな発見を生み、<br />
                                        今あるものを豊かにしてくれる存在です。<br />
                                        <br />
                                        六景は素材の持つ価値を引き出す<br />
                                        影のようなデザインを目指します。
                                    </p>
                                </div>
                            </section>
                            <section className="section bg-[#E8E8E8]">
                                <div className="max-w-[970px] mx-auto">
                                    <h4 className="text-3xl text-center font-medium">ROKKEI’S PROJECTS</h4>
                                    <p className="text-center text-xs mt-8">クライアントワーク以外に社会へ問いを投げかける企画やブランドの運営をおこなっています</p>
                                    <div className="mt-8 grid grid-cols-2 gap-12">
                                        <div className="relative">
                                            <img className="w-full h-auto" src={imgDir() + '/concept/no_mix.jpg'} />
                                            <div className="absolute inset-0 flex justify-center items-center">
                                                <img src={imgDir() + '/concept/typo-no_mix.svg'} />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <img className="w-full h-auto" src={imgDir() + '/concept/hunch.jpg'} />
                                            <div className="absolute inset-0 flex justify-center items-center">
                                                <img src={imgDir() + '/concept/typo-hunch.svg'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
            <Glass currentPage={currentPage} prevPage={prevPage} />
        </>
    )
}