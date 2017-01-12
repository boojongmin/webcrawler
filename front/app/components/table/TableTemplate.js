import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class TableTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            { this.props.tableHeader.map( (columnName, i) =>
              <TableHeaderColumn key={i}>{columnName}</TableHeaderColumn>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            this.props.tableBody.map( (row, i) =>
              <TableRow key={i}>
                {
                  this.props.tableBodyKey.map( (objKey, i) => {
                    return <TableRowColumn key={i}>{ '' +  row[objKey] }</TableRowColumn>
                  })
                }
              </TableRow>
            )
          }
        </TableBody>
      </Table>

    );
  }

}

export default TableTemplate;