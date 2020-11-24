import React from 'react';

import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
     <header className={classes.Toolbar}>
         <DrawToggle clicked ={props.drawToggleClicked} />
         <div className={classes.Logo}>
              <Logo />
            </div>
         <nav className={classes.DesktopOnly}>
             <NavigationItems />
         </nav>
     </header>
 );

 export default toolbar;