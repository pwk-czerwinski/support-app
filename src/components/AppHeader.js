import React, { useContext } from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LanguageSwitcher from './LanguageSwitcher';
import AppContext from '../context/AppContext';

/**
 * Styles used inside App component.
 */
const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

const AppHeader = () => {
    const classes = useStyles();
    const { t } = useContext(AppContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    { t('Support App') }
                </Typography>
                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    );
}

export default AppHeader;
