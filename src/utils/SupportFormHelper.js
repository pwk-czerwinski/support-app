import Constants from '../common/Constants';
import Validator from './Validator';

/**
 * Initial state with defined structure of object for every form field.
 * @type {{val: string, errCode: number}}
 */
const initialFormFieldState = {
    val: '',
    errCode: Constants.NEUTRAL_CODE
}

/**
 * SupportFormHelper class is responsible for handling support form data.
 */
class SupportFormHelper {
    /**
     * Function prepares initial form data.
     * @returns {{}}
     */
    static prepareInitialFormData = () => {
        const initialFormData = {};
        const fields = [
            Constants.NAME_SUPPORT_FORM, Constants.EMAIL_SUPPORT_FORM,
            Constants.TOPIC_SUPPORT_FORM, Constants.DESCRIPTION_SUPPORT_FORM
        ];
        fields.map(field => {
            initialFormData[field] = initialFormFieldState;
            return field;
        });

        return initialFormData;
    }

    /**
     * Function checks correctness of form data.
     * @param name
     * @param value
     * @returns {number}
     */
    static checkCorrectness = (name, value) => {
        let isCorrect = true;
        let err = Constants.NEUTRAL_CODE;

        switch(name) {
            case Constants.EMAIL_SUPPORT_FORM:
                isCorrect = Validator.isEmailCorrect(value);
                break;
            case Constants.VERSION_NUMBER_SUPPORT_FORM:
                isCorrect = Validator.isVersionNumberCorrect(value);
                break;
            case Constants.PHONE_NUMBER_SUPPORT_FORM:
                isCorrect = Validator.isPhoneNumberCorrect(value);
                break;
            default:
                isCorrect= true;
        }

        err = !isCorrect ? Constants.INCORRECT_DATA_CODE : err;
        err = value === '' ? Constants.NO_DATA_CODE : err;

        return err;
    }

    /**
     * Function updates form data.
     * @param currentFormData
     * @param fieldName
     * @param fieldVal
     * @returns {*}
     */
    static updateFormData = (currentFormData, fieldName, fieldVal) => {
        const err = this.checkCorrectness(fieldName, fieldVal);
        let updatedFormData = {...currentFormData, [fieldName]: { val: fieldVal, errCode: err }};

        if (fieldName === Constants.TOPIC_SUPPORT_FORM) {
            const { phoneNumber, versionNumber, ...restUpdatedFormData} = updatedFormData;
            updatedFormData = restUpdatedFormData;

            if (fieldVal === Constants.SOFTWARE_ERR_TOPIC_SUPPORT_FORM) {
                updatedFormData[Constants.VERSION_NUMBER_SUPPORT_FORM] = initialFormFieldState;
            } else if (fieldVal === Constants.RECALL_TOPIC_SUPPORT_FORM) {
                updatedFormData[Constants.PHONE_NUMBER_SUPPORT_FORM] = initialFormFieldState;
            }
        }

        return updatedFormData;
    }

    /**
     * Function checks if form is ready to send.
     * @param formData
     * @returns {boolean}
     */
    static isFormReadyToSend = (formData) => {
        let isFormReadyNowToSend = true;

        for (const fieldName in formData) {
            if (formData[fieldName].val === '' || formData[fieldName].errCode > 0) {
                isFormReadyNowToSend = false;
                break;
            }
        }

        return isFormReadyNowToSend;
    }

    /**
     * Function returns form data result.
     * @param formData
     * @returns {{}}
     */
    static getFormDataResult = (formData) => {
        const formDataResult = {};

        for (const fieldName in formData) {
            formDataResult[fieldName] = formData[fieldName].val;
        }

        return formDataResult;
    }
}

export default SupportFormHelper;
