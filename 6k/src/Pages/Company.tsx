import React from "react";
import NavFooter from "../Components/NavFooter";

export default function About(props: any) {
    return (
        <div className="bg-gray-300 pt-32 pb-20 relative">
            <div className="fixed z-0 inset-0 overflow-hidden">
                <h1 className="absolute top-[calc(50vw-0px)] left-0 text-transparent text-blur text-[160px] tracking-widest cormorant">COMPANY</h1>
            </div>
            <div className="px-16 relative">

                <h3><span className="text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost">ESTABLISHED</span></h3>
                <p className="mt-4 text-sm">2019.4</p>

                <h3 className="mt-8"><span className="text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost">CEO</span></h3>
                <p className="mt-4 text-sm">上村 昂平</p>

                <h3 className="mt-8"><span className="text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost">ADDRESS</span></h3>
                <address className="mt-4 text-sm not-italic leading-6">542 0081<br />大阪府大阪市中央区<br />南船場1丁目9-24</address>

                <h3 className="mt-8"><span className="text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost">SERVICE</span></h3>
                <ul className="mt-4 text-sm list-disc pl-4 leading-7">
                    <li>web制作</li>
                    <li>シンボルマーク</li>
                    <li>ロゴマーク</li>
                    <li>パッケージ</li>
                    <li>サイン</li>
                    <li>PRツール</li>
                    <li>イベント会場等のディレクション</li>
                    <li>デザインのサブスクリプション契約</li>
                    <li>ブランドを象徴する香りの提案</li>
                    <li>その他クリエイティブ</li>
                </ul>

                <h3 className="mt-8"><span className="text-xs bg-white font-medium py-0.5 px-2 inline-block tracking-wider jost">PRODUCTS</span></h3>
                <h4 className="mt-4 text-lg">混ぜるな危険</h4>
                <p className="text-gray-500 text-xs mt-3 leading-5">「香り」で、世界の解像度は上がる。「混ぜるな危険」は「香り」と接続してこなかった「何か」を繋げていくプロジェクトチーム。</p>
                <a href="https://mazerunakiken.net/" target="_blank" className="block border-2 bg-white border-black rounded-full text-xs text-center py-2 mt-4 jost">MORE</a>

                <h4 className="mt-6 text-lg">hunch</h4>
                <p className="text-gray-500 text-xs mt-3 leading-5">虫たちと一緒に出会う、新しい尺度。 虫と共創するジュエリーブランド。</p>
                <a href="#" className="block border-2 bg-white border-black rounded-full text-xs text-center py-2 mt-4 jost">MORE</a>
            </div>
            <NavFooter />
        </div>
    )
}