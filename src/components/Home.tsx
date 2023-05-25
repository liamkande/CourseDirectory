import React, { useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [teacherName, setTeacherName] = useState('');
  const [teacherTopic, setTeacherTopic] = useState('');
  const routeHistory = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (teacherName && teacherTopic) {
      const path = `/teachers/${teacherTopic}/${teacherName}`;
      routeHistory.push(path);
    } else {
      alert('Please enter both a teacher name and a topic before searching.');
    }
  };

  return (
    <div className="main-content home">
      <h2>Front End Course Directory</h2>
      <p>
        Learn front end web development and much more! This simple directory
        app offers a preview of our course library. Choose from many hours of
        content, from HTML to CSS to JavaScript. Learn to code and get the
        skills you need to launch a new career in front end web development.
      </p>
      <p>
        We have thousands of videos created by expert teachers on web design and
        front end development. Our library is continually refreshed with the
        latest on web technology so you will never fall behind.
      </p>
      <hr />
      <h3>Featured Teachers</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Topic"
          value={teacherTopic}
          onChange={(e) => setTeacherTopic(e.target.value)}
        />
        <button type="submit">Go!</button>
      </form>
    </div>
  );
};

export default Home;
