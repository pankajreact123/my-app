import React from 'react';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: { id: 0, name: '', age: 0 },
      empList: [
        { id: 101, name: 'Kapil kumar', age: 25 },
        { id: 102, name: 'Sandeep kumar', age: 30 },
        { id: 103, name: 'Deepak kumar', age: 32 }
      ]
    };

  }

  viewEmployee(id) {
    for (var i = 0; i < this.state.empList.length; i++) {
      if (this.state.empList[i].id == id) {
        var emp = this.state.empList[i];

        this.setState({
          //employee: emp
          employee: {
            id: emp.id,
            name: emp.name,
            age: emp.age
          }
        });
        break;
      }
    }
  }
  deleteEmployee(id) {
    for (var i = 0; i < this.state.empList.length; i++) {
      if (this.state.empList[i].id == id) {
        var employeeList = this.state.empList;
        employeeList.splice(i, 1);

        this.setState({
          empList: employeeList
        });
        break;
      }
    }
  }
  editEmployee(id) {
    for (var i = 0; i < this.state.empList.length; i++) {
      if (this.state.empList[i].id == id) {
        var emp = this.state.empList[i];

        this.setState({
          employee: {
            id: emp.id,
            name: emp.name,
            age: emp.age
          }
        });
        break;
      }
    }
  }
  handleChange(input, event) {
    var value = event.target.value;
    var emp = this.state.employee;
    if (input == 'name') {

      emp.name = value;
      this.setState({
        employee: emp
      });

    }
    else if (input == 'age') {

      emp.age = value;
      this.setState({
        employee: emp
      });
    }
  }

  saveEmployee() {
    for (var i = 0; i < this.state.empList.length; i++) {
      if (this.state.empList[i].id == this.state.employee.id) {
        var employeeList = this.state.empList;

        employeeList[i].name = this.state.employee.name;
        employeeList[i].age = this.state.employee.age;

        this.setState({
          employee:{ id: 0, name: '', age: 0 },
          empList: employeeList
        });
        break;
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Employee List:</h1>
        <table border='1'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          {
            this.state.empList.map((emp) =>
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>
                  <button onClick={() => this.viewEmployee(emp.id)}>View</button>
                  <button onClick={() => this.editEmployee(emp.id)}>Edit</button>
                  <button onClick={() => this.deleteEmployee(emp.id)}>Delete</button>
                </td>
              </tr>)
          }
        </table>
        <div>
          <h1>Employee Detail:</h1>
          <b>Emp Id:</b> {this.state.employee.id}<br />
          <b>Emp Name:</b> {this.state.employee.name}<br />
          <b>Emp Age:</b> {this.state.employee.age}<br />
        </div>
        <div>
          <h1>Employee Detail:</h1>
          <b>Emp Id:</b><input type="text" value={this.state.employee.id} disabled /><br />
          <b>Emp Name:</b> <input type="text" name='txtName' value={this.state.employee.name} onChange={(event) => this.handleChange('name', event)} /><br />
          <b>Emp Age:</b> <input type="text" name="txtAge" value={this.state.employee.age} onChange={(event) => this.handleChange('age', event)} /><br />
          
          <button onClick={() => this.saveEmployee()}>Save</button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
