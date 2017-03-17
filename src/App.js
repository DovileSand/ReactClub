import React, { Component } from 'react';
import CoursesTable from './CoursesTable';
import AmazingLoadingImage from './ball.svg';
import './App.css';

const URL = 'https://go-course.herokuapp.com/courses';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      courses: [],
      isLoading: true,
    }

    this.onSearchInput = this.onSearchInput.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.fetchCourses = this.fetchCourses.bind(this);
    this.setCourses = this.setCourses.bind(this);
  }

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses() {
    fetch(URL)
      .then(response => response.json())
      .then(courses => this.setCourses(courses))
  }

  setCourses(courses) {
    this.setState({
      courses,
      isLoading: false,
    })
  }

  onDismiss(uuid) {
    var { courses } = this.state;
    var filteredCourses = courses.filter((c) => { return c.uuid !== uuid });
    this.setState({ courses: filteredCourses });
  }

  onSearchInput(e) {
    this.setState({ searchText: e.target.value });
  }

  render() {
    // var courses = this.state.courses; is the same as line below
    var { courses, searchText, isLoading } = this.state;

    if(isLoading) {
      return (
        <img src={AmazingLoadingImage} alt='loader'/>
      )
    }
    var filteredCourses = courses.filter(function(c) {
      return c.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
      <div className="App">
        <h1>There are {filteredCourses.length} courses</h1>
        <input onChange={this.onSearchInput} value={searchText} placeholder="Find your dream course"/>
        <CoursesTable courses={filteredCourses} onDismiss={this.onDismiss}>
          <p>We will have this course real soon for you</p>
        </CoursesTable>
      </div>
    );
  }
}

export default App;
