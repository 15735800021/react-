import React, {Component, PropTypes } from 'react'
import axios from 'axios';

const datas = [];

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            arr: {}
        };
        this.get = this.get.bind(this);
    }

    get(){
        axios.get('v1/get-chain-base-infos?companyName=&companyType=&code&name&pageSize=1&currentPage=2').then((res)=>{
            console.log(res.data);
            const data=res.data.map((item,index)=> {
                // <li key={index}>{item}</li>
                localStorage.setItem('data',item);
                console.log(localStorage.getItem('data'));
            })
        }).catch((err)=>{
            console.log(err.status);
        })
    }
    render(){
        //从组件的props属性中导入两个个方法和一个变量
        
        const { increment, decrement, counter } = this.props;
        
        const datas = localStorage.getItem('data')
        // const data = datas.map(obj => (
        //     <li key={obj.index}>{obj}</li>
        // ));
        //渲染组件，包括一个数字，2个按钮
        return (
            <div>
                <p>{ counter }</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={this.get} >获取数据</button>
                <ul>
                    {/* {data} */}
                </ul>
            </div>
        )
    }
}

//限制组件的props安全
// Counter.propTypes = {
//     //increment必须为fucntion,且必须存在
//     increment: PropTypes.isRequired,
//     //decrement必须为fucntion,且必须存在
//     decrement: PropTypes.isRequired,
//     //counter必须为数字，且必须存在
//     counter: PropTypes.number.isRequired
//   };

export default Counter
  