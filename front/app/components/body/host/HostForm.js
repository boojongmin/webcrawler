import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';
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


export default class HostForm extends React.Component {
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

  handleToggle() {
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
  componentWillReceiveProps(nextProps){
    this.setState({
      open: nextProps.open
    });
    if(nextProps.update) {
      this.setState({
        id: nextProps.host.id,
        name: nextProps.host.name,
        url: nextProps.host.url,
        status: nextProps.host.status
      })
    }
  }


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    let title =  this.props.update ? '수정' : '등록';
    return (
      <div>
        <Dialog title={'점검 ' + title} actions={actions} modal={false} open={this.state.open} autoScrollBodyContent={true} >
          <TextField name="name" fullWidth={true} hintText="이름" value={this.state.name} onChange={this.handleChange} /><br />
          <TextField name="url" fullWidth={true} hintText="시작 URL" value={this.state.url} onChange={this.handleChange}/><br />
          <Toggle name="status" label="상태" toggled={this.state.status} style={styles.toggle} onToggle={this.handleToggle} />
        </Dialog>
        <Snackbar open={this.state.snackbarOpen} message={this.state.snackbarMessage} autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
      </div>
    );
  }
}
