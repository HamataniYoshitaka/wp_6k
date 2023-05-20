import React, { useState } from "react";
import SingleCard from "./SingleCard";
import ShadowTitle from "./ShadowTitle";


export default function SwiperOne(props) {
    const [shadowTitleScene, setShadowTitleScene] = useState(-1)

    return (
        <>
            {(props.posts.length > 0) && (      
                <>
                    {/* 背景のタイトル */}
                    <ShadowTitle post={props.posts[0]} shadowTitleScene={shadowTitleScene} setShadowTitleScene={setShadowTitleScene} />
                    <div className={`pt-20 md:pt-[calc(50vh-260px-40px)] relative`}>
                        <div className="md:max-w-[370px] md:mx-auto relative" >

                            <div className="p-4">
                                <SingleCard post={props.posts[0]} />
                            </div>
                            <div className=" w-full z-10 relative -mt-4">
                                <div className="flex justify-center items-end">
                                    <div>
                                        <div className="text-slate-500 p-4">
                                            <svg className="w-2 h-2" viewBox="0 0 4.37 5.24">
                                                <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-black jost text-6xl -translate-y-8">1
                                    </div>
                                    <div>
                                        <div className="text-slate-500 p-4">
                                            <svg className="w-2 h-2 -scale-x-100" viewBox="0 0 4.37 5.24">
                                                <path fill="currentColor" d="M0,2.62L4.37,0V5.24L0,2.62Z"/>
                                            </svg>
                                        </div>
                                    </div>
                        
                                </div>
                                <div className="absolute -bottom-2 left-[calc(50%-20px)] w-10">
                                    <hr className="border border-black w-4 mx-auto my-2"/>
                                    <div className="text-center jost">{props.posts.length}</div>
                                </div>

                            </div>

                        </div>
                    </div>
                </>
            )}
        </>
        
    )
}