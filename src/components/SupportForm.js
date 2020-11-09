import React, { useContext, useState } from 'react';
import {
    Grid,
    Button,
    Icon
} from '@material-ui/core';
import SupportFormHelper from '../utils/SupportFormHelper';
import Constants from './../common/Constants';
import AppContext from '../context/AppContext';
import Paper from '@material-ui/core/Paper';
import SupportTextField from './inputs/SupportTextField';
import SupportTopicSelect from './inputs/SupportTopicSelect';

/**
 * Component responsible for handling data from support form.
 * @returns {JSX.Element}
 */
const SupportForm = () => {
    const { classes, t, setSupportFormData } = useContext(AppContext);
    const [ formData, setFormData ] = useState(SupportFormHelper.prepareInitialFormData());
    const [ isFormReadyToSend, setIsFormReadyToSend ] = useState(false);

    /**
     * Function handles form data.
     * @param e
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = SupportFormHelper.updateFormData(formData, name, value);
        setFormData(updatedFormData);
        const isFormNowReadyToSend = SupportFormHelper.isFormReadyToSend(formData);

        if (isFormReadyToSend !== isFormNowReadyToSend) {
            setIsFormReadyToSend(isFormNowReadyToSend);
        }
    }

    /**
     * Function sends form data.
     */
    const sendForm = () => {
        setSupportFormData(SupportFormHelper.getFormDataResult(formData));
    }

    return (
        <form>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <h1>{`${t('Support Form')}`}</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <SupportTextField
                                fieldName={'name'}
                                specificFormData={formData.name}
                                label={t('Name')}
                                handleChange={handleChange}
                                errText1={t('Name can\'t be empty.')}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <SupportTextField
                                fieldName={'email'}
                                specificFormData={formData.email}
                                label={t('Email')}
                                handleChange={handleChange}
                                type="email"
                                errText1={t('Email can\'t be empty.')}
                                errText2={t('Entered email is incorrect.')}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <SupportTopicSelect topicData={formData.topic} handleChange={handleChange} />
                        </Grid>
                    </Grid>
                    {
                        formData.topic.val === Constants.SOFTWARE_ERR_TOPIC_SUPPORT_FORM && formData.versionNumber ?
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                    <SupportTextField
                                        fieldName={'versionNumber'}
                                        specificFormData={formData.versionNumber}
                                        label={t('Version Number')}
                                        handleChange={handleChange}
                                        errText1={t('Version number can\'t be empty.')}
                                        errText2={t('Only the format <number>.<number>.<number> is accepted.')}
                                    />
                                </Grid>
                            </Grid> : null
                    }
                    {
                        formData.topic.val === Constants.RECALL_TOPIC_SUPPORT_FORM && formData.phoneNumber ?
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                    <SupportTextField
                                        fieldName={'phoneNumber'}
                                        specificFormData={formData.phoneNumber}
                                        label={t('Phone Number')}
                                        handleChange={handleChange}
                                        errText1={t('Phone number can\'t be empty.')}
                                        errText2={t('Only the format with + at the beginning is accepted.')}
                                    />
                                </Grid>
                            </Grid> : null
                    }
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <SupportTextField
                                fieldName={'description'}
                                specificFormData={formData.description}
                                label={t('Description')}
                                handleChange={handleChange}
                                multiline={true}
                                errText1={t('Description can\'t be empty.')}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                className={classes.supportBtn}
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={<Icon>send</Icon>}
                                onClick={sendForm}
                                disabled={!isFormReadyToSend}
                            >
                                { t('Submit') }
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </form>
    );
}

export default SupportForm;
