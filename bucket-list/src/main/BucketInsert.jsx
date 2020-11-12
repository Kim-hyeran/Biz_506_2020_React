import React, { Component } from 'react';

class BucketInsert extends Component {
    /**
     * input box에서 사용자의 입력을 받아 저장할 state 변수 선언하기
     */
    state = {
        bucket_title : ""
    }

    handelOnChange = (e)=> {
        this.setState({bucket_title : e.target.value})
        /**
         * input box가 여러 개일 경우
         * input box에 state 변수명을 name 속성으로 지정 : <input name="bucket_title" />
         * 아래와 같이 변수 값 setting
         * this.setState({[e.target.name] : e.target.value})
         */
        this.setState({[e.target.name] : e.target.value})
    }

    /**
     * 키보드로 문자열을 입력하고 Enter 키를 누르면
     */
    handleKeyPress = (e)=> {
        console.log(e.key)
        if(e.key === "Enter") {
            // props와 state를 분해하지 않고 직접 핸들링
            // this.props.bucketInsert(this.state.bucket_title)
            // const {bucketInsert} = this.props
            // bucketInsert(this.state.bucket_title)
            
            const {bucketInsert} = this.props
            const {bucket_title} = this.state
            bucketInsert(bucket_title)
        }
    }

    render() {
        return (
            <section className="w3-container-fluid">
                <div className="w3-form-control w3-margin">
                    <input className="w3-input w3-border w3-round"
                    name="bucket_title"
                    value={this.state.bucket_title}
                    onChange={this.handelOnChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="내용을 입력하세요" />
                </div>
            </section>
        );
    }
}

export default BucketInsert;