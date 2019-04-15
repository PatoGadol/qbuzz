import React, {Component} from "react"
import CourseComponent from "./CourseComponent"
import CourseFormContainer from "./CourseFormContainer";

class CourseContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.courseDetailsForm = this.courseDetailsForm.bind(this)
    }

    courseDetailsForm() {
        return (
            <CourseFormContainer
                course={this.props.course}
            />
        )
    }

    render() {
        return (
            <CourseComponent
                data={this.props}
                courseDetailsForm={this.courseDetailsForm}
            />
        )
    }
}


export default CourseContainer

