import React, { Component } from 'react';
import axios from 'axios'

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
        .then((res) => this.setState({ employee: res.data }))
    }

    render() {
        return (
            <div>
                <form>
                    <div><input onChange={this.handleChange} type="text" name="firstName" value={this.state.employee.firstName}/></div>
                    <div><input onChange={this.handleChange} type="text" name="lastName" value={this.state.employee.lastName}/></div>
                    <div><input onChange={this.handleChange} type="text" name="title" value={this.state.employee.title}/></div>
                    <div><input onChange={this.handleChange} type="date" name="birthDate" value={this.state.employee.birthDate}/></div>
                    <div><select name="gender" id="">
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                    </select></div>
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default EditEmployeeForm;