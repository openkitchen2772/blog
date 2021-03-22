import React, { useState } from 'react';

import classes from './Layout.module.css';
import Auxiliary from '../Auxiliary/Auxiliary'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/UI/Toolbar/Toolbar';

const Layout = (props) => {
    const [showDeviceDrawer, setShowDeviceDrawer] = useState(false);
    
    const onSideDrawerToggle = () => {
        setShowDeviceDrawer(!showDeviceDrawer);
    }

    return (
        <Auxiliary>
            <Toolbar showDrawer={showDeviceDrawer} clicked={onSideDrawerToggle} />
            <header>
                <SideDrawer show={showDeviceDrawer} switchedPage={onSideDrawerToggle} />
            </header>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );  
}

export default Layout;