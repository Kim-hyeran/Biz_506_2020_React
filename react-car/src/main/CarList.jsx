import React, { Component } from 'react';
import CarItem from "./CarItem"
import "../css/CarList.css"

class CarList extends Component {
    render() {
        return (
            <table className="car-list">
                <thead>
                    <th>No.</th>
                    <th>구분</th>
                    <th>시작일</th>
                    <th>종료일</th>
                    <th>현재거리</th>
                    <th>소요비용</th>
                    <th>장소</th>
                </thead>
                <tbody>
                    <CarItem />
                </tbody>
            </table>
        );
    }
}

export default CarList;