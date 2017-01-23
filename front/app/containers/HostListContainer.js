import React from 'react';
import HostList from '../components/body/HostList';
import {hostsInit} from '../actions';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import HostModal from '../components/body/host/HostModal';

const style = {
  divWrap: {
    width: '100%',
    height: 200,
    float: 'right'
  },
  button: {
    margin: 12
  },
  paper: {
    width: '97%',
    marginTop: 5,
    marginLeft: 20,
    textAlign: 'right',
    display: 'inline-block',
  }
};

export class  HostListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.updateTableRedux();
  }

  render() {
    return (
      <div>
        <Paper style={style.paper} zDepth={1} >
          <HostModal />
        </Paper>
        <Paper style={style.paper} zDepth={1} >
          <HostList list={this.props.list} />
        </Paper>
      </div>
    )
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    updateTableRedux: () => {
      fetch('http://localhost:9000/host/all')
      .then(function(response) {
        return response.json()
      }).then(function(list) {
        dispatch(hostsInit(list))
      });
    }
  }
};


let mapStateToProps = (state) => {
  return {
    list: state.hosts.list
  }
};

HostListContainer = connect(mapStateToProps, mapDispatchToProps)(HostListContainer);

export default HostListContainer;
