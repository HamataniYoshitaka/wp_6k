import { Link } from "react-router-dom";
import { imgDir } from "../utils";

export default function Concept2(props) {
    return (
        <>
            <div className="fixed top-0 left-0 w-[50vw] h-screen flex justify-center items-center">
                <div>
                    <img alt="ユーモラスで艶やかな景色をつくる" src={imgDir() + '/concept2/typo_copy.svg'} />
                    <p className="cormorant text-center tracking-widest mt-4">Creating a humorous and elegant scene</p>
                </div>
            </div>
            <div className="w-full grid grid-cols-2">
                <div></div>
                <div className="py-48">
                    <div className="max-w-[480px]">
                        <h2 className="cormorant text-[#00ffeb] text-7xl tracking-wide">Our Philosophy</h2>
                        <h3 className="text-xl mt-12">
                            <span className="inline-block bg-[#00ffeb] px-2 py-1">共感を得るデザイン</span><br />
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 mt-3">支持されるサービス</span><br />
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 mt-3">受け継がれるプロダクト</span>
                        </h3>
                        <p className="text-xl leading-loose mt-6">それらの根底にはユーモアが潜んでいると<br />私たちは考えています。</p>
                        <p className="cormorant tracking-wider text-xs mt-4 leading-loose">
                            Sympathetic Design , Services that are supported , Products that last<br />We believe that humor lies at the root of these products.
                        </p>
                        <p className="text-xl leading-loose mt-6">
                            ユーモアという言葉は古代ギリシャで生まれました。<br />
                            当時は体液を意味する言葉で、<br />
                            自身が持つ体液のバランスによって<br />
                            性格や行動原理などが決まるとされていました。
                        </p>
                        <p className="cormorant tracking-wider text-xs mt-4 leading-loose">
                            The word humor originated in ancient Greece.<br />
                            At that time, the word meant bodily fluids, and it was believed that the balance of<br />
                            one’s own bodily fluids determined one’s character and principles of behavior.
                        </p>
                        <h5 className="text-xl mt-12">
                            <span className="inline-block bg-[#00ffeb] px-2 py-1">本来ユーモアとは</span><br />
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 mt-3">“その人の根源的欲求であり、原動力のようなもの”</span><br />
                            <span className="inline-block  px-2 py-1 mt-2">だったのではないでしょうか。</span>
                        </h5>
                        <p className="cormorant tracking-wider text-xs mt-4 leading-loose">
                            I believe that humor was originally “a person’s fundamental desire, a kind of driving force.
                        </p>
                        <h5 className="text-xl mt-12">
                            <span className="inline-block bg-[#00ffeb] px-2 py-1">その上で私たちが掲げるミッションは3つ。</span>
                        </h5>
                        <p className="cormorant tracking-wider text-xs mt-4 leading-loose">
                            On top of that, we have three missions.
                        </p>

                        <h6 className=" mt-8 w-7 h-7 rounded-full bg-black text-white flex justify-center items-center cormorant text-xl pb-1">1</h6>
                        <p className="text-xl leading-loose mt-1">
                            社会・企業・ブランドにおける<br />
                            純度の高いユーモアを再発見すること
                        </p>
                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                            Rediscovering the purity of humor in society, companies, and brands
                        </p>

                        <h6 className=" mt-8 w-7 h-7 rounded-full bg-black text-white flex justify-center items-center cormorant text-xl pb-1">2</h6>
                        <p className="text-xl leading-loose mt-1">
                            再発見したユーモアと社会的動向や<br />
                            歴史的背景との共通項を見つけること
                        </p>
                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                        Finding common ground between humor and social trends and historical context
                        </p>

                        <h6 className=" mt-8 w-7 h-7 rounded-full bg-black text-white flex justify-center items-center cormorant text-xl pb-2">3</h6>
                        <p className="text-xl leading-loose mt-1">
                            適切なアウトプットを選択し<br />
                            その先に見える景色を提供すること
                        </p>
                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                            Selecting the appropriate output and providing a view beyond it.
                        </p>

                        <p className="text-xl leading-loose mt-10">
                        私たちはユーモラスで艶やかな景色が<br />溢れる世界を目指していきます。
                        </p>
                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                        We aim to create a world filled with humorous and lustrous landscapes.
                        </p>

                        <h2 className="cormorant text-[#00ffeb] text-7xl tracking-wider mt-20">Our Skills</h2>
                        
                        <h3 className="flex items-center gap-4 mt-8">
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">平面</span>
                            <span className="cormorant text-lg tracking-wider">Flat Surface</span>
                        </h3>
                        <h4 className="text-xl leading-loose mt-4">
                            ロゴマーク / webサイト / 名刺 / パンフレット等
                        </h4>
                        <p className="text-xs leading-loose mt-4">
                        デザインからヒアリング、リサーチ、イラストレーターの手配、紙の選定、印刷方法の選定、印刷業者の手配等を一貫して行うことができます。
                        </p>

                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                        Logos, websites, business cards, pamphlets, etc. We can handle everything from design to interviews, research, arranging illustrators, selecting paper, selecting printing methods, arranging printers, etc.
                        </p>
                        <Link to="/contact" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                            <div>&nbsp;</div>
                            WORKS
                            <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                        </Link>

                        <h3 className="flex items-center gap-4 mt-16">
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">画面</span>
                            <span className="cormorant text-lg tracking-wider">Screen</span>
                        </h3>
                        <h4 className="text-xl leading-loose mt-4">
                        Webサイト / ECサイトの構築からデザイン
                        </h4>
                        <p className="text-xs leading-loose mt-4">
                        デザインからフロントエンド、バックエンド開発、CMS構築、ECサイト構築、インバウンド向け多言語サイト構築など網羅的に制作が可能です。
                        </p>

                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                        Logos, websites, business cards, pamphlets, etc. We can handle everything from design to interviews, research, arranging illustrators, selecting paper, selecting printing methods, arranging printers, etc.
                        </p>
                        <Link to="/contact" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                            <div>&nbsp;</div>
                            WORKS
                            <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                        </Link>

                        <h3 className="flex items-center gap-4 mt-16">
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">立体</span>
                            <span className="cormorant text-lg tracking-wider">3D</span>
                        </h3>
                        <h4 className="text-xl leading-loose mt-4">
                        店舗サイン / ディスプレイ / パッケージ / 看板等
                        </h4>
                        <p className="text-xs leading-loose mt-4">
                        デザインからサイン計画、店舗レイアウト計画、サイン・パッケージ・看板・グッズの素材や仕様選定と各種業者の手配等を一貫して行うことができます。
                        </p>

                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                        Store signs, displays, packaging, signage, etc.<br />We can provide a full range of services from design, signage planning, store layout planning, selection of materials and specifications for signs, packages, signage, and merchandise, and arrangement of various vendors.
                        </p>
                        <Link to="/contact" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                            <div>&nbsp;</div>
                            WORKS
                            <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                        </Link>

                        <h3 className="flex items-center gap-4 mt-16">
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">思考</span>
                            <span className="cormorant text-lg tracking-wider">Thinking</span>
                        </h3>
                        <h4 className="text-xl leading-loose mt-4">
                        コンセプトメイキング / 壁打ち / 企画
                        </h4>
                        <p className="text-xs leading-loose mt-4">
                        ヒアリングやリサーチ、会社・ブランドにおける方向性の提案や企画を行います。また参謀としての雑談やアイデアの壁打ち相手も行います。
                        </p>

                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                        Concept-making, wall-hunting, planning<br />We conduct interviews and research, and propose and plan the direction of the company and brand. We also act as a consultant, chatting and brainstorming with other staff members.
                        </p>
                        <Link to="/contact" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                            <div>&nbsp;</div>
                            WORKS
                            <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                        </Link>

                        <h3 className="flex items-center gap-4 mt-16">
                            <span className="inline-block bg-[#00ffeb] px-2 py-1 text-lg">嗅覚</span>
                            <span className="cormorant text-lg tracking-wider">Smell</span>
                        </h3>
                        <h4 className="text-xl leading-loose mt-4">
                        混ぜるな危険 / コーポレートフレグランスの提案
                        </h4>
                        <p className="text-xs leading-loose mt-4">
                        香りに関するイベントを行うコレクティブチーム混ぜるな危険の企画と運営を行っています。またコーポレートフレグランスの制作や選定を行っています。
                        </p>

                        <p className="cormorant tracking-wider text-xs mt-2 leading-loose">
                        MAZERUNAKIKEN, Corporate Fragrance Proposal<br />We plan and manage the collective team Mixed Dangerous, which holds events related to fragrance. We also create and select corporate fragrances.
                        </p>
                        <Link to="/contact" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black rounded-full px-4 py-2 transition-colors hover:bg-black hover:text-white">
                            <div>&nbsp;</div>
                            WORKS
                            <img alt="" src={imgDir() + '/concept2/arrow_right.svg'} />
                        </Link>
                        <Link to="/contact" className="jost tracking-widest text-xs mt-4 flex justify-between items-center w-full border-2 border-black bg-black text-white rounded-full px-4 py-2 transition-colors hover:bg-white hover:text-black">
                            <div>&nbsp;</div>
                            MAZERUNAKIKEN
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.614" height="10.109" viewBox="0 0 10.614 10.109">
                                <path className="fill-current" d="M123.3,14.731l6.9-4.138v8.275Z" transform="translate(-70.822 107.453) rotate(-60)"/>
                            </svg>

                        </Link>


                    </div>
                </div>
            </div>
        </>
    )
}