import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { latitude: null, error: null };

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
            <SeasonDisplay latitude={this.state.latitude} /> :
            this.state.error ?
              <div>Error: {this.state.error}</div> :
              <Spinner message="Please accept location request." />
        }
      </div>
    );
  }
}

export default App;
