import React from 'react';

import CourseCard from './CourseCard';

export default class CoursesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: 'C#',
          code: 'csharp',
          description: 'This is C# introduction',
        },
        {
          id: 2,
          name: 'Javascript',
          code: 'js',
          description: 'This is Javascript introduction',
        },
        {
          id: 3,
          name: 'Nicolemanman',
          code: 'Wife',
          description: "Ryan's property",
        },
        {
          id: 4,
          name: 'Ivan',
          code: 'Friend',
          description: 'test',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 className="title">Courses</h1>
        <div className="row">
          {this.state.courses.map(course => <CourseCard key={course.id} course={course} />)}
        </div>
      </div>
    );
  }
}

