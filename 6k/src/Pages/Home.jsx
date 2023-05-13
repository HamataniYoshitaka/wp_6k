import React, { useEffect, useState } from "react";
import HomeSingle from "./Home/Single";
import HomeIndex from "./Home/Index";
import HomeNavigation from "./Home/Navigation";
import axios from 'axios'
import { apiUrl } from "../utils";

export default function Home(props) {
    const [isSingleView, setIsSingleView] = useState(true)
    const [selectedCategoryId, setSelectedCategoryId] = useState(-1)
    const [posts, setPosts] = useState([])
    const [nowLoading, setNowLoading] = useState(true)
    const changeView = (isSingleView) => {
        setNowLoading(true)
        setTimeout(()=>{
            setIsSingleView(isSingleView)
        }, 500)
    }
    useEffect(()=>{
        axios.get(apiUrl() +'/wp-json/wp/6k/artworks').then(res => {
            setPosts(res.data)
            setNowLoading(false)
        })
    }, [])
    useEffect(()=>{
        setNowLoading(true)
        if (selectedCategoryId === -1) {
            axios.get(apiUrl() +'/wp-json/wp/6k/artworks').then(res => {
                setPosts(res.data)
                setNowLoading(false)
            })
        } else {
            axios.get(apiUrl() +'/wp-json/wp/6k/artworks?categort='+selectedCategoryId).then(res => {
                setPosts(res.data)
                setNowLoading(false)
            })
        }
    }, [selectedCategoryId])

    return (
        <>
            <HomeNavigation isSingleView={isSingleView} changeView={changeView} selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId}/>
            {isSingleView? (
                <HomeSingle posts={posts} nowLoading={nowLoading} setNowLoading={setNowLoading} />
            ): (
                <HomeIndex posts={posts} nowLoading={nowLoading} setNowLoading={setNowLoading}  />
            )}
        </>
    )
}