import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.div`
    display: flex;
    justify-content: space-around;
`

class EmployeesList extends Component {
    state = {
        employees: [{
            children: [{}]
        }]
    }

    componentDidMount() {
        this.getAllEmployees()
    }

    getAllEmployees = () => {
        axios.get(`/api/employees`)
            .then((res) => this.setState({ employees: res.data }))
    }

    render() {
        return (
            <div>
                <Header><h1>Employees</h1>
                    <button>Add Employee</button></Header>
                <table>
                    <tr>
                        <td>EmployeeId</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>Birth Date</td>
                        <td>Job Title</td>
                        <td>Number of Children</td>
                    </tr>
                    {this.state.employees.map((employee, i) => (
                        
                        <tr key={i}>
                            <td>{employee._id}</td>
                            <Link to={`/employees/${employee._id}`}><td>{employee.firstName}</td></Link>
                            <td>{employee.lastName}</td>
                            <td>{employee.birthDate}</td>
                            <td>{employee.title}</td>
                            <td>{employee.children.length}</td>
                        </tr>
                ))}
                </table>
            </div>
        );
    }
}

export default EmployeesList;