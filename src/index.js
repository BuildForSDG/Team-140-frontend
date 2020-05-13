import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

class StartApp extends React.Component {
  render() {
    return <App />;
  }
}

let Root = document.getElementById('root');

ReactDOM.render(<StartApp />, Root);
