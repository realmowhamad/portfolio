import React from "react";
import style from './Experience.module.css'

export default function Experience(props) {

    console.log(props);

    return (
        <section className={`${style.experience} w-1/3 h-full`} >
            <div className={`${style.experieceImage}`}>
                <img className="aspect-square object-contain" src="Sep2.png" alt="" />
            </div>
            <div className={`${style.title} my-2 `}>
                <h1 className='bg-[#58c3ef] px-2 my-2 rounded-md'>{`${props.yearfrom} - ${props.yearTo}`}</h1>
                <h1>{props.company}</h1>
                <h3>{props.jobtitle}</h3>
            </div>
            <p className="">{props.description}</p>
        </section>
    )
}
