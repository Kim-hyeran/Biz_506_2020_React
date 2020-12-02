import React, { useState } from 'react';
import GuguInput from "./GuguInput"
import GuguDisp from "./GuguDisp"

function GuguBody(props) {
    const [number, setNumber] = useState(2)

    return (
        <div>
            <GuguInput setNumber = {setNumber} />
            <GuguDisp number = {number} />
        </div>
    );
}

export default GuguBody;