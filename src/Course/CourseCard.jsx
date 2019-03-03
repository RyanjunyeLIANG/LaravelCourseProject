import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <div className="caption">
          <h4>{course.name}</h4>
          <p>{course.code}</p>
          <p>{course.introduction}</p>
          <p>
            <Link to={`/courses/${course.id}`} className="btn btn-default"> Details </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
