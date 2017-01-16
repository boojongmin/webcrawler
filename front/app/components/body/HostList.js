import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
// import 'whatwg-fetch';

class  HostList extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Table>
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
                <TableRow key={i}>
                  <TableRowColumn style={{width: 50}}>{ i + 1}</TableRowColumn>
                  <TableRowColumn>{ host.name}</TableRowColumn>
                  <TableRowColumn>{ host.url}</TableRowColumn>
                  <TableRowColumn>{ ''+ host.status}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
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
