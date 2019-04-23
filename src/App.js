import React from 'react';
// 这里是不需要引入 ReactDOM 的
import logo from './logo.svg';
// webpack 玩图片，都需要将图片使用 模块的引入进来。！！！！如果是项目中的图片，一定需要import进来才可以使用
import './App.css';

// 函数的方式来定义组件，return 出去的就是组件内容

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
