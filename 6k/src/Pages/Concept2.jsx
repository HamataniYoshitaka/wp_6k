import { Link } from "react-router-dom";
import { imgDir } from "../utils";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import { useReloadFonts } from "../hooks/useReloadFonts";

export default function Concept2(props) {
    const reloadFonts = useReloadFonts()

    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref7, inView: inView7 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref8, inView: inView8 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref9, inView: inView9 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref10, inView: inView10 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref11, inView: inView11 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref12, inView: inView12 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref13, inView: inView13 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref14, inView: inView14 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref15, inView: inView15 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref16, inView: inView16 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref17, inView: inView17 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref18, inView: inView18 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref19, inView: inView19 } = useInView({ threshold: 0.6, triggerOnce: true});
    const { ref: ref20, inView: inView20 } = useInView({ threshold: 0.6, triggerOnce: true});
    
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        setTimeout(() => {
            reloadFonts()
        }, 200);
    }, []);
    return (
        <>
            
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                    <div className="lg:fixed top-0 left-0 lg:w-[50vw] h-[100svh] flex justify-center items-center">
                        <div className={`transition-all delay-200 duration-700 ${mounted? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <img alt="ユーモラスで艶やかな景色をつくる" src={imgDir() + '/concept2/typo_copy.svg'} />
                            <p className="cormorant text-center tracking-widest mt-4">Creating a humorous and elegant scene</p>
                        </div>
                    </div>
                    <svg className="lg:hidden absolute top-[calc(100svh-60px)] left-[calc(50vw-5px)]" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                        <polygon className="fill-current" points="0,0 10,0 5,7"/>
                    </svg>
                    <svg className="lg:hidden absolute top-[calc(100svh-75px)] left-[calc(50vw-5px)]" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                        <polygon className="fill-current" points="0,0 10,0 5,7"/>
                    </svg>
                    <svg className="lg:hidden absolute top-[calc(100svh-90px)] left-[calc(50vw-5px)]" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                        <polygon className="fill-current" points="0,0 10,0 5,7"/>
                    </svg>
                </div>
                <div className="pt-2 pb-28 lg:pb-48 lg:pt-48">
                    <div className="max-w-[480px] mx-auto lg:mx-0 px-6 lg:px-0">
                        <h2 ref={ref1} className={`cormorant text-[#00ffeb] text-7xl tracking-wide transition-all delay-200 duration-700 ${inView1? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>Our Philosophy</h2>
                        <h3 ref={ref2} className={`text-sm md:text-xl mt-6 lg:mt-12 transition-all delay-200 duration-700 ${inView2? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <span className="inline-block bg-[#00ffeb] px-2 py-1">共感を得るデザイン</span><br />
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 mt-3">支持されるサービス</span><br />
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 mt-3">受け継がれるプロダクト</span>
                        </h3>
                        <div className="flex flex-col">
                            <p ref={ref3} className={`text-sm md:text-xl !leading-loose mt-3 lg:mt-6 lg:order-1 transition-all delay-200 duration-700 ${inView3? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>それらの根底にはユーモアが潜んでいると<br />私たちは考えています。</p>
                            <p ref={ref4} className={`text-sm md:text-xl !leading-loose mt-2 lg:mt-6 lg:order-3 transition-all delay-200 duration-700 ${inView4? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                                ユーモアという言葉は古代ギリシャで生まれました。<br />
                                当時は体液を意味する言葉で、<br />
                                自身が持つ体液のバランスによって<br />
                                性格や行動原理などが決まるとされていました。
                            </p>

                            <h5 ref={ref5} className={`text-sm md:text-xl mt-3 lg:mt-12 lg:order-5 transition-all delay-200 duration-700 ${inView5? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                                <span className="inline-block bg-[#00ffeb] px-2 py-1">本来ユーモアとは</span><br />
                                <span className="inline-block bg-[#00ffeb] px-2 py-1 mt-3">“その人の根源的欲求であり、原動力のようなもの”</span><br />
                                <span className="inline-block  px-2 py-1 mt-2">だったのではないでしょうか。</span>
                            </h5>
                            <p ref={ref6} className={`cormorant tracking-wider text-xs mt-4 !leading-loose lg:order-2 transition-all delay-200 duration-700 ${inView6? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                                Sympathetic Design , Services that are supported , Products that last<br />We believe that humor lies at the root of these products.
                            </p>
                            <p ref={ref7} className={`cormorant tracking-wider text-xs mt-1 lg:mt-4 !leading-loose lg:order-4 transition-all delay-200 duration-700 ${inView7? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                                The word humor originated in ancient Greece.<br />
                                At that time, the word meant bodily fluids, and it was believed that the balance of<br />
                                one’s own bodily fluids determined one’s character and principles of behavior.
                            </p>
                            <p ref={ref8} className={`cormorant tracking-wider text-xs mt-1 lg:mt-4 !leading-loose lg:order-6 transition-all delay-200 duration-700 ${inView8? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                                I believe that humor was originally “a person’s fundamental desire, a kind of driving force.
                            </p>
                        </div>
                        <h5 ref={ref9} className={`text-sm md:text-xl mt-12 transition-all delay-200 duration-700 ${inView9? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <span className="inline-block bg-[#00ffeb] px-2 py-1">その上で私たちが掲げるミッションは3つ。</span>
                        </h5>
                        <p ref={ref10} className={`cormorant tracking-wider text-xs mt-4 !leading-loose transition-all delay-200 duration-700 ${inView10? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            On top of that, we have three missions.
                        </p>
                        <div ref={ref11} className={`transition-all delay-200 duration-700 ${inView11? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <h6 className=" mt-8 w-7 h-7 rounded-full bg-black text-white flex justify-center items-center cormorant text-xl pb-1">1</h6>
                            <p className="text-sm md:text-xl !leading-loose mt-1">
                                社会・企業・ブランドにおける<br />
                                純度の高いユーモアを再発見すること
                            </p>
                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                                Rediscovering the purity of humor in society, companies, and brands
                            </p>
                        </div>
                        <div ref={ref12} className={`transition-all delay-200 duration-700 ${inView12? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <h6 className=" mt-8 w-7 h-7 rounded-full bg-black text-white flex justify-center items-center cormorant text-xl pb-1">2</h6>
                            <p className="text-sm md:text-xl !leading-loose mt-1">
                                再発見したユーモアと社会的動向や<br />
                                歴史的背景との共通項を見つけること
                            </p>
                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                            Finding common ground between humor and social trends and historical context
                            </p>
                        </div>
                        <div ref={ref13} className={`transition-all delay-200 duration-700 ${inView13? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <h6 className=" mt-8 w-7 h-7 rounded-full bg-black text-white flex justify-center items-center cormorant text-xl pb-2">3</h6>
                            <p className="text-sm md:text-xl !leading-loose mt-1">
                                適切なアウトプットを選択し<br />
                                その先に見える景色を提供すること
                            </p>
                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                                Selecting the appropriate output and providing a view beyond it.
                            </p>
                        </div>
                        <div ref={ref14} className={`transition-all delay-200 duration-700 ${inView14? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <p className="text-sm md:text-xl !leading-loose mt-10">
                            私たちはユーモラスで艶やかな景色が<br />溢れる世界を目指していきます。
                            </p>
                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                            We aim to create a world filled with humorous and lustrous landscapes.
                            </p>
                        </div>

                        <h2 ref={ref15} className={`cormorant text-[#00ffeb] text-7xl tracking-wider mt-20 transition-all delay-200 duration-700 ${inView15? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>Our <br className="md:hidden"/>Skills</h2>
                        <div ref={ref16} className={`transition-all delay-200 duration-700 ${inView16? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <h3 className="flex items-center gap-4 mt-8">
                                <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">平面</span>
                                <span className="cormorant text-lg tracking-wider">Flat Surface</span>
                            </h3>
                            <h4 className="text-sm md:text-xl !leading-loose mt-4">
                                ロゴマーク / webサイト / 名刺 / パンフレット等
                            </h4>
                            <p className="text-xs !leading-loose mt-4">
                            デザインからヒアリング、リサーチ、イラストレーターの手配、紙の選定、印刷方法の選定、印刷業者の手配等を一貫して行うことができます。
                            </p>

                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                            Logos, websites, business cards, pamphlets, etc. We can handle everything from design to interviews, research, arranging illustrators, selecting paper, selecting printing methods, arranging printers, etc.
                            </p>
                            <Link to="/?mode=index&category=5" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                                <div>&nbsp;</div>
                                WORKS
                                <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                            </Link>
                        </div>

                        <div ref={ref17} className={`transition-all delay-200 duration-700 ${inView17? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <h3 className="flex items-center gap-4 mt-16">
                                <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">画面</span>
                                <span className="cormorant text-lg tracking-wider">Screen</span>
                            </h3>
                            <h4 className="text-sm md:text-xl !leading-loose mt-4">
                            Webサイト / ECサイトの構築からデザイン
                            </h4>
                            <p className="text-xs !leading-loose mt-4">
                            デザインからフロントエンド、バックエンド開発、CMS構築、ECサイト構築、インバウンド向け多言語サイト構築など網羅的に制作が可能です。
                            </p>

                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                            Logos, websites, business cards, pamphlets, etc. We can handle everything from design to interviews, research, arranging illustrators, selecting paper, selecting printing methods, arranging printers, etc.
                            </p>
                            <Link to="/?mode=index&category=1" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                                <div>&nbsp;</div>
                                WORKS
                                <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                            </Link>
                        </div>

                        <div ref={ref18} className={`transition-all delay-200 duration-700 ${inView18? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <h3 className="flex items-center gap-4 mt-16">
                                <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">立体</span>
                                <span className="cormorant text-lg tracking-wider">3D</span>
                            </h3>
                            <h4 className="text-sm md:text-xl !leading-loose mt-4">
                            店舗サイン / ディスプレイ / パッケージ / 看板等
                            </h4>
                            <p className="text-xs !leading-loose mt-4">
                            デザインからサイン計画、店舗レイアウト計画、サイン・パッケージ・看板・グッズの素材や仕様選定と各種業者の手配等を一貫して行うことができます。
                            </p>

                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                            Store signs, displays, packaging, signage, etc.<br />We can provide a full range of services from design, signage planning, store layout planning, selection of materials and specifications for signs, packages, signage, and merchandise, and arrangement of various vendors.
                            </p>
                            <Link to="/?mode=index&category=3" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                                <div>&nbsp;</div>
                                WORKS
                                <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                            </Link>
                        </div>

                        <div ref={ref19} className={`transition-all delay-200 duration-700 ${inView19? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <h3 className="flex items-center gap-4 mt-16">
                                <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">思考</span>
                                <span className="cormorant text-lg tracking-wider">Thinking</span>
                            </h3>
                            <h4 className="text-sm md:text-xl !leading-loose mt-4">
                            コンセプトメイキング / 壁打ち / 企画
                            </h4>
                            <p className="text-xs !leading-loose mt-4">
                            ヒアリングやリサーチ、会社・ブランドにおける方向性の提案や企画を行います。また参謀としての雑談やアイデアの壁打ち相手も行います。
                            </p>

                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                            Concept-making, wall-hunting, planning<br />We conduct interviews and research, and propose and plan the direction of the company and brand. We also act as a consultant, chatting and brainstorming with other staff members.
                            </p>
                            <Link to="/?mode=index&category=2" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                                <div>&nbsp;</div>
                                WORKS
                                <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                            </Link>
                        </div>

                        <div ref={ref20} className={`transition-all delay-200 duration-700 ${inView20? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'}`}>
                            <h3 className="flex items-center gap-4 mt-16">
                                <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">嗅覚</span>
                                <span className="cormorant text-lg tracking-wider">Smell</span>
                            </h3>
                            <h4 className="text-sm md:text-xl !leading-loose mt-4">
                            混ぜるな危険 / コーポレートフレグランスの提案
                            </h4>
                            <p className="text-xs !leading-loose mt-4">
                            香りに関するイベントを行うコレクティブチーム混ぜるな危険の企画と運営を行っています。またコーポレートフレグランスの制作や選定を行っています。
                            </p>

                            <p className="cormorant tracking-wider text-xs mt-2 !leading-loose">
                            MAZERUNAKIKEN, Corporate Fragrance Proposal<br />We plan and manage the collective team Mixed Dangerous, which holds events related to fragrance. We also create and select corporate fragrances.
                            </p>
                            <Link to="/?mode=index&category=4" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                                <div>&nbsp;</div>
                                WORKS
                                <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                            </Link>
                            <Link to="https://mazerunakiken.net/" target="_blank" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black bg-black text-white rounded-full px-4 py-2 transition-colors hover:bg-white hover:text-black">
                                <div>&nbsp;</div>
                                MAZERUNAKIKEN
                                <svg xmlns="http://www.w3.org/2000/svg" width="10.614" height="10.109" viewBox="0 0 10.614 10.109">
                                    <path className="fill-current" d="M123.3,14.731l6.9-4.138v8.275Z" transform="translate(-70.822 107.453) rotate(-60)"/>
                                </svg>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}