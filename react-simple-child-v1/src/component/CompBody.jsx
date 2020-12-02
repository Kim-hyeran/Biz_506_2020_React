import React, { useState } from 'react';
import CompCount from "./CompCount"
import CompButton from "./CompButton"

/**
 * CompBody에는 CompCount와 CompButton Child component가 import되어있다.
 * 이런 상황에서 CompButton의 button을 클릭했을 때 CompCount에 변화된 값을 rendering하여 보여주어야 한다.
 * 같은 component에서는 그냥 state 변수를 선언하고, 그 변수를 변화시키는 코드를 작성하는 것이 어렵지 않다.
 * 지금은 Count와 Button이 형제 관계인데, react에서 형제지간의 데이터 직접교환이나 변수 변화의 행위를 금지하고 있다.
 * Count의 변수를 변화시켜 rendering을 수행하려면 Button에서 변화시키는 행위를 부모에게 전달하고, 부모 Count 변수를 변화시켜 다시 Count에게 전달하는 방식을 사용해야 한다.
 */
function CompBody(props) {

    // 1. 부모 component에서 state 변수 선언하기
    const [count, setCount] = useState(0)
    
    // 2. 선언된 state 변수를 rendering할 component로 전달
    // 3. CompCount에서 state 변수 받기 : CompCount.jsx로 jump
    // countArg 이름으로 count state 변수 전달
    // 6. CompButton count 변수를 변화시킬 때 사용할 setCount 함수 전달
    // 7. CompButton에서 setCount함수 받기 : CompButton.jsx로 jump
    return (
        <div>
            <CompCount countArg = {count} />
            <CompButton setCountFunc = {setCount} countArg = {count} />
        </div>
    );
}

export default CompBody;