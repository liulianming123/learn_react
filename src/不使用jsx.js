import React from 'react';
import ReactDOM from 'react-dom';



ReactDOM.render(
  <div>
    <h1>hello react</h1>
    <p>我是一个</p>
  </div>,
  
  document.getElementById('aa')
 );


 //不使用jsx
 ReactDOM.render(
     
    React.createElement('div', null, [
      React.createElement('h1', { key: '100', id: 'box' }, 'Hello React'),
      React.createElement('p', { key: '101' }, '我是一个屁')
    ]),
    document.getElementById('root')
  )
  