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

class EditEmployeeForm extends Component {
    state = {
        employee: {
            firstName: '',
            lastName: '',
            title: '',
            birthDate: '',
            gender: true
        }
    }

    handleChange = (event) => {
        const updatedState = { ...this.state.employee }
        updatedState[event.target.name] = event.target.value
        this.setState({ employee: updatedState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.employee
        axios.patch(`/api/employees/${this.props.employee._id}`, payload)
        .then((res) => {
            this.setState({ employee: res.data })
            this.props.getSingleEmployee()
        })
    }

    render() {
        return (
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                    <div><input onChange={this.handleChange} placeholder={this.props.employee.firstName} type="text" name="firstName" value={this.state.employee.firstName}/></div>
                    <div><input onChange={this.handleChange} placeholder={this.props.employee.lastName} type="text" name="lastName" value={this.state.employee.lastName}/></div>
                    <div><input onChange={this.handleChange} placeholder={this.props.employee.title} type="text" name="title" value={this.state.employee.title}/></div>
                    <div><input onChange={this.handleChange} type="date" name="birthDate" value={this.state.employee.birthDate}/></div>
                    <div><select onChange={this.handleChange} name="gender" value={this.state.employee.gender}>
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                    </select></div>
                    <button>Save</button>
                </form>
            </FormContainer>
        );
    }
}

export default EditEmployeeForm;