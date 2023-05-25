import React from "react"
import { Route, NavLink, Redirect, RouteComponentProps } from "react-router-dom"
import CourseContainer from "./courses/CourseContainer"
import { HTMLCourses, CSSCourses, JSCourses } from "../data/courses"

interface MatchParams {
  url: string
}

const Courses: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to={`${match.url}/html`} activeClassName="active">
            HTML
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/css`} activeClassName="active">
            CSS
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/javascript`} activeClassName="active">
            JavaScript
          </NavLink>
        </li>
      </ul>
    </div>
    <Route exact path={match.url}>
      <Redirect to={`${match.url}/html`} />
    </Route>
    <Route path={`${match.url}/html`}>
      <CourseContainer data={HTMLCourses} />
    </Route>
    <Route path={`${match.url}/css`}>
      <CourseContainer data={CSSCourses} />
    </Route>
    <Route path={`${match.url}/javascript`}>
      <CourseContainer data={JSCourses} />
    </Route>
  </div>
)
export default Courses
