import React, {Component} from "react"
import CourseFormComponent from "./CourseFormComponent"
import { Redirect } from 'react-router'

class CourseFormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {redirect:false}
        this.onSubscribe = this.onSubscribe.bind(this)
        this.path = "/subscribe/" + props.course.courseName
        /* this.handleChange = this.handleChange.bind(this)
         this.disableButton = this.disableButton.bind(this)*/
    }

        onSubscribe(event) {
            this.setState({redirect: true});
            // const {name, value} = event.target
            // this.setState({[name]: value})
        }


    render() {
        if (this.state.redirect)
            return <Redirect push to={this.path}/>
        return (
            <CourseFormComponent
                course={this.props.course}
                onSubscribe={this.onSubscribe}
            />
        )
    }
}


export default CourseFormContainer

