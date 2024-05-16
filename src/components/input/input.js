import React, {Component} from "react";

function InputComponent({props}){
   // let user = props
    // console.log("Input", props)
    return <input name={props.lastName} placeholder={props.username} id={props.id + "_userId"} />
}

export default InputComponent