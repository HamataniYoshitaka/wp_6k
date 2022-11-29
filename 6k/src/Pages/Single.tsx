import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import { apiUrl } from "../utils";
import { format } from "date-fns";

export default function Single(props: any) {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState<any|null>(null)
    useEffect(()=>{
        axios.get(apiUrl() +'/wp-json/wp/v2/posts?slug='+ slug +'&_embed').then(res => {
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
    return (
        <div className="bg-gray-100 pt-32 pb-20 relative">
            <div className="px-8 relative">
                {post && (
                    <>
                        <img src={post._embedded['wp:featuredmedia'][0].source_url} className=" w-full h-80 rounded-xl object-cover" />
                        <p className="mt-10 cormorant lowercase">{format(new Date(post.date), 'yyyy.MM.dd / EEEE')}</p>
                        <ul className="space-x-2 mt-2">
                            {post._embedded['wp:term'][1].map((tag: any) =>(
                                <li key={'post-'+post.id+'-tag-'+tag.id} className="inline-block">
                                    <span className="text-xs inline-block py-0.5 px-1 bg-white text-black">{tag.name}</span>
                                </li>
                            ))}
                        </ul>
                        <h1 className="text-2xl mt-3">{post.title.rendered}</h1>
                        <hr className="my-6 border-black" />
                        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} className="text-xs leading-6">
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}