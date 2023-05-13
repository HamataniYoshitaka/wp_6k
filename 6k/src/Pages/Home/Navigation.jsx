import React from "react";
import { useSelector } from 'react-redux'

export default function HomeNavigation(props) {
    const categories = useSelector((state) => state.product.categories)

    return (
        <>
        <nav className="fixed top-32 left-4 z-10">
            <ul className="w-12 space-y-3">
                <li>
                    <button onClick={()=>props.setSelectedCategoryId(-1)} className={`block w-full text-center py-1 transition-all ${props.selectedCategoryId===-1? 'text-sm bg-[#00FFEB]': 'text-xs text-slate-400'}`}>全て</button>
                </li>
                {categories.map((category, i) => (
                    <li key={'category-'+category.id}>
                        <button onClick={()=>props.setSelectedCategoryId(category.id)} className={`block w-full text-center py-1 transition-all ${props.selectedCategoryId===category.id? 'text-sm bg-[#00FFEB]': 'text-xs text-slate-400'}`}>{category.name}</button>
                    </li>
                ))}
            </ul>
        </nav>
        <nav className="fixed top-32 right-4 z-10">
            <ul className="w-12 space-y-3">
                <li>
                    <button onClick={()=>props.changeView(true)} className={`block w-full text-center py-1 relative transition-all ${props.isSingleView? 'text-sm': 'text-xs text-slate-400'}`}>
                        <div className={`absolute inset-0 bg-[#00FFEB] transition-all ${props.isSingleView? 'opacity-100 scale-100': 'opacity-0 scale-50'}`}></div>
                        <span className="relative">単体</span>
                    </button>
                </li>
                <li>
                    <button onClick={()=>props.changeView(false)} className={`block relative w-full text-center py-1 transition-all ${!props.isSingleView? 'text-sm': 'text-xs text-slate-400'}`}>
                        <div className={`absolute inset-0 bg-[#00FFEB] transition-all ${!props.isSingleView? 'opacity-100 scale-100': 'opacity-0 scale-50'}`}></div>
                        <span className="relative">一覧</span>
                    </button>
                </li>
            </ul>
        </nav>
        </>
    )
}