import React from 'react';

export default function LecturerItem({ lecturer }) {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <div className="caption">
          <h4>{lecturer.name}</h4>
          <p>{lecturer.email}</p>
          <p>
            <a href="#" className="btn btn-default"> Details </a>
          </p>
        </div>
      </div>
    </div>
  );
}
