import React, { Component } from 'react';
import BBSInput from "./BBSInput"
import BBSList from "./BBSList"

class BBSMain extends Component {
    state = {
        bbsList : [
            {id : 0, b_writer : "홍길동", b_date : "2020-11-13", b_subject : "오늘 금요일이야!!!!!!"},
            {id : 1, b_writer : "이몽룡", b_date : "2020-11-13", b_subject : "오늘 금요일이야!!!!!!"},
            {id : 2, b_writer : "성춘향", b_date : "2020-11-13", b_subject : "오늘 금요일이야!!!!!!"}
        ]
    }
    render() {
        const {bbsList} = this.state
        return (
            <div>
                <BBSInput />
                <BBSList bbsList = {bbsList} />
            </div>
        );
    }
}

export default BBSMain;