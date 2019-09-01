/**
 * React 基本用法
 */

import React from 'react';
import ReactDOM from 'react-dom';
// Hash 路由
// import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class A extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Component A
                <Switch>
                    {/* exact参数为必须完成匹配 */}
                    <Route exact path={`${this.props.match.path}`} render={() => {
                        return <div>当前组件是不带参数的A</div>
                    }} />
                    <Route path={`${this.props.match.path}/sub`} render={(route) => {
                        return <div>当前组件是Sub</div>
                    }} />
                    {/* 通配的最好放在最后面 */}
                    <Route path={`${this.props.match.path}/:id`} render={(route) => {
                        return <div>当前组件是带参数的A，参数是：{route.match.params.id}</div>
                    }} />
                </Switch>
            </div>
        )
    }
}

class B extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>Component B</div>
    }
}

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/a">组件A</Link>
                <br />
                <Link to="/a/123">带参数的组件A</Link>
                <br />
                <Link to="/a/sub">跳到/a/sub</Link>
                <br />
                <Link to="/b">组件B</Link>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
        </Wrapper>
    </Router>,
    document.getElementById('root')
)
