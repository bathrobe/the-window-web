import React from 'react'
import {BsFillCalendarEventFill} from "react-icons/bs"
import {GoGlobe} from 'react-icons/go'
import {RiArticleFill} from 'react-icons/ri'
export default function Icon({type}) {
    let icon;
    switch(type){
        case "calendar":
            icon = <BsFillCalendarEventFill/>
        break;
        case "globe":
            icon = <GoGlobe/>
        break;
        case "article":
            icon = <RiArticleFill/>
        break;
    }

    return (
        <>{icon}</>
    )
}