import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Tabs, Tab, MenuItem, IconMenu, IconButton, MoreVertIcon} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link } from 'react-router'
import DrawerUndocked from './DrawerUndocked';
import RightMenu from './RightMenu';

class Top extends React.Component {
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
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppBar
          onRightIconButtonTouchTap={()=>{ }}
          iconElementLeft={<DrawerUndocked/>}
          iconElementRight={ <RightMenu /> }
          title={ <TabsMenu /> }>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}

const menus = [
  {label: 'Item 1', link: '/hello#1'},
  {label: 'Item 2', link: '/hello3#2'},
  {label: 'Item 3', link: '/asdf#3'},
  {label: 'Item 4', link: '/aaaaaa#4'},
];

const TabsMenu = () => {
  let index = 0;
  for(let i = 0; i < menus.length; i++) {
    if(location.href.indexOf(menus[i].link) > 0) {
      index = i;
    }
  }
  let tabs =  menus.map( (x, i ) => <Tab key={i} label={x.label} containerElement={ <Link to={x.link}/> }/>);
  return (
    <Tabs initialSelectedIndex={index}>
      {tabs}
    </Tabs>
  )
};

export default Top;