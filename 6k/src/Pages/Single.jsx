import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import { apiUrl } from "../utils";
import { format } from "date-fns";
import NavFooter from "../Components/NavFooter";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { useSelector } from "react-redux";
import OtherWorks from "./Single.tsx/OtherWorks";
import { useReloadFonts } from "../hooks/useReloadFonts";
import SameProjects from "./Single.tsx/SameProjects";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Single(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    const reloadFonts = useReloadFonts()

    const categories = useSelector(state => state.product.categories)
    const [swiper, setSwiper] = useState(null)

    const { slug } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    useEffect(()=>{
        if (!slug) return 
        setPost(null)
        axios.get(apiUrl() +'/wp-json/wp/6k/artwork?slug='+slug).then(res => {
            console.log('res', res)
            if (!res.data.length) {
                navigate('/')
            } else {
                setPost(res.data[0])
            }
        }).catch(error => {
            navigate('/')
        })
    }, [slug])
    useEffect(()=>{
        if (post) {
            reloadFonts()
        }
    }, [post])
    return (
        <div className={`bg-[#E8E8E8] pt-24 md:pt-32 pb-20 relative transition-opacity duration-700 ${post? 'opacity-100': 'opacity-0'}`}>
            {post && (
                <>
                    <div className="md:w-[657px] mx-auto px-6 md:px-0">
                        <img src={post.fv_image} className=" w-full h-auto rounded-xl " />
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4">
                            <h1 className="text-2xl mt-3 order-3 md:order-1">{post.title}</h1>
                            <ul className="space-x-2 mt-2 order-2">
                                {post.category.map((cat) =>(
                                    <li key={'post-'+post.id+'-cat-'+cat.id} className="inline-block">
                                        <span className="text-xs inline-block py-0.5 px-1 bg-white text-black">{cat.name}</span>
                                    </li>
                                ))}
                                {post.tag.map((tag) =>(
                                    <li key={'post-'+post.id+'-tag-'+tag.id} className="inline-block">
                                        <span className="text-xs inline-block py-0.5 px-1 bg-white text-black">{tag.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="grow md:order-3"></div>
                            <p className="text-sm cormorant lowercase order-1 md:mt-2 md:order-4">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                        </div>
                        <hr className="my-6 border-black" />
                    </div>
                    <div className="md:w-[560px] px-6 md:px-0 mx-auto">
                        <div dangerouslySetInnerHTML={{__html: post.content}} className="text-xs md:text-sm leading-6 md:leading-8 single-content">
                        </div>
                    </div>
                    {post.details.length > 0 && (
                    <>
                    <div className="md:w-[560px] px-6 md:px-0 mx-auto mt-10">
                        <h6><span className="inline-block text-[#2EFFEB] bg-black py-0.5 px-2 text-xs md:text-lg font-semibold jost">detail</span></h6>
                    </div>
                    <div className="">
                        <div className="artwork-detail-swiper relative">
                            {post.details.length == 1 && (
                                <div className="max-w-[592px] mx-auto">
                                    <div className="p-6 md:p-4">
                                        <img src={post.details[0].image} className="w-full h-72 md:h-[445px] rounded-xl object-cover" />
                                        <p className="text-sm leading-7 mt-6">{post.details[0].description}</p>
                                    </div>
                                </div>
                            )}
                            {post.details.length >= 2 && (
                                <>
                                <Swiper
                                    loop
                                    centeredSlides
                                    slidesPerView={windowWidth<592? 1.3: windowWidth/592}
                                    onSwiper={(swiper) => setSwiper(swiper)}
                                    initialSlide={1}
                                >
                                    {post.details.map((detail, i) => (
                                        <SwiperSlide key={'detail-'+i}>
                                            <div className="p-2 md:p-4">
                                                <img src={detail.image} className="w-full h-72 md:h-[445px] rounded-xl object-cover" />
                                                <p className="text-sm leading-7 mt-6">{detail.description}</p>
                                            </div>
                                        </SwiperSlide> 
                                    ))}
                                    {post.details.length < 5 && post.details.map((detail, i) => (
                                        <SwiperSlide key={'detail-1-'+i}>
                                            <div className="p-4">
                                                <img src={detail.image} className="w-full h-72 md:h-[445px] rounded-xl object-cover" />
                                                <p className="text-sm leading-7 mt-6">{detail.description}</p>
                                            </div>
                                        </SwiperSlide> 
                                    ))}
                                    {post.details.length ===2 && post.details.map((detail, i) => (
                                        <SwiperSlide key={'detail-2-'+i}>
                                            <div className="p-4">
                                                <img src={detail.image} className="w-full h-72 md:h-[445px] rounded-xl object-cover" />
                                                <p className="text-sm leading-7 mt-6">{detail.description}</p>
                                            </div>
                                        </SwiperSlide> 
                                    ))}

                                </Swiper>
                                <button onClick={()=>swiper.slidePrev(700)} className="hidden md:block absolute z-10 left-[calc(50vw-330px)] top-56 rounded-full p-2 transition-opacity hover:bg-black/5">
                                    <svg className="w-5 h-5" viewBox="0 0 4.37 5.24">
                                        <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                                    </svg>
                                </button>
                                <button onClick={()=>swiper.slideNext(700)} className="hidden md:block absolute z-10 left-[calc(50vw+295px)] top-56 rounded-full p-2 transition-opacity hover:bg-black/5">
                                    <svg className="w-5 h-5 -scale-x-100" viewBox="0 0 4.37 5.24">
                                        <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                                    </svg>
                                </button>
                            </>
                            )}
                        </div>
                    </div>
                    </>
                    )}
                    <div className="md:w-[560px] px-6 md:px-0 mx-auto mt-10 pb-20">
                        <h6><span className="inline-block text-[#2EFFEB] bg-black py-0.5 px-2 text-xs md:text-lg font-semibold jost">trigger</span></h6>
                        <img src={post.trigger_image} className="w-full h-auto rounded-xl mt-6" />
                        <p className="text-xs md:text-sm leading-6 md:leading-8 mt-6">{post.trigger_description}</p>
                        <h6 className="mt-10"><span className="inline-block text-[#2EFFEB] bg-black py-0.5 px-2 text-xs md:text-lg font-semibold jost">credit</span></h6>
                        <p className="text-xs md:text-sm leading-6 md:leading-8 mt-5" dangerouslySetInnerHTML={{__html: post.credit.replace(/\n/g, "<br />")}}></p>
                        <hr className="my-6 border-black border-t-1.5" />
                        <p className="text-sm text-center">このプロジェクトで気になったことを聞いてみる</p>
                        <Link to={'/contact?project='+post.title} className="block w-full text-center text-xs mt-6 bg-white border-1.5 border-black rounded-full py-3 jost hover:bg-slate-100">CONTACT</Link>
                    </div>

                    <SameProjects slug={slug} />
                    
                    <div className="bg-[#E8E8E8] py-10">
                        <OtherWorks />
                        <h3 className="text-center text-3xl mt-14 jost">CATEGORY</h3>
                        <h6 className="text-center text-xs mt-3">カテゴリーを選ぶ</h6>
                        <ul className="flex flex-wrap gap-3 justify-center mt-6">
                            {categories.map((cat) => (
                                <li key={'cat-'+cat.id} className="inline-block">
                                    <Link to={'/?mode=index&category='+cat.id} className="border-1.5 border-black text-xs inline-block py-1 px-2 bg-white text-black font-bold hover:bg-slate-100">{cat.name}</Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </>
            )}

            <NavFooter />

        </div>
    )
}