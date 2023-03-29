import React from "react";
import Progressbar from "../Progressbar/Progressbar";
import Image from 'next/image'


export default function Skill(props) {
    return (
        <div className="skill m-2 flex flex-col justify-center items-center w-2/12  ">
            <img src={props.icon} alt={props.title} width={512} height={512} />
            {/* <div className="mt-auto">{props.title}</div> */}

        </div>
    )
}
