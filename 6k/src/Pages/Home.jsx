import React, { useEffect, useState } from "react";
import HomeSingle from "./Home/Single";
import HomeIndex from "./Home/Index";
import HomeNavigation from "./Home/Navigation";
import axios from 'axios'
import { apiUrl } from "../utils";
import Opening from "../Components/Opening";
import { useReloadFonts } from "../hooks/useReloadFonts";
import { useLocation } from "react-router-dom";

export default function Home(props) {
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const reloadFonts = useReloadFonts()
    const [isSingleView, setIsSingleView] = useState((()=>{
        if (query.get('mode') === 'index') {
            return false
        } else {
            return true
        }
    })())
    const [selectedCategoryId, setSelectedCategoryId] = useState((()=>{
        if (query.get('category')) {
            return parseInt(query.get('category'))
        } else {
            return -1
        }
    })())
    const [posts, setPosts] = useState([])
    const [nowLoading, setNowLoading] = useState(true)
    const [fontLoaded, setFontLoaded] = useState(false)
    const changeView = (isSingleView) => {
        setNowLoading(true)
        setTimeout(()=>{
            setIsSingleView(isSingleView)
        }, 500)
    }
    useEffect(()=>{
        setNowLoading(true)
        setTimeout(()=>{
            setPosts([])
            getPosts()
        }, 500)
        
    }, [selectedCategoryId])

    const getPosts = () => {
        if (selectedCategoryId === -1) {
            axios.get(apiUrl() +'/wp-json/wp/6k/artworks').then(res => {
                setPosts(res.data)
                // setNowLoading(false)
                if (!fontLoaded) {
                    setFontLoaded(true)
                    setTimeout(()=>{
                        reloadFonts()
                    }, 100)
                }
            })
        } else {
            axios.get(apiUrl() +'/wp-json/wp/6k/artworks?category='+selectedCategoryId).then(res => {
                setPosts(res.data)
                // setNowLoading(false)
                if (!fontLoaded) {
                    // setFontLoaded(true)
                    setTimeout(()=>{
                        reloadFonts()
                    }, 100)
                }
            })
        }
    }

    return (
        <>
            {/* <Opening /> */}
            <HomeNavigation isSingleView={isSingleView} changeView={changeView} selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId}/>
            {isSingleView? (
                <HomeSingle posts={posts} nowLoading={nowLoading} setNowLoading={setNowLoading} />
            ): (
                <HomeIndex posts={posts} nowLoading={nowLoading} setNowLoading={setNowLoading}  />
            )}
        </>
    )
}