import React, { useContext } from 'react';
import { Grid, Button, Icon } from '@material-ui/core';
import Constants from '../common/Constants';
import AppContext from '../context/AppContext';
import Paper from '@material-ui/core/Paper';

/**
 * Component responsible for showing result data from support form.
 * @param formData
 * @returns {JSX.Element}
 */
const SupportFormResults = ({ formData }) => {
    const { classes, t, setSupportFormData } = useContext(AppContext);

    /**
     * Function clears support form data.
     */
    const clearSupportFormData = () => {
        setSupportFormData(null);
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>{`${t('Support form results')}`}</h1>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h3>{`${t('Name')}`}</h3>
                        <p>{`${formData.name}`}</p>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h3>{`${t('Email')}`}</h3>
                        <p>{`${formData.email}`}</p>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h3>{`${t('Topic')}`}</h3>
                        <p>
                            {
                                formData.topic === Constants.GENERAL_REQ_TOPIC_SUPPORT_FORM ?
                                    `${t('General Request')}` : null
                            }
                            {
                                formData.topic === Constants.SOFTWARE_ERR_TOPIC_SUPPORT_FORM ?
                                    `${t('Software Error')}` : null
                            }
                            {
                                formData.topic === Constants.RECALL_TOPIC_SUPPORT_FORM ?
                                    `${t('Version Number')}` : null
                            }
                        </p>
                    </Grid>
                </Grid>
                {
                    formData.versionNumber ?
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <h3>{`${t('Version Number')}`}</h3>
                                    <p>{`${formData.versionNumber}`}</p>
                                </Grid>
                            </Grid> : null
                }
                {
                    formData.phoneNumber ?
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <h3>{`${t('Phone Number')}`}</h3>
                                    <p>{`${formData.phoneNumber}`}</p>
                                </Grid>
                            </Grid> : null
                }
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h3>{`${t('Description')}`}</h3>
                        <p>{`${formData.description}`}</p>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button
                            className={classes.supportBtn}
                            variant="contained"
                            color="primary"
                            size="large"
                            endIcon={<Icon>done</Icon>}
                            onClick={clearSupportFormData}
                        >
                            { t('All right!') }
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default SupportFormResults;
