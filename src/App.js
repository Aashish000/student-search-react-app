import './App.css';
import { Component } from 'react';
import { StudentList} from './components/student-list/student-list-component';
import { StudentSearch} from './components/student-search/student-search-component';
class App extends Component{
  constructor(){
    super();

      this.state= {
        students :[ ],
        searchField : ''
      };

}
componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users =>this.setState({ students : users}));
}
handleChange = (e) => {
  this.setState({searchField: e.target.value})
};
render() {
  const { students, searchField } = this.state;
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className='App'>
      <h1>Students Search</h1>
      <StudentSearch 
      placeholder ='Search Students'
      handleChange= {this.handleChange}
      />
      <StudentList students = {filteredStudents}/>
    </div>
  );
}
}

export default App;
