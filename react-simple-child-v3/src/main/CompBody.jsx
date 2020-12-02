import React, { useEffect, useState } from 'react';
import CompInput from "./CompInput"
import CompDisp from "./CompDisp"

function CompBody(props) {
    const [number, setNumber] = useState(3)

    // 함수형 컴포넌트에서 life cycle method 대신 사용하는 함수
    // 1. 화면이 수시로 rendering되거나, state 변수가 변경될 때 호출
    useEffect(()=> {})  // 함수 본체만 있는 경우
    // 2. number state 변수가 변경되었을 때만 호출
    useEffect(()=> {}, number)  // 함수 본체와 state 변수가 있는 경우
    // 3. 최초 한 번만 호출
    useEffect(()=> {}, [])  // 함수 본체와 비어있는 배열이 있는 경우

    return (
        <div>
            <CompInput setNumber={setNumber} />
            <CompDisp number={number} />
        </div>
    );
}

export default CompBody;