import React, { useEffect, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { Link } from 'react-router-dom'
import SwiperControll from "./SwiperControll";

const duration = 25
let timer = null    // #shadow-titleのsceneを更新するためのタイマー

export default function HomeSingle(props) {
    useEffect(() => {
        if (props.posts.length) {
            setTimeout(() => {
                props.setNowLoading(false)
            }, 100)
        }
    }, [props.posts])

    const [swiper, setSwiper] = useState(null)
    const [realIndex, setRealIndex] = useState(0)
    const [shadowTitleWidth, setShadowTitleWidth] = useState(0)
    const [shadowTitleScene, setShadowTitleScene] = useState(-1)

    const slideNext = () => {
        console.log('slideNext')
        swiper.slideNext()
    }
    const slidePrev = () => {
        console.log('slidePrev')
        swiper.slidePrev()
    }
    const slideToLoop = (index) => {
        console.log('slideToLoop')
        swiper.slideToLoop(index)
    }
    useEffect(() => {
        // #shadow-titleのwidthを更新
        if (shadowTitleScene === 0){
            clearTimeout(timer)
            setTimeout(() => {
                setShadowTitleScene(1)
            }, 600)
        }
        const shadowTitle = document.getElementById('shadow-title')
        if (shadowTitle && shadowTitleScene === 1){
            setShadowTitleWidth(shadowTitle.offsetWidth)
            timer = setTimeout(() => {
                setShadowTitleScene(2)
            }, duration*1000-1000)
        }
    }, [shadowTitleScene])


    const shadowTitleStyle = (width) => {
        const css = `
            .shadow-title-frame {
                animation: shadowTitleAnimation ${duration}s linear infinite;
            }
            @keyframes shadowTitleAnimation {
                0% {
                    transform:translateX(0);
                }
                100% {
                    transform:translateX(-${(width+48)*2}px);
                }
            }
        `
        return (
            <style>
                {css}
            </style>
        )
    }
    return (
        <div className={` transition-opacity duration-300 ${props.nowLoading? 'opacity-0': 'opacity-100'}`}>
            {shadowTitleStyle(shadowTitleWidth)}
            {(props.posts.length > 0) && (      
                <>
                {/* 背景のタイトル */}
                {swiper && (
                    <>
                        <div className={`fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none transition-opacity duration-500 ${shadowTitleScene===2? 'z-0': 'z-10'} ${shadowTitleScene<=0? 'opacity-0': 'opacity-100'}`}>
                            <div className={`relative ${shadowTitleScene!==0 && 'shadow-title-frame'}`}>
                                <p className={`z-10 absolute whitespace-nowrap top-[calc(50vh-200px)] text-transparent text-blur text-[260px] tracking-widest cormorant opacity-40`} style={{left:window.innerWidth/2+100-(shadowTitleWidth+48)*2}}>
                                    <span className="mr-12">{props.posts[realIndex] && props.posts[realIndex].shadow_text}</span><span className="mr-12">{props.posts[realIndex] && props.posts[realIndex].shadow_text}</span>
                                </p>                            
                                <h2 id="shadow-title" className=" z-10 left-[calc(50vw+100px)] absolute whitespace-nowrap top-[calc(50vh-200px)] text-transparent text-blur text-[260px] tracking-widest cormorant opacity-40">{props.posts[realIndex] && props.posts[realIndex].shadow_text}</h2>
                            </div>
                        </div>
                        <div className={`fixed z-0 top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none transition-opacity duration-500 ${shadowTitleScene<=0? 'opacity-0': 'opacity-100'}`}>
                            <div className={`relative ${shadowTitleScene!==0 && 'shadow-title-frame'}`}>
                                <p className={`z-10 absolute whitespace-nowrap top-[calc(50vh-200px)] text-transparent text-blur text-[260px] tracking-widest cormorant opacity-40`} style={{left:window.innerWidth/2+100+shadowTitleWidth+48}}>
                                    <span className="mr-12">{props.posts[realIndex] && props.posts[realIndex].shadow_text}</span><span className="mr-12">{props.posts[realIndex] && props.posts[realIndex].shadow_text}</span><span>{props.posts[realIndex] && props.posts[realIndex].shadow_text}</span>
                                </p>
                            </div>
                        </div>
                    </>
                )}
                <div className={`pt-32 pb-20- relative`}>
                    <div className="xl:max-w-[1101px] md:mx-auto relative" >
                        <Swiper
                            loop
                            centeredSlides
                            slidesPerView={3}
                            allowTouchMove={false}
                            speed={600}
                            onInit={(swiper) => {setSwiper(swiper); console.log('swiper1',swiper)}}
                            onSlideChangeTransitionEnd={(swiper1) => {setRealIndex(swiper1.realIndex);setShadowTitleScene(0)}}
                            onBeforeTransitionStart={(swiper) => setShadowTitleScene(-1)}
                        >
                            {props.posts.map((post, i) => (
                                <SwiperSlide key={'post-'+post.id} className="top-single-swiper">
                                    <div className="p-4">
                                        <Link to={'/posts/' + post.slug} className={`block h-[calc(100vh-270px)] md:h-[520px] bg-white rounded-lg transition-all drop-shadow-[0_1px_10px_rgba(0,0,0,0.20)] overflow-hidden relative`}>
                                            <img src={post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
                                            <p className="absolute bottom-32 left-10 origin-top-left rotate-90 cormorant lowercase">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                            <ul className="absolute bottom-10 right-0 text-xs text-right space-y-2">
                                                {post.tag.map((tag) =>(
                                                    <li key={'post-'+post.id+'-tag-'+tag.id}>
                                                        <span className="inline-block py-0.5 px-1 bg-gray-400 text-white">{tag.name}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <h3 className="absolute top-14 right-0 text-right"><span className="inline-block py-1 px-2 bg-black text-white">{post.title}</span></h3>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {props.posts.length && (
                            <SwiperControll posts={props.posts} slideNext={slideNext} slidePrev={slidePrev} slideToLoop={slideToLoop}/>
                        )}
                    </div>
                </div>
                </>
            )}
        </div>
    )
}