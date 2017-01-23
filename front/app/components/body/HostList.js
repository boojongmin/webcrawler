import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import HostForm from './host/HostForm';

class  HostList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      host: {}
    };
    this.onRowClickHandler = this.onRowClickHandler.bind(this);
  }

  onRowClickHandler(event) {
    let row = event[0];
    let host = this.props.list[row];
    this.setState({ open: true, host: host })
  }

  render() {
    return (
      <div>
        <Table onRowSelection={this.onRowClickHandler} >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width: 50}}>순서</TableHeaderColumn>
              <TableHeaderColumn>이름</TableHeaderColumn>
              <TableHeaderColumn>시작URL</TableHeaderColumn>
              <TableHeaderColumn>수집여부</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.list.map((host, i) => {
              return (
                <TableRow key={host.id} >
                  <TableRowColumn style={{width: 50}}>{ i + 1}</TableRowColumn>
                  <TableRowColumn>{ host.name}</TableRowColumn>
                  <TableRowColumn>{ host.url}</TableRowColumn>
                  <TableRowColumn>{ ''+ host.status}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <HostForm open={this.state.open} update={true} host={this.state.host}/>
      </div>
    )
  }
}
//
// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateTableRedux: () => {
//       fetch('http://localhost:9000/host/all')
//       .then(function(response) {
//         return response.json()
//       }).then(function(list) {
//         dispatch(hostsInit(list))
//       });
//     }
//   }
// };
//
//
// let mapStateToProps = (state) => {
//   return {
//     list: state.hosts.list
//   }
// };
//
// HostList = connect(mapStateToProps, mapDispatchToProps)(HostList);



export default HostList;
