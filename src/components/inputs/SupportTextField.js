import { TextField } from '@material-ui/core';
import React from 'react';

/**
 * Component responsible for showing specific support text field used inside SupportForm.
 * @param fieldName
 * @param specificFormData
 * @param label
 * @param handleChange
 * @param type
 * @param multiline
 * @param errText1
 * @param errText2
 * @returns {JSX.Element}
 * @constructor
 */
const SupportTextField = ({ fieldName, specificFormData, label, handleChange, type, multiline=false, errText1, errText2 }) => {
    return (
        <TextField
            fullWidth
            label={`${label} *`}
            value={specificFormData.val}
            onChange={handleChange}
            onBlur={handleChange}
            variant="outlined"
            multiline={multiline}
            type={type ? type : 'text'}
            name={fieldName}
            id={fieldName + '-input'}
            helperText={
                specificFormData.errCode > 0 ?
                    specificFormData.errCode === 1 ? errText1 :
                        specificFormData.errCode === 2 ? errText2 :
                            ''
                    : ''
            }
            error={specificFormData.errCode > 0}
        />
    );
}

export default SupportTextField;
