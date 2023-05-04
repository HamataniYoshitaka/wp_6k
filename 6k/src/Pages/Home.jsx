import React, { useEffect, useState } from "react";
import HomeSingle from "./Home/Single";
import HomeIndex from "./Home/Index";
import HomeNavigation from "./Home/Navigation";
import axios from 'axios'
import { apiUrl } from "../utils";
import { useSelector, useDispatch } from 'react-redux'
import { setCategories, setPosts } from "../redux/product";

export default function Home(props) {
    const categories = useSelector((state) => state.product.categories)
    const dispatch = useDispatch()
    const [isSingleView, setIsSingleView] = useState(true)
    const [selectedCategoryId, setSelectedCategoryId] = useState(-1)

    useEffect(()=>{
        if (categories.length) return
        axios.get(apiUrl() +'/wp-json/wp/v2/categories').then(res => {
            dispatch(setCategories(res.data))
        })
        axios.get(apiUrl() +'/wp-json/wp/v2/posts?per_page=99&_embed').then(res => {
            dispatch(setPosts(res.data))
        })
    }, [])

    return (
        <>
            <HomeNavigation isSingleView={isSingleView} setIsSingleView={setIsSingleView} selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId}/>
            {isSingleView? (
                <HomeSingle />
            ): (
                <HomeIndex />
            )}
        </>
    )
}