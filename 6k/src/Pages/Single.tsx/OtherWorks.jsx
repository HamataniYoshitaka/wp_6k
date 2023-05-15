import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { format } from "date-fns";
import { apiUrl } from "../../utils";

export default function OtherWorks(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    const [slidesToShow, setSlidesToShow] = useState(0)
    const [posts, setPosts] = useState([])
    const { ref, inView } = useInView({
        threshold: 0
    })
    useEffect(() => {
        if (inView && posts.length === 0){
            axios.get(apiUrl() +'/wp-json/wp/6k/artworks').then(res => {
                setPosts(res.data)
            })
        }
    }, [inView])
    useEffect(() => {
        // すべてのpostsが画面に収まっているかどうかを判定
        // console.log(posts.length*334, windowWidth)
        if (posts.length > 0 && windowWidth > 0) {
            if (posts.length*334 <= windowWidth){
                setSlidesToShow(0)
            } else {
                setSlidesToShow(windowWidth/334)
            }    
        }
    }, [windowWidth, posts])
    return (
        <div ref={ref} className="">
            <h3 className="text-center text-3xl jost">OTHER WORKS</h3>
            <h6 className="text-center text-xs mt-3 mb-10">他のワークスを見る</h6>
            {posts.length > 0 && (
                <>
                {slidesToShow === 0? (
                    <div className="flex justify-center items-center">
                        {posts.map((post, i) => (
                            <div key={'otherpost-'+i} className="p-6">
                                <div className="w-[310px] h-[490px] relative">
                                    <div className="absolute left-0 w-full h-full bg-white rounded-lg transition-all duration-1000 drop-shadow-[0_1px_7px_rgba(0,0,0,0.15)] ">
                                    </div>
                                    <div className="group absolute left-0 w-full h-full bg-white rounded-lg overflow-hidden transition-all duration-500 ">
                                        <img src={post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
                                        {post.title.rendered}
                                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center space-y-4 items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-4">
                                            <h5 className="text-white text-2xl">{post.title}</h5>
                                            <ul className=" space-x-3">
                                                {post.tag.map((tag) =>(
                                                    <li key={'post-'+post.id+'-tag-'+tag.id} className="inline-block jost">
                                                        <span className="inline-block text-xs py-0.5 px-3 bg-white text-black">{tag.name}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-sm text-white cormorant tracking-wider">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                            <Link to={'/posts/'+post.slug} className="jost border-1.5 border-black bg-white text-black block w-52 py-2 text-center rounded-full text-xs transition-colors hover:bg-black hover:text-white">MORE</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ): (
                    <Swiper
                        loop
                        slidesPerView={slidesToShow}
                        centeredSlides
                        // allowTouchMove={windowWidth<576}
                        speed={600}

                    >
                        {posts.map((post, i) => (
                            <SwiperSlide key={'otherpost-'+post.id}>
                                <div className="p-4 md:p-6">
                                    <div className="w-full h-[490px] relative">
                                        <div className="absolute left-0 w-full h-full bg-white rounded-lg transition-all duration-1000 drop-shadow-[0_1px_7px_rgba(0,0,0,0.15)] ">
                                        </div>
                                        <div className="group absolute left-0 w-full h-full bg-white rounded-lg overflow-hidden transition-all duration-500 ">
                                            <img src={post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
                                            {post.title.rendered}
                                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center space-y-4 items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-4">
                                                <h5 className="text-white text-2xl">{post.title}</h5>
                                                <ul className=" space-x-3">
                                                    {post.tag.map((tag) =>(
                                                        <li key={'post-'+post.id+'-tag-'+tag.id} className="inline-block jost">
                                                            <span className="inline-block text-xs py-0.5 px-3 bg-white text-black">{tag.name}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="text-sm text-white cormorant tracking-wider">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                                <Link to={'/posts/'+post.slug} className="jost border-1.5 border-black bg-white text-black block w-52 py-2 text-center rounded-full text-xs transition-colors hover:bg-black hover:text-white">MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {posts.map((post, i) => (
                            <SwiperSlide key={'otherpost-1-'+post.id}>
                                <div className="p-4 md:p-6">
                                    <div className="w-full h-[490px] relative">
                                        <div className="absolute left-0 w-full h-full bg-white rounded-lg transition-all duration-1000 drop-shadow-[0_1px_7px_rgba(0,0,0,0.15)] ">
                                        </div>
                                        <div className="group absolute left-0 w-full h-full bg-white rounded-lg overflow-hidden transition-all duration-500 ">
                                            <img src={post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
                                            {post.title.rendered}
                                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center space-y-4 items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-4">
                                                <h5 className="text-white text-2xl">{post.title}</h5>
                                                <ul className=" space-x-3">
                                                    {post.tag.map((tag) =>(
                                                        <li key={'post-'+post.id+'-tag-'+tag.id} className="inline-block jost">
                                                            <span className="inline-block text-xs py-0.5 px-3 bg-white text-black">{tag.name}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="text-sm text-white cormorant tracking-wider">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                                <Link to={'/posts/'+post.slug} className="jost border-1.5 border-black bg-white text-black block w-52 py-2 text-center rounded-full text-xs transition-colors hover:bg-black hover:text-white">MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </>
            )}
        </div>
    )
}