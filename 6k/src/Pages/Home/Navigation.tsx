import React from "react";

export default function HomeNavigation(props: any) {
    return (
        <>
        <nav className="fixed top-32 left-4 z-10">
            <ul>
                <li>
                    <button className="text-sm">全て</button>
                </li>
                {['視覚', '嗅覚', '立体', '企画', '妄想'].map((title, i) => (
                    <li>
                        <button>{title}</button>
                    </li>
                ))}
            </ul>
        </nav>
        <nav className="fixed top-32 right-4 z-10">
            <ul className="w-12 space-y-3">
                <li>
                    <button onClick={()=>props.setIsSingleView(true)} className={`block w-full text-center py-1 transition-all ${props.isSingleView? 'text-sm bg-[#00FFEB]': 'text-xs text-slate-400'}`}>単体</button>
                </li>
                <li>
                    <button onClick={()=>props.setIsSingleView(false)} className={`block w-full text-center py-1 transition-all ${!props.isSingleView? 'text-sm bg-[#00FFEB]': 'text-xs text-slate-400'}`}>一覧</button>
                </li>
            </ul>
        </nav>
        </>
    )
}