import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/';
import './styles/reset.scss';
import './styles/main.scss';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<App/>, container);