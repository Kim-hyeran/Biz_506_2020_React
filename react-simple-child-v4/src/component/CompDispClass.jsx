import React, { Component } from 'react';

class CompDispClass extends Component {
    render() {
        const {number} = this.props

        return (
            <div>
                <h3>{number}과(와) 20의 합 : {Number(number)+20}</h3>
                <h3>{number}과(와) {number}의 곱 : {number*number}</h3>
            </div>
        );
    }
}

export default CompDispClass;