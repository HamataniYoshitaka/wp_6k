import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

export default function HomeNavigation(props) {
    const categories = useSelector((state) => state.product.categories)
    const openingShown = useSelector((state) => state.product.openingShown)
    const [showing, setShowing] = useState(false)

    useEffect(() => {
        if (openingShown) {
            setTimeout(() => {
                setShowing(true)
            }, 100)
        }
    }, [openingShown])

    return (
        <>
        <nav className="fixed top-28 md:top-36 left-4 md:left-[22px] z-10">
            <ul className="w-12 space-y-3">
                <li className={`transition-opacity duration-500 ${showing? 'opacity-100': 'opacity-0'}`} style={{transitionDelay: '100ms'}}>
                    <button onClick={()=>props.setSelectedCategoryId(-1)} className={`block w-full text-center pt-1 pb-0.5 transition-all ${props.selectedCategoryId===-1? 'text-sm bg-[#00FFEB]': 'text-xs text-slate-400'}`}>全て</button>
                </li>
                {categories.map((category, i) => (
                    <li key={'category-'+category.id} className={`transition-opacity duration-500 ${showing? 'opacity-100': 'opacity-0'}`} style={{transitionDelay: (200+100*i)+'ms'}}>
                        <button onClick={()=>props.setSelectedCategoryId(category.id)} className={`block w-full text-center pt-1 pb-0.5 transition-all ${props.selectedCategoryId===category.id? 'text-sm bg-[#00FFEB]': 'text-xs text-slate-400'}`}>{category.name}</button>
                    </li>
                ))}
            </ul>
        </nav>
        <nav className="fixed top-28 md:top-36 right-[22px] z-10">
            <ul className="w-12 space-y-3">
                <li className={`transition-opacity duration-500 ${showing? 'opacity-100': 'opacity-0'}`} style={{transitionDelay: '100ms'}}>
                    <button onClick={()=>props.changeView(true)} className={`block w-full text-center pt-1 pb-0.5 relative transition-all ${props.isSingleView? 'text-sm': 'text-xs text-slate-400'}`}>
                        <div className={`absolute inset-0 bg-[#00FFEB] transition-all ${props.isSingleView? 'opacity-100 scale-100': 'opacity-0 scale-50'}`}></div>
                        <span className="relative">単体</span>
                    </button>
                </li>
                <li className={`transition-opacity duration-500 ${showing? 'opacity-100': 'opacity-0'}`} style={{transitionDelay: '200ms'}}>
                    <button onClick={()=>props.changeView(false)} className={`block relative w-full text-center pt-1 pb-0.5 transition-all ${!props.isSingleView? 'text-sm': 'text-xs text-slate-400'}`}>
                        <div className={`absolute inset-0 bg-[#00FFEB] transition-all ${!props.isSingleView? 'opacity-100 scale-100': 'opacity-0 scale-50'}`}></div>
                        <span className="relative">一覧</span>
                    </button>
                </li>
            </ul>
        </nav>
        </>
    )
}