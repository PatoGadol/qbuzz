import React, {Component} from "react"
import coursesData from "./coursesData"
import CourseFormContainer from "./CourseFormContainer";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import SubscribersDetailsContainer from "./SubscribersDetailsContainer";

class RegisterToACourse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: coursesData
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(courseName, prevCourses) {
        debugger;

        const coursesTemp = prevCourses.map(course => {
            if(course.courseName !== courseName)
                return course;

            return {
                ...course,
                numberOfParticipants : course.numberOfParticipants + 1
            };
        });

        this.setState({courses: coursesTemp})
        console.log(this.state.courses)
    }

    render() {

        const links = this.state.courses
            .map(course =>
                <Link to={"/" + course.courseName}
                      key={course.id}
                      data-tip="Try this course today!">
                    -{course.courseName};
                </Link>
            )

        const routes = this.state.courses.map(course =>
            <Route path={"/" + course.courseName}
                   key={course.id}
                   render={() => <CourseFormContainer
                       course={course}
                       onSubmit={this.onSubmit}
                       courses={this.state.courses}/>}
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
                       d/>
            /* <SubscribersDetailsContainer
                 courseName={course.courseName}
                 onSubmit={this.onSubmit}
             />*/
        )

        return (
            <div>
                <h1>Welcome to course portal, choose a course</h1>
                <Router>
                    <div>
                        <Link to={"/"}>
                            Home
                        </Link>
                        <br/>
                        {links}
                        <Switch>
                            <Route exact path={"/"}/>
                            {routes}
                            {subscribeRoutes}
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default RegisterToACourse
