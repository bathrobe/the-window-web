import React from 'react'

export default function Text({children, size}) {
    let style;
    switch(size){
        case "s":
            style = "text-md text-gray-300 py-2"
        break;
        case "m":
            style = "text-lg leading-7 text-gray-300 py-2"
        break;
    }
    return (
        <p className={style}>
            {children}
        </p>
    )
}