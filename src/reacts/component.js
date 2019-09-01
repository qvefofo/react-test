import React from 'react';
import ReactDOM from 'react-dom';

/***
 * 组件定义
 */
function Component() {
    return <p>aaaaa</p>
}

class ES6Component extends React.Component {
    render() {
        return <h1>我是H1</h1>
    }
}

ReactDOM.render(
    <div>
        <ES6Component />
        <Component />
    </div >,
    document.getElementById('root')
)

/***
 * 事件处理1
 */
function Component() {
    return <p>aaaaa</p>
}

class ES6Component extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            name: 'jax',
            age: 18
        }
        this.handClick = this.handClick.bind(this) // 每次都要绑一下，可以用箭头函数处理掉
    }
    handClick() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        return (
            <div>
                <h1>我是{this.state.name}</h1>
                <p>现在{this.state.age}岁</p>
                <button onClick={this.handClick}>加一岁</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <ES6Component name="Rosen" aaa="bbb" />
        {/* <Component /> */}
    </div >,
    document.getElementById('root')
)


/***
 * 事件处理2
 */
function Component() {
    return <p>aaaaa</p>
}

class ES6Component extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            name: 'jax',
            age: 18
        }
    }
    handClick() {
        this.setState({
            age: this.state.age + 1
        })
    }
    handChange(e) {
        console.log(e.target.value)
        this.setState({
            age: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>我是{this.state.name}</h1>
                <p>现在{this.state.age}岁</p>
                <button onClick={(e) => { this.handClick(e) }}>加一岁</button>
                <p><input type="text" onChange={(e) => { this.handChange(e) }} /></p>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <ES6Component name="Rosen" aaa="bbb" />
        {/* <Component /> */}
    </div >,
    document.getElementById('root')
)


/***
 * 纯组件与容器式组件
 */
function Component() {
    return <p>aaaaa</p>
}

class ES6Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'jax',
            age: 18
        }
    }
    handClick() {
        this.setState({
            age: this.state.age + 1
        })
    }
    handChange(e) {
        console.log(e.target.value)
        this.setState({
            age: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>我是{this.state.name}</h1>
                <p>现在{this.state.age}岁</p>
                <button onClick={(e) => { this.handClick(e) }}>加一岁</button>
                <p><input type="text" onChange={(e) => { this.handChange(e) }} /></p>
            </div>
        )
    }
}
class Title extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        console.log(props.children)
    }
    render(props) {
        return (
            <div>{this.props.children}</div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div className="">
                {/* 容器式组件 */}
                <Title title="APP Title" >
                    <span>App span</span>
                    <p>
                        <a href="">Link</a>
                    </p>
                </Title>
                <hr />
                {/* 单纯组件 */}
                <ES6Component />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


/**
 * 父子组件传值
 */

class Children extends React.Component {
    constructor(props) {
        super(props)
    }
    handClick(e) {
        this.props.changeColor(e)
    }
    render() {
        return (
            <div>
                <h1>父组件背景色 {this.props.bgColor}</h1>
                <button onClick={(e) => { this.handClick('red') }}>改变父组件颜色</button>
            </div>
        )
    }
}
class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: '#999'
        }
    }
    onBgColorChange(color) {
        console.log(color)
        this.setState({
            bgColor: color
        })
    }
    render(props) {
        return (
            <div style={{ background: this.state.bgColor }}>
                <Children
                    bgColor={this.state.bgColor}
                    changeColor={(color) => { this.onBgColorChange(color) }} />
            </div>
        )
    }
}

ReactDOM.render(
    <Father />,
    document.getElementById('root')
)

/**
 * 又叫状态提升
 * React中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件上.在父组件上改变这个状态然后通过props分发给子组件.
 * 兄弟组件传值，通过父组传递
 */

class Children1 extends React.Component {
    constructor(props) {
        super(props)
    }
    handClick(e) {
        this.props.changeColor(e)
    }
    render() {
        return (
            <div>
                <h1>组件1 {this.props.bgColor}</h1>
                <button onClick={(e) => { this.handClick('red') }}>改变组件2背景颜色</button>
            </div>
        )
    }
}
class Children2 extends React.Component {
    constructor(props) {
        super(props)
    }
    handClick(e) {
        this.props.changeColor(e)
    }
    render() {
        return (
            <div style={{ background: this.props.bgColor }}>
                <h1>组件2 {this.props.bgColor}</h1>
            </div>
        )
    }
}
class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: '#999'
        }
    }
    onBgColorChange(color) {
        console.log(color)
        this.setState({
            bgColor: color
        })
    }
    render(props) {
        return (
            <div >
                <Children1 changeColor={(color) => { this.onBgColorChange(color) }} />
                <Children2 bgColor={this.state.bgColor} />
            </div>
        )
    }
}

ReactDOM.render(
    <Father />,
    document.getElementById('root')
)