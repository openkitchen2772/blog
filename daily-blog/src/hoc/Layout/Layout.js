import React from 'react';

import Auxiliary from '../Auxiliary/Auxiliary'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    return (
        <Auxiliary>
            <SideDrawer show />
        </Auxiliary>
    );  
}

export default layout;