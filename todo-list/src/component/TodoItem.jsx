import React, { Component } from 'react';
import "../css/TodoItem.css"

class TodoItem extends Component {
    render() {
        const {todo, onToggle, onDeleteItem} = this.props
        const onClick = (e, id)=> {
            if(e.target.className === "delete-item") {
                if(window.confirm("삭제할까요?")) {
                    // alert("삭제되었습니다")
                    onDeleteItem(id)
                    return false
                }
            } else {
                onToggle(id)
            }
        }

        return (
            // onClick={onToggle} : 매개변수 전달이 필요 없는 event 핸들러
            // onClick={()=>ontoggle(id)} : 매개변수 전달이 필요한 event 핸들러
            <div className="todo-item" onClick={(e)=> onClick(e, todo.id)}>
                <div className={`todo-text ${todo.isComplete ? "checked" : ""}`}>{todo.text}</div>
                {todo.isComplete && <div className="check-mark">&#x2713;</div>}
                <div className="delete-item">&times;</div>
            </div>
        );
        // {todo.isComplete && <div></div>}
        // {}로 묶은 부분은 내부의 연산 결과에 따라 rendering을 수행하는 코드
        // todo.isComplete 값이 true일 경우만 <div></div>를 rendering하여 화면에 출력하는 조건부 rendering
    }
}

export default TodoItem;