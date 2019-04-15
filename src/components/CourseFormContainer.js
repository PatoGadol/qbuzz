import React, {Component} from "react"
import CourseFormComponent from "./CourseFormComponent"

class CourseFormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        /* this.handleChange = this.handleChange.bind(this)
         this.disableButton = this.disableButton.bind(this)*/
    }

    /*
        handleChange(event) {
            const {name, value} = event.target
            this.setState({[name]: value})
        }
    */

    /*    disableButton() {
            return  !(this.state.firstName
                && this.state.lastName
                && this.state.address
                && this.state.city
                && this.state.paymentMethod)

        }*/

    render() {
        return (
            <CourseFormComponent
                course={this.props.course}
            />
        )
    }
}


export default CourseFormContainer

