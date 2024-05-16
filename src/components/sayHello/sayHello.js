import React, { Component } from "react";
import InputComponent from  "../input/input"
function HelloWorld({props}){
   // let user = props
   // console.log("hello", props)
        return (
            <>
            <div className="sayHello">
                <p>My Name is {props.username}</p>
                <img src= {props.image} alt={props.username} width="200" height="200"></img>
            </div>
            <InputComponent props={props} />
            </>
        );
}
export default HelloWorld;