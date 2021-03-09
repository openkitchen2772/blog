import React from 'react';

import classes from './Layout.module.css';
import Auxiliary from '../Auxiliary/Auxiliary'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    return (
        <Auxiliary>
            <SideDrawer show />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );  
}

export default Layout;