import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeIndex(props) {
    const [shadowVisible, setShadowVisible] = useState(false)
    useEffect(() => {
        if (props.posts.length) {
            setTimeout(() => {
                props.setNowLoading(false)
            }, 100)
            setTimeout(() => {
                setShadowVisible(true)
            }
            , 1600)
        } else {
            setShadowVisible(false)
        }
    }, [props.posts])
    return (
        <div className={` transition-opacity duration-300 ${props.nowLoading? 'opacity-0': 'opacity-100'}`}>
            <div className="pt-24 pb-20 relative px-6 lg:px-0">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-10 lg:w-[962px] mx-auto">
                    {props.posts.map((post, i) => (
                        <div className="w-full h-[240px] md:h-[460px] lg:h-[462px] relative" key={i}>
                            <div className={`absolute left-0 w-full h-full bg-white rounded-lg transition-all duration-1000 ${!shadowVisible? 'shadow-[0_0px_0px_rgba(0,0,0,0.001)]': 'shadow-[0_1px_15px_rgba(0,0,0,0.20)]'} ${i%3===1? 'lg:top-8': 'lg:-top-6'} ${i%2===1? 'top-6': '-top-6'}`}>
                            </div>
                            <div className={`group absolute left-0 w-full h-full bg-white rounded-lg overflow-hidden transition-all duration-500 ${i%3===1? 'lg:top-8': 'lg:-top-6'} ${i%2===1? 'top-6': '-top-6'} ${props.nowLoading? 'opacity-0 -translate-y-10': 'opacity-100 translate-y-0'}`} style={{transitionDelay: i*200+200+'ms'}}>
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
                    ))}
                </div>
            </div>
        </div>
    )
}