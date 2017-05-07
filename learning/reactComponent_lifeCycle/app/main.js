import React from 'react';
import ReactDOM from 'react-dom';
import App from './ParentComponent.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));


setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 20000);
//Timeout applied for visualize the unmounting for component lifecycle