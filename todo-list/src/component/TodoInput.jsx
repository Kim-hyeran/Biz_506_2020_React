import React, { Component } from 'react';
import "../css/TodoInput.css"

class TodoInput extends Component {

    state = {
        todo : ""
    }

    onChange = (e)=> {
        this.setState({[e.target.name] : e.target.value})
        // this.setState({todo : e.target.value})
    }

    onCreate = (e)=> {
        // alert(this.state.todo)
        const {onCreate} = this.props
        onCreate(this.state.todo)
    }

    render() {
        return (
            <div className="form">
                <input value={this.state.todo} onChange={this.onChange} name="todo" placeholder="내용을 입력하세요" />
                <div className="todo-input" onClick={this.onCreate}>추가</div>
            </div>
        );
    }
}

export default TodoInput;