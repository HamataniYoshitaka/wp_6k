import React, { useEffect, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import SwiperControll from "./SwiperControll";
import { useWindowSize } from "../../hooks/useWindowSize";
import SingleCard from "./SingleCard";
import ShadowTitle from "./ShadowTitle";
import { useSelector } from "react-redux";

export default function SwiperSix(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    const [swiper, setSwiper] = useState(null)
    const [realIndex, setRealIndex] = useState(0)
    const [shadowTitleScene, setShadowTitleScene] = useState(-1)
    const [pagerShowing, setPagerShowing] = useState(false)
    const openingShown = useSelector((state) => state.product.openingShown)

    useEffect(() => {
        if(props.posts.length > 0 && openingShown) {
            setTimeout(() => {
                setPagerShowing(true)
                setShadowTitleScene(0)
            }, 500)
        }
    }, [openingShown])

    const slideNext = () => {
        console.log('slideNext')
        swiper.slideNext()
    }
    const slidePrev = () => {
        console.log('slidePrev', realIndex, props.posts.length)
        swiper.slidePrev()
    }
    const slideToLoop = (index) => {
        console.log('slideToLoop')
        // swiper.slideToLoop(index)
        swiper.slideToLoop(index)
    }

    return (
        <>
            {(props.posts.length > 0) && (      
                <>
                    {/* 背景のタイトル */}
                    {swiper && (
                        <ShadowTitle post={props.posts[realIndex]} shadowTitleScene={shadowTitleScene} setShadowTitleScene={setShadowTitleScene} />
                    )}
                    <div className={`pt-20 md:pt-[calc(50vh-260px-40px)] relative`}>
                        <div className="xl:max-w-[1110px] md:mx-auto relative" >

                            <Swiper
                                loop
                                centeredSlides
                                slidesPerView={windowWidth<576? 1: windowWidth<=768? 1.9: windowWidth<=820? 2: 3}
                                // allowTouchMove={windowWidth<576}
                                speed={600}
                                onInit={(swiper) => {setSwiper(swiper); console.log('swiper1',swiper)}}
                                onSlideChangeTransitionEnd={(swiper1) => {setRealIndex(swiper1.realIndex);setShadowTitleScene(0)}}
                                // onRealIndexChange={(swiper1) => {console.log('realIndexChange', swiper1.realIndex)}}
                                onBeforeTransitionStart={(swiper) => setShadowTitleScene(-1)}
                                grabCursor={true}
                            >
                                {props.posts.map((post, i) => (
                                    <SwiperSlide key={'post-'+post.id} className="top-single-swiper">
                                        <div className="p-4">
                                            <SingleCard post={post} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {props.posts.length && (
                                <SwiperControll posts={props.posts} slideNext={slideNext} slidePrev={slidePrev} slideToLoop={slideToLoop} realIndex={realIndex} pagerShowing={pagerShowing}/>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
        
    )
}