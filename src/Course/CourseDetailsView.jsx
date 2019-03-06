import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Spinner from '../UI/Spinner';
import Button from '../UI/Button';
import DetailsCard from '../UI/DetailsCard';
import DisplayField from '../UI/DisplayField';
import { statusCodeToError } from '../utils';

class CourseDetailsView extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isEditing: false,
      isSaving: false,
      showConfirmDeleteModel: false,
      isDeleting: false,
      course: null,
      error: '',
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.loadCourse();
  }

  loadCourse() {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true, error: '' });
    const onSuccess = (response) => {
      this.setState({
        course: response.data,
        isLoading: false,
      });
    };
    const onFail = (error) => {
      this.setState({
        course: null,
        error: statusCodeToError(error.response),
        isLoading: false,
      });
    };
    axios.get(`/api/courses/${id}`).then(onSuccess).catch(onFail);
  }

  handleEdit() {
    this.setState({ isEditing: true });
  }

  renderDisplay() {
    const { course } = this.state.course;
    return (
      <DetailsCard>
        <DetailsCard.Header>
          <h1>{course.name}</h1>
        </DetailsCard.Header>
        <DetailsCard.ButtonGroup>
          <Button primary onClick={this.handleEdit}>Edit</Button>
        </DetailsCard.ButtonGroup>
        <DisplayField label="Code">{course.code}</DisplayField>
        <DisplayField label="Start at">{course.start_at}</DisplayField>
        <DisplayField label="End at">{course.end_at}</DisplayField>
        <DisplayField label="Introduction">{course.introduction}</DisplayField>
      </DetailsCard>
    );
  }

  render() {
    const { isLoading, error, course, isEditing } = this.state;
    if (isLoading) {
      return (
        <DetailsCard><Spinner /></DetailsCard>
      );
    }
    if (!isLoading && error) {
      return (
        <DetailsCard>{error}</DetailsCard>
      );
    }
    if (course && !isEditing) {
      return this.renderDisplay();
    }

    if (course && isEditing) {
      return this.renderForm();
    }

    return null;
  }
}

export default withRouter(CourseDetailsView);
