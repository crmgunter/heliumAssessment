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

    deleteEmployee = (employeeId) => {
        axios.delete(`/api/employees/${employeeId}`)
        .then(() => this.getAllEmployees())
    }

    generateEmail = (firstName, lastName) => {
        const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        const numbers = '0123456789'
        let randomLetters = ''
        let randomNumbers = ''
        for (let i = 0; i < 6; i++) {
            const getRandomLetters = alpha.charAt(Math.floor(Math.random() * alpha.length))
            randomLetters += getRandomLetters
        }
        for (let i = 0; i < 3; i++) {
            const getRandomNumbers = numbers.charAt(Math.floor(Math.random() * numbers.length))
            randomNumbers += getRandomNumbers
        }
        console.log(firstName, randomNumbers, lastName, randomLetters)
        const newEmail = `${firstName}${lastName}${randomNumbers}${randomLetters}@heliumservices.com`
        console.log(newEmail)
    }

    createNewEmail = () => {
        this.state.employees.map((employee) => {
            this.generateEmail(employee.firstName, employee.lastName)
        })
    }

    render() {
        
        return (
            <div>
                <Header>
                    <h1>Employees</h1>
                    <button>Generate Emails</button>
                    <Link to="/employees/new">
                    <button>Add Employee</button>
                    </Link>
                </Header>
                <table>
                    <tr>
                        <td>EmployeeId</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>Birth Date</td>
                        <td>Job Title</td>
                        <td>Number of Children</td>
                        <td>Delete</td>
                    </tr>
                    {this.state.employees.map((employee, i) => (
                        
                        <tr key={i}>
                            <td>{employee._id}</td>
                            <Link to={`/employees/${employee._id}`}><td>{employee.firstName}</td></Link>
                            <td>{employee.lastName}</td>
                            <td>{employee.birthDate}</td>
                            <td>{employee.title}</td>
                            <td>{employee.children.length}</td>
                            <td>
                                <button onClick={() => this.deleteEmployee(employee._id)}>Delete</button>
                            </td>
                        </tr>
                ))}
                </table>
            </div>
        );
    }
}

export default EmployeesList;