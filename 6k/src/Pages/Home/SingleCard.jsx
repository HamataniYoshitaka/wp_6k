import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useMousePosition } from "../../hooks/userMousePosition";
import { isMobile } from "react-device-detect";
import { useDispatch } from "react-redux";
import { setTransitionStarter } from "../../redux/product";

export default function SingleCard(props) {
    const mousePosition = useMousePosition()
    const [windowWidth, windowHeight] = useWindowSize()
    const shadowStyle = () => {
        if (isMobile) {
            return '0px 1px 15px rgba(0, 0, 0, 0.2)'
        }   

        // return         '-10px 0px 20px rgba(0, 0, 0, 0.2)'
        let x = (windowWidth/2 - mousePosition.x)
        let y = (windowHeight/2 - mousePosition.y)
        const length = Math.sqrt(x*x + y*y)
        x = x/length * Math.pow(length, 1/3)
        y = y/length * Math.pow(length, 1/3)
        // return x+'px '+y+'px '+ (length) +'px rgba(0, 0, 0, 0.2)'            
        return x+'px '+y+'px 15px rgba(0, 0, 0, 0.2)'            
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const linkTo = (path) => {
        dispatch(setTransitionStarter(true))
        setTimeout(()=>{
            navigate(path)
        }, 600)
    }
    return (
        <div onClick={()=>linkTo('/posts/'+props.post.slug)} className={`block bg-white rounded-lg overflow-hidden relative cursor-pointer`} style={{height: windowWidth<576? windowHeight-220: 520, boxShadow: shadowStyle()}}>
            <img src={props.post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
            <p className={`absolute bottom-4 -left-44 text-right w-48 origin-bottom-right rotate-90 cormorant lowercase tracking-wider ${windowHeight<600 && 'hidden'}`}>{format(new Date(props.post.date), 'yyyy.MM.dd / EEEE')}</p>
            <ul className="absolute bottom-4 right-0  text-right space-y-2">
                <li>
                    <h3 className="">
                        {props.post.title_multiline? (
                            <span className="inline pt-1 pb-0.5 px-2 bg-black text-white padded-multiline" dangerouslySetInnerHTML={{__html: props.post.title_multiline.replace(/\n/, '<br>')}}></span>
                        ): (
                            <span className="inline pt-1 pb-0.5 px-2 bg-black text-white">{props.post.title}</span>
                        )}
                    </h3>
                </li>
                {props.post.tag.map((tag) =>(
                    <li key={'post-'+props.post.id+'-tag-'+tag.id}>
                        <span className="inline-block text-xs py-0.5 px-1 bg-gray-400 text-white jost tracking-wider">{tag.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}