/**
 * Validator class is responsible for checking if specific data is correct.
 */
export default class Validator {
    /**
     * Checks email correctness.
     * @param email
     * @returns {boolean}
     */
    static isEmailCorrect = (email) => {
        const emailReg = /^(?=.{5,254}$)[a-z\d]+[\w\d.!#$%&'*+/=?^`{|}~-]{0,63}@(?:[a-z\d]+[a-z\d-]*\.)+[a-z]+$/i;
        return emailReg.test(email);
    }

    /**
     * Checks software version number correctness.
     * @param versionNumber
     * @returns {boolean}
     */
    static isVersionNumberCorrect = (versionNumber) => {
        const versionNumberReg = /^\d{1,}([./])\d{1,}\1\d{1,}$/;
        let isVersionNumberCurrentlyCorrect = versionNumberReg.test(versionNumber);

        if (isVersionNumberCurrentlyCorrect) {
            const versionNumberParts = versionNumber.split('.');
            const [ firstPartOfVersionNumber, secondPartOfVersionNumber, thirdPartOfVersionNumber ] = versionNumberParts;

            if (firstPartOfVersionNumber === '0' && secondPartOfVersionNumber === '0' && thirdPartOfVersionNumber === '0') {
                isVersionNumberCurrentlyCorrect = false;
            }
        }

        return isVersionNumberCurrentlyCorrect;
    }

    /**
     * Checks phone number correctness.
     * @param phoneNumber
     * @returns {boolean}
     */
    static isPhoneNumberCorrect = (phoneNumber) => {
        const phoneNumberReg = /^\+(?:\d(?:\x20(?!$))?){7,15}$/;
        return phoneNumberReg.test(phoneNumber);
    }
}
