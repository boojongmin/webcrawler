import React from 'react';
import { MenuItem, IconMenu, IconButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


export default class RightMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <IconMenu iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    )
  }
}
