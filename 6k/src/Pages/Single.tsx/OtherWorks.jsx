import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function OtherWorks(props) {
    const { ref, inView } = useInView({
        threshold: 0
    })
    useEffect(() => {
        if (inView){
            console.log('in view')
        }
    }, [inView])
    return (
        <div ref={ref} className="">
                <h3 className="text-center text-3xl">OTHER WORKS</h3>
                <h6 className="text-center text-xs mt-3">他のワークスを見る</h6>

            <h2 className="text-center text-2xl leading-10">他の作品</h2>
        </div>
    )
}