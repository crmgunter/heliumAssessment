import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const FormContainer = styled.div`
    text-align: center;
    
    form {
        border: 1px solid black;
        width: 400px;
        margin: 0 auto;
        padding: 20px;
    }

    input {
        padding: 5px;
        margin: 2px;
    }

`

// const 

class AddEmployeeForm extends Component {
    state = {
        employee: {
            firstName: '',
            lastName: '',
            title: '',
            date: '',
            gender: ''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.employee }
        newState[event.target.name] = event.target.value
        this.setState({ employee: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.employee
        axios.post(`/api/employees`, payload)
        .then((res) => {
            this.props.history.goBack()
        })
    }

    render() {
        return (
            <FormContainer>
                <h1>Add New Employee</h1>
                <form onSubmit={this.handleSubmit}>
                    <div><input onChange={this.handleChange} placeholder="First Name" type="text" name="firstName" value={this.state.employee.firstName} /></div>
                    <div><input onChange={this.handleChange} placeholder="Last Name" type="text" name="lastName" value={this.state.employee.lastName} /></div>
                    <div><input onChange={this.handleChange} placeholder="Title" type="text" name="title" value={this.state.employee.title} /></div>
                    <div><input onChange={this.handleChange} type="date" name="birthDate" value={this.state.employee.birthDate} /></div>
                    <div><select onChange={this.handleChange} name="gender" value={this.state.employee.gender}>
                        <option>Select a gender</option>
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                    </select></div>
                    <button>Save</button>
                </form>
            </FormContainer>
        );
    }
}

export default AddEmployeeForm;