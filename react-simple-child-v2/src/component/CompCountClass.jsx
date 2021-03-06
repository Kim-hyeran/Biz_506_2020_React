import React, { Component } from 'react';

/**
 * class type의 component 생성
 * 반드시 Component Super Class를 extends하여 클래스를 생성한다.
 * render() { render code } 형식으로 본문 생성
 */

class CompCountClass extends Component {
    
    render() {
        // props로 전달받은 변수, 함수를 spread(전개)하여 변수명으로 쓸 수 있도록 준비
        const {countArg} = this.props

        return (
            <div>
                <h3>카운트 : {countArg}</h3>
            </div>
        );
    }
}

export default CompCountClass;