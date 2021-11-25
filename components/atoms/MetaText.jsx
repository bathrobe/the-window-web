import React from 'react'

export default function MetaText({children, size, type}) {
    let metaText;
    switch (size){
        case "s":
            metaText = "text-sm tracking-wider";
            break;
        case "m":
            metaText = "text-md tracking-wide"
            break;
        
    }
    let hierarchy;
    switch(type){
        case "primary":
           hierarchy = "text-gray-300"
           break;
        case "secondary":
            hierarchy = "text-gray-400 uppercase"
            break;
    }
    
    return (
            <p className={`${metaText} ${hierarchy} pb-2`}>{children}</p>
    )
}
