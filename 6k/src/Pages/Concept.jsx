import React, { useEffect, useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Glass from "./Concept/Glass";
import { imgDir } from "../utils";
import ConceptIndicator from "./Concept/Indicator";
import Typewriting from "./Concept/Typewriting";
import { Link } from "react-router-dom";
import { useReloadFonts } from "../hooks/useReloadFonts";
import { useWindowSize } from "../hooks/useWindowSize";
import { BrowserView, MobileView } from "react-device-detect";

export default function Concept(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    const reloadFonts = useReloadFonts()

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

    // useEffect(() => {
    //     // setTimeout(() => {
    //         reloadFonts()
    //     // }, 200)

    // }, [])
 
    return (
        <>
            <div className={`fixed z-0 top-0 left-0 w-screen overflow-hidden transition-opacity duration-[2s] ${currentPage===0? 'opacity-100': 'opacity-0'}`} style={{height: windowHeight}}>
                <h1 className="absolute top-[calc(50vh-200px)] left-[calc(50vw-760px)] text-transparent text-blur text-[260px] tracking-widest cormorant opacity-40">CONCEPT</h1>
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
                afterRender={() => {
                // oninitialized={(origin, destination, direction) => {
                    console.log('afterRender')
                    reloadFonts()

                }}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <section className="section">
                                <div className="px-8 relative">
                                    <h2 className="text-center text-2xl leading-10">景色に輪郭をあたえる<br />影のようなデザイン</h2>
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
                                <div className="max-w-[880px] mx-auto">
                                </div>
                            </section>
                            <section className="section">
                                <div className="max-w-[880px] mx-auto">
                                </div>
                            </section>
                            <section className="section">
                                <div className="max-w-[880px] mx-auto flex justify-center">
                                    <p className={`md:text-lg leading-10 transition-opacity duration-1000 ${currentPage>4? 'opacity-100': 'opacity-0'}`}>
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
                            <section className="section" style={{minHeight: windowHeight}}>
                                <div className="bg-[#E8E8E8] py-20 px-5 md:px-0">
                                    <div className="max-w-[970px] mx-auto">
                                        <h4 className="text-3xl text-center font-medium">ROKKEI’S PROJECTS</h4>
                                        <p className="text-center text-xs mt-8 leading-7">クライアントワーク以外に社会へ問いを投げかける<br className="md:hidden"/>企画やブランドの運営をおこなっています</p>
                                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 px-8 lg:px-0">
                                            <div className="relative group">
                                                <img className="w-full h-auto" src={imgDir() + '/concept/no_mix.jpg'} />
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                    <img src={imgDir() + '/concept/typo-no_mix.svg'} />
                                                </div>
                                                <MobileView>
                                                    <a href="https://mazerunakiken.net/" target="_blank" className="absolute block inset-0 text-white/0">
                                                        混ぜるな危険
                                                    </a>
                                                </MobileView>
                                                <BrowserView>
                                                    <div className="flex absolute inset-0 bg-black/70 flex-col justify-center items-center space-y-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                                        <h5 className="text-white text-2xl">混ぜるな危険</h5>
                                                        <p className="text-white text-center text-xs leading-7">香りで、世界の解像度は上がる。<br />混ぜるな危険は、香りと接続してこなかった「何か」を<br />繋げていくプロジェクトチーム。</p>
                                                        <a href="https://mazerunakiken.net/" target="_blank" className="border-1.5 border-white py-2 w-60 bg-white rounded-full text-black text-center text-sm transition-colors hover:bg-white/90">MORE</a>
                                                    </div>
                                                </BrowserView>
                                            </div>
                                            <div className="relative group">
                                                <img className="w-full h-auto" src={imgDir() + '/concept/hunch.jpg'} />
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                    <img src={imgDir() + '/concept/typo-hunch.svg'} />
                                                </div>
                                                <MobileView>
                                                    <a href="https://www.instagram.com/hunch.jewelry/" target="_blank" className="absolute block inset-0 text-white/0">
                                                        hunch
                                                    </a>
                                                </MobileView>
                                                <BrowserView>
                                                    <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center space-y-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                                        <h5 className="text-white text-2xl">hunch</h5>
                                                        <p className="text-white text-center text-xs leading-7">「知ってるようで、知らないもの、と。」を<br />コンセプトにした、虫と共創する<br />ジュエリーブランド。</p>
                                                        <a href="https://www.instagram.com/hunch.jewelry/" target="_blank" className="border-1.5 border-white py-2 w-60 bg-white rounded-full text-black text-center text-sm transition-colors hover:bg-white/90">MORE</a>
                                                    </div>
                                                </BrowserView>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10 min-h-[calc(100vh-697px)] py-6 lg:py-0">
                                    <Link to="/" className="border-1.5 text-center border-black rounded-full py-2 block w-60 text-sm hover:bg-black hover:text-white jost">CREATIVE</Link>
                                    <Link to="/company" className="border-1.5 text-center border-black rounded-full py-2 block w-60 text-sm hover:bg-black hover:text-white jost">COMPANY</Link>
                                    <Link to="/contact" className="border-1.5 text-center border-black rounded-full py-2 block w-60 text-sm hover:bg-black hover:text-white jost">CONTACT</Link>
                                </div>
                                <div className="h-9">
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