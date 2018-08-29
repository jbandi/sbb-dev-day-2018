import React, {Component} from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>

        <h1>
          My Great Business App
        </h1>

        <h3>Provided by React</h3>

        <a href="http://localhost:4203/">Go to final screen ...</a>
        <br/>
        <a href="http://localhost:4201/">Back to first screen ...</a>

        <img src={logo} />

      </div>
    );
  }
}

export default App;
