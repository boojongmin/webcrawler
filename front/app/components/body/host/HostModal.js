import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';
import HostForm from './HostForm';
import 'whatwg-fetch';




const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};


export default class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snackbarOpen: false,
      snackbarMessage: '',
      id:0,
      name: '',
      url: '',
      status: true
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  handleRequestClose() {
    this.setState({snackbarOpen: false});
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleToggle(event) {
    this.setState({ status: !this.state.status })
  }

  handleSubmit() {
    fetch('http://localhost:9000/host', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({}, this.state))
    }).then((response) => response.json())
      .then( (json) => {
        if(json == true) {
          this.setState({snackbarMessage:  `URL(${this.state.url})이 추가되었습니다.`, snackbarOpen: true});
        } else {
          this.setState({snackbarMessage: `URL(${this.state.url})이 추가에 실패했습니다`, snackbarOpen: true});
        }
        this.handleClose();
      })
  }

  render() {
    return (
      <div>
        <RaisedButton label="등록" primary={true} style={{margin: 12}} onTouchTap={this.handleOpen} />
        <HostForm open={this.state.open} update={false} />
        <Snackbar open={this.state.snackbarOpen} message={this.state.snackbarMessage} autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
      </div>
    );
  }
}
