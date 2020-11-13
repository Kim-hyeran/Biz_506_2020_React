import React, { Component } from 'react';
import "../css/BBSList.css"
import BBSItem from "./BBSItem"

class BBSList extends Component {
    render() {
        const {bbsList} = this.props
        const bbsItemList = bbsList.map((bbs, index)=> (
            <BBSItem key={bbs.id} index={index} bbs={bbs} />
        ))

        return (
            <table className="bbs-list">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>&hearts;</th>
                    </tr>
                </thead>
                <tbody>
                    {bbsItemList}
                </tbody>
            </table>
        );
    }
}

export default BBSList;