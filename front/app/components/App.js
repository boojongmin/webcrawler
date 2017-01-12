import React from 'react';
import Top from './top/Top';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {route: window.location.hash.substr(1)};
  }

  componentDidMount() {
    window.addEventListener('hashchange', function() {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    return (
      <div>
        <Top />
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;