import React, { Component } from 'react';
import BucketInsert from "./BucketInsert"
import BucketList from "./BucketList"

class BucketMain extends Component {
    /**
     * id 변수는 state가 아닌 일반형 변수
     * 일반형 변수는 코드 내에서 자유롭게 값을 변경하여 사용 가능
     * 이 프로젝트에서는 bucketList 내 b_id의 PK 값을 만들기 위해 사용
     */
    id = 1
    // react에서 state형 변수는 절대 직접 변경하지 않는다.
    state = {
        bucketList : [
            {
                b_id : 0,
                b_flag : 0,
                b_start_date : "2020-11-12",
                b_title : "리액트 정복",
                b_end_date : "",
                b_end_check : false,
                b_cancel : false
            },
            {
                b_id : 1,
                b_flag : 1,
                b_start_date : "2020-10-12",
                b_title : "제주도 여행",
                b_end_date : "2020-11-11",
                b_end_check : true,
                b_cancel : true
            }
        ]
    }

    /**
     * Life Cycle Method
     * react의 class type component에는 여러 가지 내장 method가 존재
     * 데이터에 변화가 발생하면 정해진 순서에 따라 내장 method가 실행되면서 화면을 rendering한다.
     * 화면이 이미 완성된 상태에서 데이터가 변화했을 때 re-rendering할 경우 실행되는 method
     * 데이터를 insert, update, delete했을 때 실행될 method
     * 실제 DB와 연동을 하면 이 method에서 AJAX로 서버에 데이터를 전송하고, 서버에서는 CRUD 수행
     * 이 method가 react에 의해 호출될 때 state 변수의 변화를 감지할 수 있다.
     * state변수에 변화가 생겨 화면이 rendering될 때, 변화 이전 데이터가 pre*** 매개변수에 담겨 전달된다.
     * 이 데이터와 현재 데이터를 비교하여 달라졌을 경우 DB에 저장하는 등의 일을 수행하여 효율을 높일 수 있다.
     */
    componentDidUpdate(preProps, preState) {
        const preString = JSON.stringify(preState.bucketList)
        const thisString = JSON.stringify(this.state.bucketList)
        if(preString !== thisString) {
            localStorage.setItem("bucketList", thisString)
        }
    }

    // 현재 component가 모두 mount되고 rendering이 되기 직전에 호출되는 method
    // 서버로부터 데이터를 요청하여 가져오는 코드 추가
    componentDidMount() {
        const loadBucketList = localStorage.getItem("bucketList")   // String
        // 문자열일 경우 null, ""이 아니면 논리적으로 true가 된다.
        if(loadBucketList) {
            const jsonBucketList = JSON.parse(loadBucketList)
            this.setState({bucketList : jsonBucketList})
            this.id = jsonBucketList.length
        }
    }

    bucketInsert = ((bucket_title)=> {
        const date = new Date()
        const bucket = {
            b_id : ++this.id,
            b_flag : 9,
            b_start_date : date.toString(),
            b_title : bucket_title,
            b_end_date : "",
            b_end_check : false,
            b_cancel : false
        }
        // 일반적이 js코드에서 list에 데이터 추가하기 : bucketList.push(bucket)
        // react의 선언 철학 : state 변수는 절대 직접 변경하지 않는다.
        this.setState({bucketList : this.state.bucketList.concat({...bucket})})
        // 전개연산자를 사용하는 방법
        this.setState({bucketList : [...this.state.bucketList, bucket]})
    })

    handleFlagClick = (id)=> {
        const flagBucketList = this.state.bucketList.map(bucket=> {
            if(bucket.b_id === Number(id)) {
                const flag = bucket.b_flag + 1
                return {
                    ...bucket, b_flag : flag
                }
            } else {
                return bucket
            }
        })
        this.setState({bucketList : flagBucketList})
    }

    updateBucket = (id, title)=> {
        const updateBucketList = this.state.bucketList.map(bucket=> {
            if(bucket.b_id === Number(id)) {
                return {
                    ...bucket, b_title : title
                }
            } else {
                return bucket
            }
        })
        this.setState({bucketList : updateBucketList})
    }

    handleCancel = (id)=> {
        const cancelBucketList = this.state.bucketList.map(bucket=> {
            if(bucket.b_id === Number(id)) {
                return {...bucket, b_cancel : !bucket.b_cancel}
            } else {
                return bucket
            }
        })
        this.setState({bucketList : cancelBucketList})
    }

    handleComplete = (id)=> {
        const date = Date()
        const compBucketList = this.state.bucketList.map(bucket=> {
            if(bucket.b_id === Number(id)) {
                return {...bucket, b_end_date : date.toString(), b_end_check : !bucket.b_end_check}
            } else {
                return bucket
            }
        })
        this.setState({bucketList : compBucketList})
    }
    /**
     * class component에서 child component에 state형 변수를 보낼 때는
     *      보낼 변수 명 = {this.state.변수} 형식을 사용한다.
     * 함수를 보낼 때
     *      보낼 함수 명 = {this.함수}
     */
    render() {
        return (
            <div>
                <p><BucketInsert bucketInsert = {this.bucketInsert} /></p>
                <p><BucketList
                bucketList = {this.state.bucketList}
                handleFlagClick = {this.handleFlagClick}
                updateBucket = {this.updateBucket}
                handleCancel = {this.handleCancel}
                handleComplete = {this.handleComplete} /></p>
            </div>
        );
    }
}

export default BucketMain;