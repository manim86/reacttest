import React, { Component } from "react";
import InputComponent from  "../input/input"
import ButtonComponent from "../button/button";
function HelloWorld({props}){
        return (
            <>
            <div className="sayHello">
                <p>My Name is {props.username}</p>
                <img src= {props.image} alt={props.username} width="200" height="200"></img>
                <InputComponent props={props} />
                <ButtonComponent props={props} applyClass="btn-primary" />
            </div>
           
            </>
        );
}
export default HelloWorld;