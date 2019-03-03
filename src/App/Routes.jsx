import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CoursesView from '../Course/CoursesView';
import StudentsView from '../Student/StudentsView';
import LecturersView from '../Lecturer/LecturersView';
import CourseDetailView from '../Course/CourseDetailView';

export default () => ((
  <Switch>
    <Route exact path="/" component={CoursesView} />
    <Route exact path="/courses" component={CoursesView} />
    <Route exact path="/courses/:id" component={CourseDetailView} />
    <Route exact path="/students" component={StudentsView} />
    <Route exact path="/lecturers" component={LecturersView} />
  </Switch>
));
