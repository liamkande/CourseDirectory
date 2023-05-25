import React from 'react';

interface CourseProps {
img: string;
title: string;
desc: string;
}

const Course: React.FC<CourseProps> = ({ img, title, desc }) => (

  <li className="course media group">
    <img className="course-img" src={img} alt="course" />
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </li>
);
export default Course;