import React, {Component} from "react"
import CourseFormComponent from "./CourseFormComponent"
import {Redirect} from 'react-router'
import '../styles.css'

class CourseFormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
        this.onSubscribe = this.onSubscribe.bind(this)
        this.path = "/subscribe/" + props.course.courseName
    }

    onSubscribe(event) {
        this.setState({redirect: true})
    }

    render() {
        if (this.state.redirect) {
            this.setState({redirect: false})
            return <Redirect to={this.path}
                             course={this.props.course}
                             onSubmit={this.props.onSubmit}
            />
        }
        return (
            <CourseFormComponent
                course={this.props.course}
                onSubscribe={this.onSubscribe}
            />
        )
    }
}


export default CourseFormContainer

