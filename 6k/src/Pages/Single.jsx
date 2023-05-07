import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import { apiUrl } from "../utils";
import { format } from "date-fns";
import NavFooter from "../Components/NavFooter";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'


export default function Single(props) {
    const [swiper, setSwiper] = useState(null)

    const { slug } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    useEffect(()=>{
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
    }, [])
    useEffect(()=>{
        if (post) {
            if(!(window.location.hostname === 'localhost' || window.location.hostname === "127.0.0.1")) {
                window.reload_fontPlus()
            }
        }
    }, [post])
    return (
        <div className="bg-[#E8E8E8] pt-32 pb-20 relative">
            {post && (
                <>
                    <div className="w-[657px] mx-auto">
                        <img src={post.thumbnail} className=" w-full h-auto rounded-xl " />
                        <div className="flex items-center space-x-4">
                            <h1 className="text-2xl mt-3">{post.title}</h1>
                            <ul className="space-x-2 mt-2">
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
                            <div className="grow"></div>
                            <p className="text-sm cormorant lowercase ">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                        </div>
                        <hr className="my-6 border-black" />
                    </div>
                    <div className="w-[560px] mx-auto">

                        <div dangerouslySetInnerHTML={{__html: post.content}} className="text-xs leading-6">
                        </div>
                    </div>

                    <div className="w-[560px] mx-auto mt-10">
                        <h6><span className="inline-block text-[#2EFFEB] bg-black py-0.5 px-2 text-lg font-semibold">detail</span></h6>
                    </div>
                    <div className="overflow-hidden">
                        <div className="w-[592px] mx-auto artwork-detail-swiper relative">
                            <Swiper
                                loop
                                centeredSlides
                                slidesPerView={1}
                                onSwiper={(swiper) => setSwiper(swiper)}
                            >
                                {post.details.map((detail, i) => (
                                    <SwiperSlide key={'detail-'+i}>
                                        <div className="p-4">
                                            <img src={detail.image} className="w-full h-[445px] rounded-xl object-cover" />
                                            <p className="text-sm leading-7 mt-6">{detail.description}</p>
                                        </div>
                                    </SwiperSlide> 
                                ))}
                                {post.details.map((detail, i) => (
                                    <SwiperSlide key={'detail-1-'+i}>
                                        <div className="p-4">
                                            <img src={detail.image} className="w-full h-[445px] rounded-xl object-cover" />
                                            <p className="text-sm leading-7 mt-6">{detail.description}</p>
                                        </div>
                                    </SwiperSlide> 
                                ))}
                            </Swiper>
                            <button onClick={()=>swiper.slidePrev(700)} className="absolute z-10 -left-8 top-56 rounded-full p-2 transition-opacity hover:bg-black/5">
                                <svg className="w-5 h-5" viewBox="0 0 4.37 5.24">
                                    <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                                </svg>
                            </button>
                            <button onClick={()=>swiper.slideNext(700)} className="absolute z-10 -right-8 top-56 rounded-full p-2 transition-opacity hover:bg-black/5">
                                <svg className="w-5 h-5 -scale-x-100" viewBox="0 0 4.37 5.24">
                                    <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="w-[560px] mx-auto mt-10 pb-20">
                        <h6><span className="inline-block text-[#2EFFEB] bg-black py-0.5 px-2 text-lg font-semibold">trigger</span></h6>
                        <img src={post.trigger_image} className="w-full h-auto rounded-xl mt-6" />
                        <p className="text-sm leading-7 mt-6">{post.trigger_description}</p>
                        <h6 className="mt-10"><span className="inline-block text-[#2EFFEB] bg-black py-0.5 px-2 text-lg font-semibold">credit</span></h6>
                        <p className="text-sm leading-7 mt-5" dangerouslySetInnerHTML={{__html: post.credit.replace(/\n/g, "<br />")}}></p>
                        <hr className="my-6 border-black border-t-1.5" />
                        <p className="text-sm text-center">このプロジェクトで気になったことを聞いてみる</p>
                        <Link to="/contact" className="block w-full text-center text-xs mt-6 bg-white border-1.5 border-black rounded-full py-3">CONTACT</Link>
                    </div>

                </>
            )}
            <div className="bg-white py-10">
                <h3 className="text-center text-3xl">SAME PROJECTS</h3>
                <h6 className="text-center text-xs mt-3">同プロジェクトの他のワークス</h6>
            </div>
            <div className="bg-[#E8E8E8] py-10">
                <h3 className="text-center text-3xl">OTHER WORKS</h3>
                <h6 className="text-center text-xs mt-3">他のワークスを見る</h6>
                <h3 className="text-center text-3xl">CATEGORY</h3>
                <h6 className="text-center text-xs mt-3">カテゴリーを選ぶ</h6>
            </div>
            <NavFooter />

        </div>
    )
}