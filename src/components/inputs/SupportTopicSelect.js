import React, { useContext } from 'react';
import {
    FormControl,
    FormHelperText,
    InputLabel,
    Select
} from '@material-ui/core';
import Constants from '../../common/Constants';
import AppContext from '../../context/AppContext';

/**
 * Component responsible for handling topic in support form.
 * @param topicData
 * @param handleChange
 * @returns {JSX.Element}
 */
const SupportTopicSelect = ({ topicData, handleChange }) => {
    const { t } = useContext(AppContext);

    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-topic-native-simple">{`${t('Topic')} *`}</InputLabel>
            <Select
                native
                value={topicData.val}
                onChange={handleChange}
                onBlur={handleChange}
                label={`${t('Topic')} *`}
                error={topicData.errCode > 0}
                inputProps={{
                    name: 'topic',
                    id: 'outlined-topic-native-simple',
                }}
            >
                <option aria-label="None" value="" />
                <option value={Constants.GENERAL_REQ_TOPIC_SUPPORT_FORM}>{t('General Request')}</option>
                <option value={Constants.SOFTWARE_ERR_TOPIC_SUPPORT_FORM}>{t('Software Error')}</option>
                <option value={Constants.RECALL_TOPIC_SUPPORT_FORM}>{t('Recall')}</option>
            </Select>
            { topicData.errCode === 1 && <FormHelperText error={true}>{t('Topic can\'t be empty.')}</FormHelperText> }
        </FormControl>
    );
}

export default SupportTopicSelect;
