import React from 'react';

import LecturerItem from './LecturerItem';

export default class LecturersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lecturers: [
        {
          id: 1,
          name: 'John Doe',
          Email: 'johndoe@hotmail.com',
        },
        {
          id: 2,
          name: 'Jane Doe',
          Email: 'janedoe@hotmail.com',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 className="title">Lecturers</h1>
        <div style={{ marginTop: 20 }}>
          <ul className="list-group">
            {this.state.lecturers.map(lecturer => <LecturerItem key={lecturer.id} lecturer={lecturer} />)}
          </ul>
        </div>
      </div>
    );
  }
}
