import Constants from '../common/Constants';

/**
 * LanguageHelper class is responsible for handling languages.
 */
class LanguageHelper {
    /**
     * Function returns language shortcut depending on browser settings of user.
     * @returns {string}
     */
    static detectUserLang = () => navigator.language && navigator.language.includes(Constants.GERMAN_LANG) ?
        Constants.GERMAN_LANG : Constants.ENGLISH_LANG;

    /**
     * Function returns earlier saved or currently detected user language.
     * @returns {string}
     */
    static getUserLang = () => {
        let supportAppUserLang = localStorage.getItem(Constants.SUPPORT_APP_LANG_KEY);

        if (!supportAppUserLang) {
            supportAppUserLang = this.detectUserLang();
            this.saveUserLang(supportAppUserLang);
        }

        return supportAppUserLang;
    }

    /**
     * Function saves user language in local storage.
     * @param lang
     */
    static saveUserLang = (lang) => {
        const supportAppUserLang = localStorage.getItem(Constants.SUPPORT_APP_LANG_KEY);

        if (!supportAppUserLang || supportAppUserLang !== lang) {
            localStorage.setItem(Constants.SUPPORT_APP_LANG_KEY, lang);
        }
    }
}

export default LanguageHelper;
