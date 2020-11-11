import React, { Component } from 'react';
import TodoItem from "./TodoItem"

class TodoList extends Component {

    render() {
        /**
         * 클래스 방식에서 parent component로부터 받은 변수(데이터)는 this.props에 일괄적으로 저장된다.
         * 함수 방식 : (props)=> {} ({todoList})=> {}
         *      매개변수로 즉시 받을 수 있다.
         * 클래스 방식에서는 this.props로부터 필요한 데이터를 분해해야 한다.
         */
        const {todoList, onToggle} = this.props   // 데이터 분해하기

        const viewTodoList = todoList.map((todo)=> {
            return <TodoItem key = {todo.id} todo = {todo} onToggle = {onToggle} />
        })
        
        return (
            <div>
                {viewTodoList}
            </div>
        );
    }
}

export default TodoList;