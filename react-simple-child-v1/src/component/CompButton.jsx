import React from 'react';

/**
 * 8. CompBody에서 보낸 setCountFunc 함수 받기
 *      가. 함수 방식에서는 매개변수 {setCountFunc}으로 받기
 *      나. 클래스 방식에서는 this.props.setCountFunc으로 받기
 *          const {setCountFunc} = this.props
 */
function CompButton({setCountFunc, countArg}) {
    const increment = () => {
        setCountFunc(countArg+1)
    }
    const derement = () => {
        setCountFunc(countArg-1)
    }
    return (
        <div>
            <button onClick={increment}>증가</button>
            <button onClick={derement}>감소</button>
        </div>
    );
}

export default CompButton;