import React, { Component } from 'react';
import "../css/CarInput.css"

class CarInput extends Component {
    render() {
        return (
            <div className="car-input">
                <input name="c_start_date" placeholder="시작일" />
                <input name="c_end_date" placeholder="종료일" />
                <input name="c_distance" placeholder="현재 거리" />
                <input name="c_cost" placeholder="소요 비용" />
                <input name="c_place" placeholder="장소" />
                <button>저장</button>
            </div>
        );
    }
}

export default CarInput;