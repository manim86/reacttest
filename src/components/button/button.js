import React, {Component} from "react";

function ButtonComponent({...props}){
    let {applyClass, user} = props;
    console.log("Button props", applyClass)
    return <button className={applyClass}>Submit</button>
}

export default ButtonComponent;