import React, {Component} from "react"
import SubscribersDetailsComponent from "./SubscribersDetailsComponent"

class SubscribersDetailsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            paymentMethod: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.disableButton = this.disableButton.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    disableButton() {
        return !(this.state.firstName
            && this.state.lastName
            && this.state.address
            && this.state.city
            && this.state.paymentMethod)

    }

    render() {
        return (
            <SubscribersDetailsComponent
                disableButton={this.disableButton}
                handleChange={this.handleChange}
                data={this.state}
                courseName={this.props.courseName}
                onSubmit={this.props.onSubmit}
                courses={this.props.courses}/>
        )
    }
}


export default SubscribersDetailsContainer

