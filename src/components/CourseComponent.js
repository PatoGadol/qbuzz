import React from 'react'
import {Link, Route} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import CourseFormContainer from './CourseFormContainer'

function CourseComponent(props) {
    let path = "/" + props.data.course.courseName;


    return (
        <label>
            <ReactTooltip/>
            <Link data-tip="Try this course today!"
                  to={path}> {props.data.course.courseName} </Link>

            {/*<Route path={path} component={SubscribersDetailsContainer}/>*/}
            {/*<Route path={path} component={props.curseDetailsForm}/>*/}
            -
        </label>
    )
}

export default CourseComponent



