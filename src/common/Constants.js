/**
 * Constants class is responsible for storing common constants for application.
 */
class Constants {
    /**
     * Local storage key for storing user language.
     * @type {string}
     */
    static SUPPORT_APP_LANG_KEY = 'supportAppLang';

    /**
     * Shortcuts for german and english languages.
     * @type {string}
     */
    static GERMAN_LANG = 'de';
    static ENGLISH_LANG = 'en';

    /**
     * Support form fields.
     */
    static NAME_SUPPORT_FORM = 'name';
    static EMAIL_SUPPORT_FORM = 'email';
    static TOPIC_SUPPORT_FORM = 'topic';
    static VERSION_NUMBER_SUPPORT_FORM = 'versionNumber';
    static PHONE_NUMBER_SUPPORT_FORM = 'phoneNumber';
    static DESCRIPTION_SUPPORT_FORM = 'description';

    /**
     * Possible support topics.
     * @type {string}
     */
    static GENERAL_REQ_TOPIC_SUPPORT_FORM = 'generalReq';
    static SOFTWARE_ERR_TOPIC_SUPPORT_FORM = 'softwareErr';
    static RECALL_TOPIC_SUPPORT_FORM = 'recall';

    /**
     * Possible codes for form field data.
     * @type {number}
     */
    static NEUTRAL_CODE = 0;
    static NO_DATA_CODE = 1;
    static INCORRECT_DATA_CODE = 2;
}

export default Constants;
