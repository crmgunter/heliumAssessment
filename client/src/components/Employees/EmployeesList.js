import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.div`
    display: flex;
    justify-content: space-around;
`

const Table = styled.table`
    border: 1px solid black;

    td {
        border: 1px solid black;
        padding: 10px;
    }
    td:nth-child(odd) {
        background: lightblue;
    }
`

class EmployeesList extends Component {
    state = {
        employees: [{
            email: '',
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
        const newEmail = `${firstName}${lastName}${randomNumbers}${randomLetters}@heliumservices.com`
        return newEmail
    }

    createNewEmail = (event) => {
        event.preventDefault()
        const newState = []
        this.state.employees.map((employee) => {
            const generatedEmail = this.generateEmail(employee.firstName, employee.lastName)
            console.log(generatedEmail)
            employee.email = generatedEmail
            console.log(employee)
            newState.push(employee)
            axios.patch(`/api/employees/${employee._id}`, employee)
                .then(() => {
                    this.getAllEmployees()
                })
        })
        this.setState({ employees: newState })
    }

    render() {
        return (
            <div>
                <Header>
                    <h1>Employees</h1>
                    <div>
                    <button onClick={this.createNewEmail}>Generate Emails</button>
                    <Link to="/employees/new">
                        <button>Add Employee</button>
                    </Link>
                    </div>
                </Header>
                <Table>
                    <tr>
                        <td>EmployeeId</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>Birth Date</td>
                        <td>Job Title</td>
                        <td>Email</td>
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
                            <td>{employee.email}</td>
                            <td>{employee.children.length}</td>
                            <td>
                                <button onClick={() => this.deleteEmployee(employee._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </Table>
            </div>
        );
    }
}

export default EmployeesList;