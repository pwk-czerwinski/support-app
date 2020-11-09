import Validator from '../../utils/Validator';

describe('Email checks',  () => {
    test('should check that email john.d@domain.com is correct', () => {
        expect(Validator.isEmailCorrect('john.d@domain.com')).toBeTruthy();
    });

    test('should check that email john.d@domain1.domain2.com is incorrect', () => {
        expect(Validator.isEmailCorrect('john.d@domain1.domain2.com')).toBeTruthy();
    });

    test('should check that email 123john.d@domain.com is incorrect', () => {
        expect(Validator.isEmailCorrect('123john.d@domain.com')).toBeTruthy();
    });

    test('should check that email x!?#&+.d@domain.com is incorrect', () => {
        expect(Validator.isEmailCorrect('x!?#&+.d@domain.com')).toBeTruthy();
    });

    test('should check that email _john.d@domain.com is incorrect', () => {
        expect(Validator.isEmailCorrect('_john.d@domain.com')).toBeFalsy();
    });

    test('should check that email @domain.com is incorrect', () => {
        expect(Validator.isEmailCorrect('@domain.com')).toBeFalsy();
    });

    test('should check that email john@-domain.com is incorrect', () => {
        expect(Validator.isEmailCorrect('john@-domain.com')).toBeFalsy();
    });

    test('should check that email günter@domain.com is incorrect', () => {
        expect(Validator.isEmailCorrect('günter@domain.com')).toBeFalsy();
    });
});

describe('Version number checks',  () => {
    test('should check that version number 0.0.0.0.1 is incorrect', () => {
        expect(Validator.isVersionNumberCorrect('0.0.0.0.1')).toBeFalsy();
    });

    test('should check that version number 0.0.0.1 is incorrect', () => {
        expect(Validator.isVersionNumberCorrect('0.0.0.1')).toBeFalsy();
    });

    test('should check that version number 0.0.0 is incorrect', () => {
        expect(Validator.isVersionNumberCorrect('0.0.0')).toBeFalsy();
    });

    test('should check that version number 0.0.0 is incorrect', () => {
        expect(Validator.isVersionNumberCorrect('0.0.0')).toBeFalsy();
    });

    test('should check that version number 0.0.-1 is incorrect', () => {
        expect(Validator.isVersionNumberCorrect('0.0.-1')).toBeFalsy();
    });

    test('should check that version number 0.0.1 is correct', () => {
        expect(Validator.isVersionNumberCorrect('0.0.1')).toBeTruthy();
    });

    test('should check that version number 1.0.0 is correct', () => {
        expect(Validator.isVersionNumberCorrect('1.0.0')).toBeTruthy();
    });

    test('should check that version number 1.11.12 is correct', () => {
        expect(Validator.isVersionNumberCorrect('1.11.12')).toBeTruthy();
    });

    test('should check that version number 0.11.12 is correct', () => {
        expect(Validator.isVersionNumberCorrect('0.11.12')).toBeTruthy();
    });

    test('should check that version number 3.21.354 is correct', () => {
        expect(Validator.isVersionNumberCorrect('3.21.354')).toBeTruthy();
    });
});

describe('Phone number checks',  () => {
    test('should check that phone number +48 123456789 is correct', () => {
        expect(Validator.isPhoneNumberCorrect('+48 123456789')).toBeTruthy();
    });

    test('should check that phone number +48 1 2 3 4 5 6 7 8 9 is correct', () => {
        expect(Validator.isPhoneNumberCorrect('+48 1 2 3 4 5 6 7 8 9')).toBeTruthy();
    });

    test('should check that phone number +48 1234567891234 is correct', () => {
        expect(Validator.isPhoneNumberCorrect('+48 1234567891234')).toBeTruthy();
    });

    test('should check that phone number +48 12345678912345 is incorrect', () => {
        expect(Validator.isPhoneNumberCorrect('+48 12345678912345')).toBeFalsy();
    });
});
