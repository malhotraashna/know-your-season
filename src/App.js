import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, error: null };
  }

  componentDidMount() {
    //fetch location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          error: err.message,
        });
      },
    );
  }

  render() {
    return (
      <div>
        {
          this.state.latitude ?
            `Latitude : ${this.state.latitude}` :
            this.state.error ?
              `Error: ${this.state.error}` :
              'Fetching...'
        }
      </div>
    );
  }
}

export default App;
