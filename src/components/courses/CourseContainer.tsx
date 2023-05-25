import React from 'react';
import Course from './Course';

interface CourseData {
  id: string;
  title: string;
  description: string;
  img_src: string;
}

interface CourseContainerProps {
  data: CourseData[];
}

const CourseContainer: React.FC<CourseContainerProps> = ({ data }) => {
  const courses = data.map((course) => (
    <Course title={course.title} desc={course.description} img={course.img_src} key={course.id} />
  ));

  return (
    <div>
      <ul>{courses}</ul>
    </div>
  );
};

export default CourseContainer;
