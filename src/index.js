import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './logo.svg';

//jsx的语法
const isLogin = false;
const htm = '<h1>asdasdas</h1>'
ReactDOM.render(
    <div className="box">
      <img src= { Logo } alt="aa"/>
      {
          !isLogin ? <button>登录按钮</button> : ''
      }
      <div dangerouslySetInnerHTML = {{ __html: htm }}></div>
      <div>{htm}</div>
    </div>,
  
  document.getElementById('root')
)

