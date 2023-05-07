import React, { useState } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { Link } from 'react-router-dom'
import SwiperControll from "./SwiperControll";

export default function HomeSingle(props) {
    const [dragging, setDragging] = useState(false)
    const posts = useSelector((state) => state.product.posts)
    const [swiper, setSwiper] = useState(null)
    const slideNext = () => {
        swiper.slideNext()
    }
    const slidePrev = () => {
        swiper.slidePrev()
    }
    const slideToLoop = (index) => {
        swiper.slideToLoop(index)
    }
    return (
        <div className="pt-32 pb-20- relative">
            <div className="md:max-w-[332px] md:mx-auto relative">
                <Swiper
                    loop
                    onSwiper={(swiper) => setSwiper(swiper)}
                    onBeforeTransitionStart={() => setDragging(true)}
                    onTransitionEnd={() => setDragging(false)}
                    onTouchStart={(swiperSrc) => {
                        setDragging(true)
                        // TODO: indicator のindexを揃える
                        swiper.slideToLoop(swiperSrc.activeIndex)
                    }}
                >
                    {posts.map((post, i) => (
                        <SwiperSlide key={'post-'+post.id}>
                            <div className="p-4">
                                <Link to={'/posts/'+post.slug} className={`block h-[calc(100vh-270px)] md:h-[520px] bg-white rounded-lg transition-all ${dragging? 'drop-shadow-[0_0_0_rgba(0,0,0,0.20)]': 'drop-shadow-[0_1px_10px_rgba(0,0,0,0.20)]'}  overflow-hidden relative`}>
                                    <img src={post._embedded['wp:featuredmedia'][0].source_url} className="absolute top-0 left-0 w-full h-full object-cover" />
                                    <p className="absolute bottom-32 left-10 origin-top-left rotate-90 cormorant lowercase">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                    <ul className="absolute bottom-10 right-0 text-xs text-right space-y-2">
                                        {post._embedded['wp:term'][1].map((tag) =>(
                                            <li key={'post-'+post.id+'-tag-'+tag.id}>
                                                <span className="inline-block py-0.5 px-1 bg-gray-400 text-white">{tag.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="absolute top-14 right-0 text-right"><span className="inline-block py-1 px-2 bg-black text-white">{post.title.rendered}</span></h3>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {posts.length && (
                    <SwiperControll slideNext={slideNext} slidePrev={slidePrev} slideToLoop={slideToLoop}/>
                )}
            </div>
        </div>
    )
}