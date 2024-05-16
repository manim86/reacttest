import React, {Component} from "react";

function InputComponent({props}){
    return <input type={props.type} name={props.lastName} placeholder={props.username} id={props.id + "_userId"} />
}

export default InputComponent