import React from "react"
import TeacherList from "../data/teachers"

const Teachers: React.FC = () => {
  const teachers = TeacherList.map((teacher) => (
    <li className="teacher" key={teacher.id}>
      <img className="teacher-img" src={teacher.img_src} alt="teacher" />
      <h3>{teacher.name}</h3>
      <p>{teacher.bio}</p>
    </li>
  ))

  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="group">{teachers}</ul>
    </div>
  )
}

export default Teachers
