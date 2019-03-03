import React from 'react';

export default function StudentItem({ student }) {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <div className="caption">
          <h4>{student.name}</h4>
          <p>{student.email}</p>
          <p>
            <a href="#" className="btn btn-default"> Details </a>
          </p>
        </div>
      </div>
    </div>
  );
}
