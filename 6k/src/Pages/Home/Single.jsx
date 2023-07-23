import React, { useEffect } from "react";
import 'swiper/css'
import { useWindowSize } from "../../hooks/useWindowSize";
import SwiperThree from "./SwiperThree";
import SwiperSix from "./SwiperSix";
import SwiperOne from "./SwiperOne";

export default function HomeSingle(props) {
    const [windowWidth, windowHeight] = useWindowSize()

    useEffect(() => {
        // if (props.posts.length) {
            setTimeout(() => {
                props.setNowLoading(false)
            }, 400)
        // }
    }, [props.posts])

    return (
        <div className={` transition-opacity duration-300 ${props.nowLoading? 'opacity-0': 'opacity-100'}`}>
            {(props.posts.length && props.posts.length == 1)?  (
                <SwiperOne posts={props.posts}/>
            ): (props.posts.length && props.posts.length >=2 && props.posts.length <=5)? (
                <SwiperThree posts={props.posts}/>
            ): (props.posts.length && props.posts.length >=6)? (
                <SwiperSix posts={props.posts}/>
            ): (
                <div className="w-screen h-screen flex items-center justify-center text-gray-400">
                    no works.
                </div>
            )}
        </div>
    )
}