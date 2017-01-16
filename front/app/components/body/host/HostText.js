import React from 'react';
import TextField from 'material-ui/TextField';

export default class HostText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <TextField fullWidth={true} hintText="이름"/><br />
      </span>
    );
  }
}
