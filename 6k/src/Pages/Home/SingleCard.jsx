import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function SingleCard(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    return (
        <Link to={'/posts/' + props.post.slug} className={`block bg-white rounded-lg transition-all shadow-[0_1px_15px_rgba(0,0,0,0.20)] overflow-hidden relative`} style={{height: windowWidth<576? windowHeight-220: 520}}>
            <img src={props.post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
            <p className={`absolute bottom-4 -left-44 text-right w-48 origin-bottom-right rotate-90 cormorant lowercase tracking-wider ${windowHeight<600 && 'hidden'}`}>{format(new Date(props.post.date), 'yyyy.MM.dd / EEEE')}</p>
            <ul className="absolute bottom-4 right-0  text-right space-y-2">
                <li>
                    <h3 className=""><span className="inline-block py-1 px-2 bg-black text-white">{props.post.title}</span></h3>
                </li>
                {props.post.tag.map((tag) =>(
                    <li key={'post-'+props.post.id+'-tag-'+tag.id}>
                        <span className="inline-block text-xs py-0.5 px-1 bg-gray-400 text-white jost tracking-wider">{tag.name}</span>
                    </li>
                ))}
            </ul>
        </Link>
    )
}