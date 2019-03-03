import React from 'react';

import axios from 'axios';
import StudentItem from './StudentItem';
import Spinner from '../UI/Spinner';

export default class StudentView extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      students: [],
    };
  }

  componentDidMount() {
    this.loadStudents();
  }

  loadStudents() {
    this.setState({ isLoading: true });
    axios.get('/api/students').then((response) => {
      this.setState({ students: response.data, isLoading: false });
    });
  }

  render() {
    return (
      <div>
        <h1 className="title">Students</h1>
        <div style={{ marginTop: 20 }}>
          {this.state.isLoading && <Spinner />}
          {!this.state.isLoading && (
            <ul className="list-group">
              {this.state.students.map(student => (
                <StudentItem student={student} key={student.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
