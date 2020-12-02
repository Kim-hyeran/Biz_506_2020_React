import React, { useState } from 'react';

function GuguInput({setNumber}) {
    const inputStyle = {
        fontSize: "20px",
        padding: "10px"
    }
    const [inputValue, setInputValue] = useState(0)
    const onChange = (e)=> {
        setInputValue(e.target.value)
        setNumber(Number(e.target.value))
    }
    
    return (
        <div>
            <input onChange={onChange} style={inputStyle} placeholder="숫자를 입력하세요" value={inputValue} />
        </div>
    );
}

export default GuguInput;