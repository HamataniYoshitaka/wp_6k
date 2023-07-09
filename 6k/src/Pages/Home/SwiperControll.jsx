import React, { useEffect, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSelector } from "react-redux";

export default function SwiperControll(props) {

    const [swiper, setSwiper] = useState(null)
    const [prevIndex, setPrevIndex] = useState(0)
    const [indicators, setIndicators] = useState([])
    useEffect(() => {
        // postsが2の時は3倍数のindicatorを作成
        if (props.posts.length == 2) {
            let newIndicators = []
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 2; j++) {
                    newIndicators.push(j)
                }
            }
            setIndicators(newIndicators)
        } else if (props.posts.length == 3) {
            let newIndicators = []
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 3; j++) {
                    newIndicators.push(j)
                }
            }
            setIndicators(newIndicators)
        } else {
            let newIndicators = []
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < props.posts.length; j++) {
                    newIndicators.push(j)
                }
            }
            console.log(newIndicators)
            setIndicators(newIndicators)
        }
    }, [props.posts])

    const onClickNext = () => {
        props.slideNext()
        // swiper.slideNext()
    }
    const onClickPrev = () => {
        props.slidePrev()
        // swiper.slidePrev()
    }
    const onClickPage = (label, index) => {
        props.slideToLoop(label)
        setPrevIndex(label)
        swiper.slideToLoop(index)
    }
    useEffect(() => {
        if (swiper) {
            if (props.realIndex===prevIndex) return
            // console.log('props.realIndex'+props.realIndex)
            if (prevIndex===0&&props.realIndex!==1) swiper.slidePrev()
            else if (props.realIndex===0&&prevIndex!==1) swiper.slideNext()
            else (props.realIndex>prevIndex)? swiper.slideNext(): swiper.slidePrev()
            setPrevIndex(props.realIndex)
        }
    }, [props.realIndex])
    return (
        <div className={` w-full z-10 relative -mt-16 transition-all duration-1000 ${props.pagerShowing? 'translate-y-0 opacity-1000': ' translate-y-10 opacity-0'}`}>
            <div className="flex justify-center items-end">
                <div>
                    <button onClick={()=>onClickPrev()} className="text-black p-4">
                        <svg className="w-2 h-2" viewBox="0 0 4.37 5.24">
                            <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                        </svg>
                    </button>
                </div>
                <div className={`${props.posts.length<=3? 'max-w-[140px]': 'max-w-[220px]' }`}>
                    <Swiper
                        loop
                        centeredSlides
                        slidesPerView={props.posts.length<=3? 3: 5}
                        id="pagination"
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        {indicators.map((label, index)=>(
                            <SwiperSlide key={'indicator-'+index}>
                                <button onClick={()=>onClickPage(label, index)} className="flex justify-center items-end py-2 w-[44px] text-gray-500 transition-all duration-300 jost focus-visible:ring-0">{label+1}</button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div>
                    <button onClick={()=>onClickNext()} className="text-black p-4">
                        <svg className="w-2 h-2 -scale-x-100" viewBox="0 0 4.37 5.24">
                            <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                        </svg>
                    </button>
                </div>
    
            </div>
            <div className="absolute -bottom-4 left-[calc(50%-20px)] w-10">
                <hr className="border border-black w-4 mx-auto my-2"/>
                <div className="text-center jost">{props.posts.length}</div>
            </div>

        </div>
    )
}