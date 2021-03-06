import React, { Component } from 'react';

class BBSItem extends Component {
    render() {
        const {index, bbs} = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{bbs.b_subject}</td>
                <td>{bbs.b_writer}</td>
                <td>{bbs.b_date}</td>
                <td>&times;</td>
            </tr>
        );
    }
}

export default BBSItem;