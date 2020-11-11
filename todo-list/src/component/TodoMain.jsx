import React, { Component } from 'react';
import "../css/TodoMain.css"
import "./TodoInput"
import TodoInput from './TodoInput'
import TodoList from "./TodoList"

/**
 * class 방식 Component(rcc)
 * 반드시 Component Class를 상속받아 사용
 * render() method를 사용하여 실제 view를 구현
 * 함수 방식에서 바로 나타나던 return문이 render() method 내부에 위치
 */
class todoMain extends Component {

    // class 방식에서 state 변수 선언하기
    id = 3
    state={
        todoList : [
            {id : 0, text : "오늘은 11월 11일입니다", isComplete : false},
            {id : 1, text : "오늘은 수요일입니다", isComplete : true},
            {id : 2, text : "단축수업 해주세요", isComplete : false}
        ]
    }
    
    /*
     * class 방식의 main에서 이벤트 함수를 선언하는 방법
     * const 키워드 없이 함수 선언
     */
    onToggle = (id)=> {
        /*
         * id 값을 기준으로 todoList 변수의 isComplete를 변경
         * 1. this.state에서 todoList 변수를 추출
         */
        const {todoList} = this.state
        const compTodoList = todoList.map(todo=> {
            if(todo.id === Number(id)) return {...todo, isComplete : !todo.isComplete}
            else return todo
        })
        /**
         * class 방식 component
         * state 변수를 setting하기 위한 setter를 별도로 만들지 않는다.
         * state 변수를 setting하기 위해서는 this.setState()라는 공통함수를 사용한다
         * this.setState({state 변수 : 새로운 값}) 형식으로 setting
         */
        this.setState({todoList : compTodoList})
    }

    onCreate = (todo)=> {
        const newTodoList = [...this.state.todoList, {id : this.id++, text : todo, isComplete : false}]

        this.setState({todoList : newTodoList})
    }

    onDeleteItem = (id)=> {
        const deleteTodoList = this.state.todoList.filter(todo=> {
            if(todo.id !== Number(id)) return todo
        })
        this.setState({todoList : deleteTodoList})
    }

    render() {
        return (
            <main className="todo-main">
                <h3>TO DO LIST</h3>
                <TodoInput onCreate={this.onCreate} />
                <TodoList todoList={this.state.todoList} onToggle = {this.onToggle} onDeleteItem = {this.onDeleteItem} />
            </main>
        );
    }
}

export default todoMain;