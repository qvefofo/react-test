// JSX 的基本语法
import React from 'react';
import ReactDOM from 'react-dom';

import '../index.scss';

let name = 'Rose';
let names = ['name1', 'name2', 'name3']
let flag = false;
let jsx = (
    <div className="jsx">
        {/* 变量使用 */}
        <p>i am {name}</p>
        {/* {条件判断} */}
        {flag ? <p>i am {name}</p> : <p>I am not {name}</p>}
        {/* 数据循环 */}
        {
            names.map((name, index) => <p key={index}>Hello, i am {name}</p>)
        }
    </div>
);

ReactDOM.render(jsx, document.getElementById('root'))