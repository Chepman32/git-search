import React from "react";
const Form = props => (
    <form onSubmit={props.weatherMethod}>
                <input type="text" name="city" placeholder="enter the name of repository"/>
                <button><h2>Get results</h2></button>
            </form>
)
export default Form;