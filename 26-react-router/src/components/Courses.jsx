import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/courses.js';
import { useState } from 'react';

const sortCourses = (courses, key) => {
  const sortedCourses = [...courses];
  sortedCourses.sort((a, b) => a[key] - b[key]);
  return sortedCourses;
};

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState();
  return (
    <>
      <h1>Courses</h1>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Link className="courseLink" to={course.slug}>
              {course.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
