import React, { useEffect, useState } from "react";
import NavFooter from "../Components/NavFooter";
import { useReloadFonts } from "../hooks/useReloadFonts";

export default function About(props) {
    const reloadFonts = useReloadFonts()
    const [isLoaded, setIsLoaded] = useState(false)
    const [titleShowing, setTitleShowing] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            reloadFonts()
        }, 200)
        setTimeout(() => {
            setTitleShowing(true)
        }, 2500)
    }, [])
    return (
        <div className="bg-[#C6C6C6] pt-32 pb-40 relative">
            <div className={`fixed z-0 top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none transition-opacity duration-[2s] ${titleShowing? 'opacity-100': 'opacity-0'}`}>
                <h1 className="absolute top-[calc(50vh-200px)] left-[calc(50vw-760px)] text-transparent text-blur text-[260px] tracking-widest cormorant opacity-40">COMPANY</h1>
            </div>

            <div className="md:w-[768px] mx-auto relative ">

                <h3 className="px-10 overflow-hidden "><span className={`text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost transition-transform duration-1000 delay-100  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>ESTABLISHED</span></h3>
                <p className="mt-4 px-10 overflow-hidden">
                    <span className={`text-sm inline-block tracking-wider jost transition-transform duration-1000 delay-200  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                        2019.4
                    </span>
                </p>

                <h3 className="mt-8 px-10 overflow-hidden">
                    <span className={`text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost transition-transform duration-1000 delay-300  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>CEO</span>
                </h3>
                <p className="mt-4 px-10 overflow-hidden">
                    <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[400ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                        上村 昂平
                    </span>
                </p>

                <h3 className="mt-8 px-10 overflow-hidden">
                    <span className={`text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost transition-transform duration-1000 delay-500 ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>ADDRESS</span>
                </h3>
                <address className="mt-4 text-sm not-italic block space-y-1">
                    <div className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[600ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            542 0081
                        </span>
                    </div>
                    <div className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[700ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            大阪府大阪市中央区
                        </span>
                    </div>
                    <div className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[800ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            南船場1丁目9-24
                        </span>
                    </div>                    
                </address>

                <h3 className="mt-8 px-10 overflow-hidden">
                    <span className={`text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost transition-transform duration-1000 delay-[900ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>SERVICE</span>
                </h3>
                <ul className="mt-4 text-sm space-y-2">
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1000ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・web制作                        
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1100ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・シンボルマーク
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1200ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・ロゴマーク
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1300ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・パッケージ
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1400ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・サイン
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1500ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・PRツール
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1600ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・イベント会場等のディレクション
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1700ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・デザインのサブスクリプション契約
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1800ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            ・ブランドを象徴する香りの提案                        
                        </span>
                    </li>
                    <li className="px-10 overflow-hidden">
                        <span className={`text-sm inline-block tracking-wider transition-transform duration-1000 delay-[1900ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>                            
                            ・その他クリエイティブ
                        </span>
                    </li>
                </ul>
                <div className="md:w-96">
                    <h3 className="mt-8 px-10 overflow-hidden">
                        <span className={`text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost transition-transform duration-1000 delay-[2000ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>PRODUCTS</span>
                    </h3>
                    <h4 className="mt-4 px-10 overflow-hidden">
                        <span className={`text-lg inline-block tracking-wider transition-transform duration-1000 delay-[2100ms] ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>混ぜるな危険</span>
                    </h4>
                    <div className="mt-3 px-10 overflow-hidden">
                        <p className={`text-gray-500 text-xs leading-5 transition-all duration-1000 delay-[2200ms] ${isLoaded? 'scale-100 translate-y-0 opacity-100': 'scale-125 translate-y-10 opacity-0'}`}>「香り」で、世界の解像度は上がる。「混ぜるな危険」は「香り」と接続してこなかった「何か」を繋げていくプロジェクトチーム。</p>
                    </div>
                    <div className=" px-10 overflow-hidden">
                        <div className={`transition-transform duration-1000 delay-[2300ms] ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            <a href="https://mazerunakiken.net/" target="_blank" className={`block border-1.5 bg-white border-black transition-colors hover:bg-black hover:text-white rounded-full text-xs text-center py-2 mt-4 jost `}>MORE</a>
                        </div>
                    </div>

                    <h4 className="mt-4 px-10 overflow-hidden">
                        <span className={`text-lg inline-block tracking-wider transition-transform duration-1000 delay-[2400ms] ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>hunch</span>
                    </h4>
                    <div className="mt-3 px-10 overflow-hidden">
                        <p className={`text-gray-500 text-xs leading-5 transition-all duration-1000 delay-[2500ms] ${isLoaded? 'scale-100 translate-y-0 opacity-100': 'scale-125 translate-y-10 opacity-0'}`}>虫たちと一緒に出会う、新しい尺度。 虫と共創するジュエリーブランド。</p>
                    </div>
                    <div className=" px-10 overflow-hidden">
                        <div className={`transition-transform duration-1000 delay-[2600ms] ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-10'}`}>
                            <a href="#" target="_blank" className={`block border-1.5 bg-white border-black rounded-full text-xs text-center py-2 mt-4 jost transition-colors hover:bg-black hover:text-white `}>MORE</a>
                        </div>
                    </div>

                </div>

            </div>
            <NavFooter />
        </div>
    )
}