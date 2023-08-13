import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTransitionStarter } from "../redux/product";

export default function TransitionCover(props) {
    const dispatch = useDispatch()
    const transitionStarter = useSelector((state) => state.product.transitionStarter)
    useEffect(() => {
        if (transitionStarter) {
            // すぐに切る
            dispatch(setTransitionStarter(false))
            setIsShowing(true)
        }
    }, [transitionStarter])
    const [isShowing, setIsShowing] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    useEffect(()=>{
        if (isShowing) {
            setTimeout(() => {
                setIsClosing(true)                
            }, 100);
            setTimeout(() => {
                setIsClosing(false)
            }, 1300);
            setTimeout(() => {
                setIsShowing(false)
            }, 1800);

        }
    },[isShowing])

    return (
        <>
            <div className={`fixed top-0 left-0 w-screen h-screen overflow-hidden ${isShowing? 'z-50': 'hidden -z-50'}`}>
                <div className={`absolute bottom-0 left-0 w-full transition-all duration-500 bg-black ${isClosing? 'h-[100vh]': 'h-[0vh]'}`}>
                </div>
            </div>
        </>
    )
}