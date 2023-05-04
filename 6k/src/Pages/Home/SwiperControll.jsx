import React, { useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSelector } from "react-redux";

export default function SwiperControll(props) {
    const posts = useSelector((state) => state.product.posts)

    const [swiper, setSwiper] = useState(null)

    const onClickNext = () => {
        props.slideNext()
        swiper.slideNext()
    }
    const onClickPrev = () => {
        props.slidePrev()
        swiper.slidePrev()
    }
    const onClickPage = (index: number) => {
        props.slideToLoop(index)
        swiper.slideToLoop(index)
    }
    return (
        <div className=" w-full z-10 relative -mt-16">
            <div className="flex justify-center items-end">
                <div>
                    <button onClick={()=>onClickPrev()} className="text-black p-4">
                        <svg className="w-2 h-2" viewBox="0 0 4.37 5.24">
                            <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                        </svg>
                    </button>
                </div>
                <div className="max-w-[220px]">
                    <Swiper
                        loop
                        centeredSlides
                        slidesPerView={5}
                        id="pagination"
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        {posts.map((post, i:number)=>(
                            <SwiperSlide key={'indicator-'+post.id}>
                                <button onClick={()=>onClickPage(i)} className="flex justify-center items-end py-2 w-[44px] text-gray-500 transition-all duration-300 jost">{i+1}</button>
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
                <div className="text-center jost">{posts.length}</div>
            </div>

        </div>
    )
}