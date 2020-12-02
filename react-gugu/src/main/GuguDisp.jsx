import React from 'react';

function GuguDisp({number}) {
    // const guguStyle = {
    //     fontSize: "40px"
    // }

    const gugus = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // 배열의 개수만큼 컴포넌트 생성
    const guguMaps = gugus.map((item, index)=> {
        return (
            <div>
                {number} x {item} = {number*item}
            </div>
        )
    })

    return (
        <div> {guguMaps}
            {/* <p style={guguStyle}>
                {number} x 1 = {number*1}<br/>
                {number} x 2 = {number*2}<br/>
                {number} x 3 = {number*3}<br/>
                {number} x 4 = {number*4}<br/>
                {number} x 5 = {number*5}<br/>
                {number} x 6 = {number*6}<br/>
                {number} x 7 = {number*7}<br/>
                {number} x 8 = {number*8}<br/>
                {number} x 9 = {number*9}
            </p> */}
        </div>
    );
}

export default GuguDisp;