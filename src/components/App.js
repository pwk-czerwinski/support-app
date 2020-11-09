import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@material-ui/core';
import AppHeader from './AppHeader';
import SupportForm from './SupportForm';
import SupportFormResults from './SupportFormResults';
import AppContext from '../context/AppContext';
import makeStyles from '@material-ui/core/styles/makeStyles';

/**
 * Common styles used in more than one component.
 */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3)
    },
    paper: {
        maxWidth: 500,
        margin: `${theme.spacing(2)}px auto`,
        padding: theme.spacing(3),
        textAlign: 'center'
    },
    supportBtn: {
        marginTop: 20,
        marginBottom: 20
    }
}));

/**
 * Main application component.
 * @returns {JSX.Element}
 */
const App = ({ i18n }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [ supportFormData, setSupportFormData ] = useState(null);

    return (
        <AppContext.Provider
            value={{
                classes, i18n, t, setSupportFormData
            }}
        >
            <AppHeader />
            <Container fixed >
                {
                    supportFormData ? <SupportFormResults formData={supportFormData} /> :<SupportForm />
                }
            </Container>
        </AppContext.Provider>
    );
}

export default App;
