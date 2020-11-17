import React, { Component } from 'react';
import CarInput from "./CarInput"
import CarList from "./CarList"

class CarMain extends Component {
    render() {
        return (
            <div>
                <CarInput />
                <CarList />
            </div>
        );
    }
}

export default CarMain;