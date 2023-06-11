/* **** Eleventh step - Create new component to display content- (see Dashboard.jsx > TaskItem.jsx) ***** 
-import React (add other necessary imports as you go)
-pass destructured data ({task}) into component as arg 
-add <div> with relevant className
-add sub <div> with jsx necessary to diplay relevant date (can include date via .createdAt from other part of proj.)
-import component into Dashboard (or other parent component)
*/


import React from "react"

export default function TaskItem({task}) {
    return (
        <div className="task">
            <div>
                {new Date(task.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{task.text}</h2>
        </div>
    )
}