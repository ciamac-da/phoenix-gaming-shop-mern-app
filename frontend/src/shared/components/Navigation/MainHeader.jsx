import React from 'react';
import muiStyle from './MainHeaderStyle';

const MainHeader = props => {
  const classes = muiStyle();

    return <header className={classes.mainHeader}>{props.children}</header>
}

export default MainHeader;