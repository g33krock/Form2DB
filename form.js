import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        instructor: '',
        attendance: false,
        attendanceType: 'Unexcused Absent',
        iep: false,
        subject: '',
        engagement: null,
        comprehension: null,
        comment: '',
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
      console.log('Current state is: ' + JSON.stringify(this.state));
      alert('Current state is: ' + JSON.stringify(this.state));
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="row row-content">
          <div className="col-12">
            <h2>Aspire Online Form</h2>
            <hr />
          </div>
          <div className="col-md-10">
              <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                      <Label htmlFor="firstName" md={2}>First Name</Label>
                      <Col md={10}>
                          <Input type="text" id="firstName" name="firstName"
                              placeholder="First Name"
                              value={this.state.firstName}
                              onChange={this.handleInputChange} />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Label htmlFor="lastName" md={2}>Last Name</Label>
                      <Col md={10}>
                          <Input type="text" id="lastName" name="lastName"
                              placeholder="Last Name"
                              value={this.state.lastName}
                              onChange={this.handleInputChange} />
                      </Col>                        
                  </FormGroup>
                  <FormGroup row>
                      <Label htmlFor="instructor" md={2}>Instructor</Label>
                      <Col md={10}>
                          <Input type="text" id="instructor" name="instructor"
                              placeholder="Instructor"
                              value={this.state.instructor}
                              onChange={this.handleInputChange} />
                      </Col>                        
                  </FormGroup>
                  <FormGroup row>
                      <Col md={{size: 4, offset: 2}}>
                          <FormGroup check>
                              <Label check>
                                  <Input type="checkbox"
                                      name="attendance"
                                      checked={this.state.attendance}
                                      onChange={this.handleInputChange} /> {' '}
                                  <strong>Is Student Present?</strong>
                              </Label>
                          </FormGroup>
                      </Col>
                      <Col md={4}>
                          <Input type="select" name="attendanceType"
                                  value={this.state.attendanceType}
                                  onChange={this.handleInputChange}>
                              <option>Unexcused Absent</option>
                              <option>Excused Absent</option>
                              <option>Unexcused Tardy</option>
                              <option>Excused Tardy</option>
                              <option>Present</option>
                          </Input>
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Col md={{size: 4, offset: 2}}>
                          <FormGroup check>
                              <Label check>
                                  <Input type="checkbox"
                                      name="iep"
                                      checked={this.state.iep}
                                      onChange={this.handleInputChange} /> {' '}
                                  <strong>Does Student Have an IEP?</strong>
                              </Label>
                          </FormGroup>
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="subject" md={2}>Subject</Label>
                    <Col md={4}>
                        <Input type="select" name="subject"
                                value={this.state.subject}
                                onChange={this.handleInputChange}>
                            <option>ELA</option>
                            <option>Math</option>
                            <option>Science</option>
                            <option>Social Studies</option>
                            <option>Social Skills</option>
                        </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Label htmlFor="engagement" md={2}>Engagement Score</Label>
                      <Col md={10}>
                          <Input type="text" id="engagement" name="engagement"
                              placeholder="1 - 4"
                              value={this.state.engagement}
                              onChange={this.handleInputChange} />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Label htmlFor="comprehension" md={2}>Comprehension Score</Label>
                      <Col md={10}>
                          <Input type="text" id="comprehension" name="comprehension"
                              placeholder="1 - 4"
                              value={this.state.comprehension}
                              onChange={this.handleInputChange} />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Label htmlFor="comment" md={2}>Comments on Session</Label>
                      <Col md={10}>
                          <Input type="textarea" id="comment" name="comment"
                              rows="12"
                              value={this.state.comment}
                              onChange={this.handleInputChange}></Input>
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Col md={{size: 10, offset: 2}}>
                          <Button type="submit" color="primary">
                              Submit
                          </Button>
                      </Col>
                  </FormGroup>
              </Form>
          </div>
      </div>
      )
    }
  }
  
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));

  export default MyForm