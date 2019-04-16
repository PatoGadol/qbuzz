import React from "react"
import "../styles.css"

function SubscribersDetailsComponent(props) {
    return (
        <main>
            <form>
                <h1>Personal details:</h1>
                <br/>
                <input name="firstName" onChange={props.handleChange} placeholder="First Name"/> <br/>
                <input name="lastName" onChange={props.handleChange} placeholder="Last Name"/> <br/>
                <input name="address" onChange={props.handleChange} placeholder="Address"/> <br/>
                <input name="city" onChange={props.handleChange} placeholder="City"/> <br/>

                <select name="paymentMethod" onChange={props.handleChange} value={props.data.paymentMethod}>
                    <option value="">---Method Of Payment---</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="iDEAL">iDEAL</option>
                </select>
                <br/>
                <br/>
                <button className="Button" disabled={props.disableButton()} onClick={() => props.onSubmit(props.courseName, props.courses)}>Submit Form</button>
                <br/>
                <div className="form" style={{borderStyle: "solid"}}>
                    <h3 style = {{color:"green"}}>Entered information, please verify: </h3>
                    <p style={{display: props.data.firstName && props.data.lastName ? "block" : "none"}}>
                        Hi {props.data.firstName} {props.data.lastName}</p>
                    <p style={{display: props.data.address && props.data.city ? "block" : "none"}}>
                        You live at {props.data.address}, {props.data.city} </p>
                    <p style={{display: props.data.paymentMethod ? "block" : "none"}}>
                        Paying with <label style={{fontWeight: "bold"}}>{props.data.paymentMethod}</label>.
                        We hope you enjoy the course!</p>
                </div>
            </form>
        </main>
    )
}


export default SubscribersDetailsComponent

