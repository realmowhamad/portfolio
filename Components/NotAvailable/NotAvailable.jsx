import React from "react";
import { CiWarning } from 'react-icons/ci'

export default function NotAvailable() {




    return (
        <div className="notAv w-screen h-screen flex flex-col items-center justify-center bg-gray-800">

            <h1 className="text-[15rem] text-orange-500">{<CiWarning />}</h1>
            <h5 className="text-[2rem] text-orange-500">UNDER MAINTENANCE</h5>
            <h6 className=" text-white">we will Be back soon with Mobile Verison</h6>
            <h6 className=" text-white">You can Use This Site with Desktop Version Right now!</h6>
        </div>
    )
}
