import React, { Component } from 'react';
import styled from 'styled-components'

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

class ChildrenTable extends Component {
    render() {
        return (
            <div>
                <Table>
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
                        {child.gender ? <td>Male</td> : <td>Female</td>}
                    </tr>
                ))}
                </Table>
            </div>
        );
    }
}

export default ChildrenTable;