import React, { useState } from 'react';

import classes from './Layout.module.css';
import Auxiliary from '../Auxiliary/Auxiliary'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/UI/Toolbar/Toolbar';

const Layout = (props) => {
    const [showDeviceDrawer, setShowDeviceDrawer] = useState(false);
    
    const onSideDrawerOpen = () => {
        setShowDeviceDrawer(true);
    }

    const onSideDrawerClose = () => {
        setShowDeviceDrawer(false);
    }

    return (
        <Auxiliary>
            <Toolbar showDrawer={showDeviceDrawer} openedDrawer={onSideDrawerOpen} closedDrawer={onSideDrawerClose} />
            <header>
                <SideDrawer show={showDeviceDrawer} switchedPage={onSideDrawerClose} />
            </header>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );  
}

export default Layout;