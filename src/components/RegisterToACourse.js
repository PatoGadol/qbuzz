import React, {Component} from "react"
import coursesData from "./coursesData"
import CourseFormContainer from "./CourseFormContainer";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import SubscribersDetailsContainer from "./SubscribersDetailsContainer";

class RegisterToACourse extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const links = coursesData
            .map(course =>
                <Link to={"/" + course.courseName}
                      key={course.id}
                      data-tip="Try this course today!">
                    -{course.courseName};
                </Link>
            )

        const routes = coursesData.map(course =>
            <Route path={"/" + course.courseName}
                   key={course.id}
                   render={() => <CourseFormContainer course={course}/>}
            />

        )

        const subscribeRoutes = coursesData.map(course =>
            <Route path={"/subscribe/" + course.courseName}
                   key={course.id}
                   render={() => <SubscribersDetailsContainer course={course}/>}
            />
        )


        return (
            <div>
                <h1>Welcome to course portal, choose a course</h1>
                <Router>
                    <div>
                        {links}
                        {routes}
                        {subscribeRoutes}
                    </div>
                </Router>
            </div>
        )
    }
}

export default RegisterToACourse
