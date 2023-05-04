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
                {categories.map((category:any, i:number) => (
                    <li key={'category-'+category.id}>
                        <button onClick={()=>props.setSelectedCategoryId(category.id)} className={`block w-full text-center py-1 transition-all ${props.selectedCategoryId===category.id? 'text-sm bg-[#00FFEB]': 'text-xs text-slate-400'}`}>{category.name}</button>
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