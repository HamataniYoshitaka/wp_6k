import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { format } from "date-fns";
import { apiUrl } from "../../utils";

export default function SameProjects(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    const [slidesToShow, setSlidesToShow] = useState(0)
    const [posts, setPosts] = useState([])
    const { ref, inView } = useInView({
        threshold: 0
    })
    useEffect(() => {
        if (inView && posts.length === 0){
            axios.get(apiUrl() +'/wp-json/wp/6k/same_projects?slug='+props.slug).then(res => {
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
                if (windowWidth >= 768) {
                    setSlidesToShow(windowWidth/334)
                } else {
                    setSlidesToShow(windowWidth/306)
                }
            }    
        }
    }, [windowWidth, posts])
    return (
        <div ref={ref} className="min-h-[626px] md:min-h-[642px]">
            <h3 className="text-center text-3xl jost">SAME PROJECTS</h3>
            <h6 className="text-center text-xs mt-3 mb-10">同プロジェクトの他のワークス</h6>
            {posts.length > 0 && (
                <>
                {slidesToShow === 0? (
                    <div className="flex justify-center items-center">
                        {posts.map((post, i) => (
                            <div key={'sameproject-'+i} className="p-6">
                                <Link to={'/posts/' + post.slug} className={`block bg-white rounded-lg shadow-[0_1px_15px_rgba(0,0,0,0.20)] overflow-hidden relative w-[310px] h-[490px]`}>
                                    <img src={post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
                                    <p className={`absolute bottom-4 -left-44 text-right w-48 origin-bottom-right rotate-90 cormorant lowercase tracking-wider`}>{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                    <ul className="absolute bottom-4 right-0  text-right space-y-2">
                                        <li>
                                            <h3 className=""><span className="inline-block py-1 px-2 bg-black text-white">{post.title}</span></h3>
                                        </li>
                                        {post.tag.map((tag) =>(
                                            <li key={'post-'+post.id+'-tag-'+tag.id}>
                                                <span className="inline-block text-xs py-0.5 px-1 bg-gray-400 text-white jost tracking-wider">{tag.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Link>

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
                            <SwiperSlide key={'sameproject-'+i}>
                                <div className="p-2 md:p-6">
                                    <Link to={'/posts/' + post.slug} className={`block bg-white rounded-lg shadow-[0_1px_15px_rgba(0,0,0,0.20)] overflow-hidden relative w-[286px] h-[490px]`}>
                                        <img src={post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
                                        <p className={`absolute bottom-4 -left-44 text-right w-48 origin-bottom-right rotate-90 cormorant lowercase tracking-wider`}>{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                        <ul className="absolute bottom-4 right-0  text-right space-y-2">
                                            <li>
                                                <h3 className=""><span className="inline-block py-1 px-2 bg-black text-white">{post.title}</span></h3>
                                            </li>
                                            {post.tag.map((tag) =>(
                                                <li key={'post-'+post.id+'-tag-'+tag.id}>
                                                    <span className="inline-block text-xs py-0.5 px-1 bg-gray-400 text-white jost tracking-wider">{tag.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                        {posts.map((post, i) => (
                            <SwiperSlide key={'sameproject-1-'+i}>
                                <div className="p-2 md:p-6">
                                    <Link to={'/posts/' + post.slug} className={`block bg-white rounded-lg shadow-[0_1px_15px_rgba(0,0,0,0.20)] overflow-hidden relative w-[286px] h-[490px]`}>
                                        <img src={post.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
                                        <p className={`absolute bottom-4 -left-44 text-right w-48 origin-bottom-right rotate-90 cormorant lowercase tracking-wider`}>{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                        <ul className="absolute bottom-4 right-0  text-right space-y-2">
                                            <li>
                                                <h3 className=""><span className="inline-block py-1 px-2 bg-black text-white">{post.title}</span></h3>
                                            </li>
                                            {post.tag.map((tag) =>(
                                                <li key={'post-'+post.id+'-tag-'+tag.id}>
                                                    <span className="inline-block text-xs py-0.5 px-1 bg-gray-400 text-white jost tracking-wider">{tag.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Link>
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