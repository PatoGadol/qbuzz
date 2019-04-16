import React from "react"

function CourseFormComponent(props) {


    return (
        <main>
            <form>
                <br/>
                <br/>
                <h3>{props.course.courseName} <label style={{fontWeight: "lighter"}}>course details:</label></h3>
                <p>Number of study days: {props.course.amountOfDays}</p>
                <p>The course will take place on: {props.course.courseTimeSchedule}</p>
                <p>Teacher: {props.course.teacher}</p>
                <p>Price: {props.course.price}$</p>
                <p>Course description: {props.course.descriptionOfTheCourse}</p>
                <p>Min. participants: {props.course.minimumParticipants}</p>
                <p>Number of participants subscribed: {props.course.numberOfParticipants}</p>
                <p>Rating: {props.course.rating}</p>
                <p>Related courses: {props.course.relatedCourses}</p>
                <button onClick={props.onSubscribe}>Subscribe to {props.course.courseName}</button>
            </form>
        </main>)
}

export default CourseFormComponent
