import React from 'react';
import { Typography } from '@material-ui/core';

interface DashboardName {
    projectName: string;
}

const Header: React.FC<DashboardName> = ({ projectName }) => (
  <Typography variant="h3">{projectName}</Typography>
);

export default Header;
