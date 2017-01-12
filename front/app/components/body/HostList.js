import React from 'react';
import TableTemplate from '../table/TableTemplate';
import {hostsInit} from '../../actions';
import { connect } from 'react-redux';
import 'whatwg-fetch';

const tableHeader = [ '순서', '이름', '시작페이지URL', '수집대상여부'];
const tableBodyKey = [ 'seq', 'name', 'host', 'status'];

export class  HostList extends React.Component {

  constructor(props) {
    super(props);
    this.updateTable = this.updateTable.bind(this);
  }

  updateTable(e) {
    this.props.updateTableRedux();

  }

  render() {
    let data = !!this.props.list ? this.props.list : [];
    return (
      <div>
        <button onClick={this.updateTable}>test</button>
        <TableTemplate tableHeader={tableHeader} tableBodyKey={tableBodyKey} tableBody={data}/>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  let list = [
      {
        seq: 1,
        host: 'm.daum.net',
        name: '모바일다음',
        status: true
      },
      {
        seq: 2,
        host: 'www.daum.net',
        name: 'PC다음',
        status: true
      }
    ]
  return {
    updateTableRedux: () => dispatch(hostsInit(list))
  }
};

let mapStateToProps = (state) => {
  fetch('http://mab.hosts.daum.net/con-front/best/channel/total.json')
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    // document.body.innerHTML = body
  });
  return {
    list: state.hosts.list
  }
};

HostList = connect(mapStateToProps, mapDispatchToProps)(HostList);

export default HostList;
