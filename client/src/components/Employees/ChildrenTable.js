import React, { Component } from 'react';

class ChildrenTable extends Component {
    render() {
        return (
            <div>
                <h1>children</h1>
                <table>
                <tr>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>Birth Date</td>
                        <td>Gender</td>
                    </tr>
                {this.props.children.map((child, i) => (
                    <tr key={i}>
                        <td>{child._id}</td>
                        <td>{child.firstName}</td>
                        <td>{child.lastName}</td>
                        <td>{child.birthDate}</td>
                        <td>{child.gender}</td>
                    </tr>
                ))}
                </table>
            </div>
        );
    }
}

export default ChildrenTable;