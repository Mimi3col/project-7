import React from "react";
import { useState } from "react";


export default function Card ({stats}){
    let id = 0; 

const statList = stats.map((element) =>(
    <div className=" box-border border-blue-400" key={id++}>
        <p>
            {element.name}
        </p>
    </div>
))

return(
    <div>
        <div className="flex flex-row gap-1">
            {statList}
        </div>
    </div>

)

}