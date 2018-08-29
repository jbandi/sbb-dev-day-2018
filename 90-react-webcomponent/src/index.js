import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));



class MyApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const message = this.getAttribute('message');
    ReactDOM.render(<App message={message}/>, mountPoint);
  }
}
customElements.define('my-app', MyApp);