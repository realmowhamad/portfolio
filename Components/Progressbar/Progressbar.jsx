import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Progressbar({ value, color, label }) {
    return (
        <div className="w-full ">
            <h1>{label}</h1>
            <ProgressBar
                completed={value}
                bgColor={color}
                labelAlignment="center"
                baseBgColor="#eee"
                labelColor="#ffffff"
                labelSize="20px"
                animateOnRender
                maxCompleted={100}
            />
        </div>
    )
}
