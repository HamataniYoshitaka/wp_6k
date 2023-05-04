import React from "react";
import { useSelector } from "react-redux";

export default function HomeIndex(props) {
    const posts = useSelector((state) => state.product.posts)

    return (
        <div className="pt-32 pb-20 relative">
            <div className="px-6 relative">
                <div className="grid grid-cols-2 gap-6">
                    {posts.map((post, i: number) => (
                        <div className="w-full h-72 relative" key={i}>
                            <div className={`absolute left-0 w-full h-full bg-white rounded-lg drop-shadow-[0_1px_7px_rgba(0,0,0,0.15)] overflow-hidden ${i%2===0? '-top-2': 'top-8'}`}>
                                <img src={post._embedded['wp:featuredmedia'][0].source_url} className="absolute top-0 left-0 w-full h-full object-cover" />
                                {post.title.rendered}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}