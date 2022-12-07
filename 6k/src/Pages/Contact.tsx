import React from "react";
import NavFooter from "../Components/NavFooter";

export default function Contact(props: any) {
    return (
        <div className="bg-gray-300 pt-32 pb-20 relative">
            <div className="fixed z-0 inset-0 overflow-hidden">
                <h1 className="absolute top-[calc(50vw-0px)] left-0 text-transparent text-blur text-[160px] tracking-widest cormorant">CONTACT</h1>
            </div>
            <div className="px-16 relative">
                <h2 className="text-center text-sm">お問合せ</h2>
                <hr className="w-4 mx-auto border-black my-3"/>
                <div className="space-y-4 mt-6">
                    <div>
                        <label className="text-xs">お名前 ※必須</label>
                        <input type="text" className="bg-white block w-full border-2 border-black px-3 py-2 text-sm mt-2" />
                    </div>
                    <div>
                        <label className="text-xs">フリガナ ※必須</label>
                        <input type="text" className="bg-white block w-full border-2 border-black px-3 py-2 text-sm mt-2" />
                    </div>
                    <div>
                        <label className="text-xs">御社名</label>
                        <input type="text" className="bg-white block w-full border-2 border-black px-3 py-2 text-sm mt-2" />
                    </div>
                    <div>
                        <label className="text-xs">御社名 フリガナ</label>
                        <input type="text" className="bg-white block w-full border-2 border-black px-3 py-2 text-sm mt-2" />
                    </div>
                    <div>
                        <label className="text-xs">電話番号</label>
                        <input type="text" className="bg-white block w-full border-2 border-black px-3 py-2 text-sm mt-2" />
                    </div>
                    <div>
                        <label className="text-xs">メールアドレス ※必須</label>
                        <input type="email" className="bg-white block w-full border-2 border-black px-3 py-2 text-sm mt-2" />
                    </div>
                    <div>
                        <label className="text-xs">気になったプロジェクト</label>
                        <input type="email" className="bg-white block w-full border-2 border-black px-3 py-2 text-sm mt-2" />
                    </div>
                    <div>
                        <label className="text-xs">お問い合わせの内容 ※必須</label>
                        <textarea rows={5} className="bg-white block w-full border-2 border-black px-3 py-2 text-sm mt-2"></textarea>
                    </div>

                    <div>
                        <label className="text-xs">
                            <input type="checkbox" className="mr-1"/>
                            プライバシーポリシーに同意する
                        </label>
                    </div>

                    <button className="block w-full bg-black text-white text-center text-xs py-3">送信</button>

                </div>

            </div>
            <div className="my-8 px-8">
                <hr className="border-t-2 border-black"/>
            </div>
            <div className="fixed bottom-14 left-0 z-10 w-full">
                <NavFooter />
            </div>
        </div>

    )
}