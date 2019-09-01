/**
 * React 生命周期
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    // 构造函数
    constructor(props) {
        super(props)
        this.state = {
            data: 'old State'
        }
        console.log('constructor', '初始化数据')
    }
    // 组件将要加载
    componentWillMount() {
        console.log('componentWillMount', '渲染前，可以请求异步')
    }
    // 组件加载完成
    componentDidMount() {
        console.log('componentWillMount', '渲染完成')
    }
    // 将要接收父组件传递的 props
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps', '接收父组件的值', this.props)
    }
    // 组件发生变化时，子组件是不是应该更新，
    // 需要有返回值：
    // true 为可更新 
    // false 为不可更新，不会走到 update的生命周期
    shouldComponentUpdate() {
        let falg = true
        console.log('shouldComponentUpdate', '控制是否能更新数据', falg)
        return falg;
    }
    // 组件将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate', '组件更新前', this)
    }
    // 组件更新完成
    componentDidUpdate() {
        console.log('componentDidUpdate', '组件更新完成', this)
    }

    // 组件销毁前
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // 事件处理
    handleClick() {
        console.log('更新数据')
        this.setState({
            data: 'new State'
        })
    }
    // 渲染
    render() {
        console.log('render 渲染')
        return (
            <div>
                <div>{this.props.data}</div>
                <button onClick={() => { this.handleClick() }}>更新组件</button>
            </div>
        )
    }
}

class App extends React.Component {
    // 构造函数
    constructor(props) {
        super(props)
        this.state = {
            data: 'old Props',
            hasChild: true
        }
        console.log('constructor', '初始化数据')
    }
    onPropsChange() {
        console.log('更新 Props')
        this.setState({
            data: 'new Props'
        })
    }
    onDestoryChild() {
        console.log('干掉子组件')
        this.setState({
            hasChild: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.hasChild
                        ? <Component data={this.state.data} />
                        : null
                }

                <button onClick={() => this.onPropsChange()}>改变Props</button>
                <br />
                <button onClick={() => this.onDestoryChild()}>干掉子组件</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
