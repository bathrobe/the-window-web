import React from 'react'

export default function Heading({size, children}) {
    let heading;
    switch (size){
        case "s":
            heading = "text-xl text-gray-400 font-medium py-1";
            break;
        case "m":
            heading = "text-2xl text-gray-300 font-medium tracking-tight py-2"
            break;
        case "l":
            heading = "text-3xl text-gray-200 font-semibold tracking-tighter py-2"
            break;
            case "xl":
                heading = "text-4xl text-gray-200 font-semibold tracking-tighter py-3"
                break;
    }

    return (
        
            <h2 className={heading}>{children}</h2>
        
    )
}
