import React, { useState } from "react";
import HomeSingle from "./Home/Single";
import HomeIndex from "./Home/Index";
import HomeNavigation from "./Home/Navigation";

export default function Home(props: any) {
    const [isSingleView, setIsSingleView] = useState(true)
    
    return (
        <>
            <HomeNavigation isSingleView={isSingleView} setIsSingleView={setIsSingleView}/>
            {isSingleView? (
                <HomeSingle />
            ): (
                <HomeIndex />
            )}
        </>
    )
}