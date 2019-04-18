import React, {Component} from "react"
import coursesData from "./coursesData"
import CourseFormContainer from "./CourseFormContainer"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import SubscribersDetailsContainer from "./SubscribersDetailsContainer"


class RegisterToACourse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: coursesData
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(courseName) {
        debugger;

        this.setState(prevState => {
            return {
                courses: prevState.courses.map(course => {
                    if (course.courseName !== courseName)
                        return course;

                    return {
                        ...course,
                        numberOfParticipants: course.numberOfParticipants + 1
                    };
                })
            }
        })
        console.log(this.state.courses)
    }

    render() {

        const links = this.state.courses
            .map(course =>
                <Link className="font-weight-bold" to={"/" + course.courseName}
                      key={course.id}
                      data-tip="Try this course today!">
                    {course.courseName};
                </Link>
            )

        const routes = this.state.courses.map(course =>
            <Route path={"/" + course.courseName}
                   key={course.id}
                   render={() => <CourseFormContainer
                       course={course}
                       onSubmit={this.onSubmit}
                   />}
            />
        )

        const subscribeRoutes = this.state.courses.map(course =>
            <Route path={"/subscribe/" + course.courseName}
                   key={course.id}
                   render={() => <SubscribersDetailsContainer
                       courseName={course.courseName}
                       onSubmit={this.onSubmit}
                       courses={this.state.courses}
                   />}
            />
        )

        return (
            <div>
                <h1>Welcome to course portal, choose a course</h1>
                <Router>
                    <div>
                        {links}
                        <Switch>
                            <Route exact path={"/"}/>
                            {routes}
                            {subscribeRoutes}
                        </Switch>
                        <br/>
                        <br/>
                        <br/>
                        <footer>
                            <Link to={"/"}>
                                Home
                            </Link>
                        </footer>
                    </div>
                </Router>
            </div>
        )
    }
}

export default RegisterToACourse
