import React, { Component } from 'react';
import axios from 'axios'
import EditEmployeeForm from './EditEmployeeForm'
import ChildrenTable from './ChildrenTable'

class SingleEmployeeView extends Component {
    state = {
        employee: {
            children: [{}]
        }
    }

    componentDidMount() {
        this.getSingleEmployee()
    }

    getSingleEmployee = () => {
        axios.get(`/api/employees/${this.props.match.params.employeeId}`)
            .then((res) => this.setState({ employee: res.data }))
    }

    render() {

        const childrenTable =  this.state.employee.children.length > 0 ? <ChildrenTable children={this.state.employee.children}/> : <h1>This employee has no children</h1>
        return (
            <div>
                <div>
                    <h1>Update Employee's Details - {this.state.employee.firstName} {this.state.employee.lastName}</h1>
                    <EditEmployeeForm employee={this.state.employee} />
                </div>

                <div>
                    <h1>Children</h1>
                    {childrenTable}
                    
                </div>

            </div>
        );
    }
}

export default SingleEmployeeView;