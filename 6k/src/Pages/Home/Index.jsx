import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HomeIndex(props) {
    const posts = useSelector((state) => state.product.posts)

    return (
        <div className="pt-24 pb-20 relative">
            <div className="grid grid-cols-3 gap-10 w-[962px] mx-auto">
                {posts.map((post, i) => (
                    <div className="w-full h-[462px] relative" key={i}>
                        <div className={`group absolute left-0 w-full h-full bg-white rounded-lg drop-shadow-[0_1px_7px_rgba(0,0,0,0.15)] overflow-hidden ${i%3===1? 'top-8': '-top-6'}`}>
                            <img src={post._embedded['wp:featuredmedia'][0].source_url} className="absolute top-0 left-0 w-full h-full object-cover" />
                            {post.title.rendered}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center space-y-4 items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-4">
                                <h5 className="text-white text-2xl">{post.title.rendered}</h5>
                                <ul className=" space-x-3">
                                    {post._embedded['wp:term'][1].map((tag) =>(
                                        <li key={'post-'+post.id+'-tag-'+tag.id} className="inline-block">
                                            <span className="inline-block text-xs py-0.5 px-3 bg-white text-black">{tag.name}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-white">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                                <Link to={'/posts/'+post.slug} className="border-1.5 border-black bg-white text-black block w-52 py-2 text-center rounded-full text-xs transition-colors hover:bg-black hover:text-white">MORE</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}