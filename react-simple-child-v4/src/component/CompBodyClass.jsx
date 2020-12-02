import React, { Component } from 'react';
import CompDisp from "./CompDispClass"
import CompInput from "./CompInputClass"

class CompBodyClass extends Component {
    state = {number : 3}
    setStateFunc = (value) => {
        this.setState({number : value})
    }

    /**
     * Life Cycle method
     * 화면을 최초로 rendering할 때, 중간에 데이터가 변경되었을 때, 데이터가 변경되어 재rendering이 되었을 때 각 순간마다 내부에서 호출되는 method
     * 
     */
    // 수행 중간에 rendering 오류가 발생했을 때 오류를 잡아내는 method(사용 빈도 낮음)
    componentDidCatch()
    // 첫번재(최초) rendering이 이루어진 후 호출되는 method, 서버로부터 ajax 등을 이용하여 데이터를 가져오는 code를 작성하는 곳
    componentDidMount() {
        console.log("DisMount")
    }
    // 컴포넌트들이 서로 연결되는 구조일 때 연결이 종료된 후
    // DB를 연결하는 등의 작업이 중간에 존재하는 경우 연결을 종료하는 resource 제거 코드를 작성하는 부분
    componentWillMount() {}
    // state 변수가 변경되고 호출되는 method    
    componentDidUpdate(preProps, preState) {
        /**
         * this.props와 preProps를 비교하는 코드 작성 가능
         * this.props는 props 값을 전달받은 후 저장된 값
         * preProps는 props 값을 전달받기 전의 값이 저장되어 있다.
         * this.state : state 변수가 변경된 후의 값이 저장
         * preState : state 변수가 변경되기 전의 값이 저장
         */
    }
    // state 변수가 변경되었을 경우 처리 여부를 결정하는 method
    shouldComponentUpdate(preProps, preState) {
        // pre와 this의 값을 비교하여 변경이 이루어지면 true를 return하고, 그렇지 않을 경우 false를 return한다.
    }

    render() {
        return (
            <div>
                <CompInput setStateFunc={this.setStateFunc} />
                <CompDisp number={this.state.number} />
            </div>
        );
    }
}

export default CompBodyClass;