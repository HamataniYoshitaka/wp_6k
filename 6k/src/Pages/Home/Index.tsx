import React from "react";

export default function HomeIndex(props: any) {
    return (
        <div className="pt-32 pb-20 relative">
            <div className="px-6 relative">
                <div className="grid grid-cols-2 gap-6">
                    {[1,2,3,4,5,6,7,8,9].map((index, i) => (
                        <div className="w-full h-72 relative">
                            <div className={`absolute left-0 w-full h-full bg-white rounded-lg drop-shadow-[0_1px_7px_rgba(0,0,0,0.15)] overflow-hidden ${i%2===0? '-top-2': 'top-8'}`}>
                                {index}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}