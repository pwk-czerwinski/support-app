import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageHelper from '../utils/LanguageHelper';

const userLang = LanguageHelper.getUserLang();

/**
 * Configuration with all translations available in the whole application.
 */
i18n
    .use(initReactI18next)
    .init({
        resources: {
            de: {
                translations: {
                    'Support App': 'Unterstützung App',
                    'German': 'Deutsch',
                    'English': 'Englisch',
                    'Support Form': 'Support Formular',
                    'Name': 'Name',
                    'Name can\'t be empty.': 'Name darf nicht leer sein.',
                    'Email': 'Emailadresse',
                    'Email can\'t be empty.': 'E-Mail darf nicht leer sein.',
                    'Entered email is incorrect.': 'Die eingegebene E-Mail ist falsch.',
                    'Topic': 'Themenbereich',
                    'Topic can\'t be empty.': 'Themenbereich darf nicht leer sein.',
                    'General Request': 'Allgemeine Anfrage',
                    'Software Error': 'Softwarefehler',
                    'Version Number': 'Versionsnummer',
                    'Version number can\'t be empty.': 'Versionsnummer darf nicht leer sein.',
                    'Only the format <number>.<number>.<number> is accepted.':
                        'Es wird nur das Format <Zahl>.<Zahl>.<Zahl> akzeptiert. Die Mindestversion ist 0.0.1.',
                    'Recall': 'Rückruf',
                    'Phone Number': 'Telefonnummer',
                    'Phone number can\'t be empty.': 'Telefonnummer darf nicht leer sein.',
                    'Only the format with + at the beginning is accepted.':
                        'Es wird nur das Format mit + am Anfang akzeptiert.',
                    'Description': 'Beschreibung',
                    'Description can\'t be empty.': 'Beschreibung darf nicht leer sein.',
                    'Submit': 'Absenden',
                    'Support form results': 'Ergebnisse des Support-Formulars',
                    'All right!': 'Alles klar!'
                },
            },
            en: {
                translations: {
                    'Support App': 'Support App',
                    'German': 'German',
                    'English': 'English',
                    'Support Form': 'Support Form',
                    'Name': 'Name',
                    'Name can\'t be empty.': 'Name can\'t be empty.',
                    'Email': 'Email address',
                    'Email can\'t be empty.': 'Email can\'t be empty.',
                    'Entered email is incorrect.': 'Entered email is incorrect.',
                    'Topic': 'Topic',
                    'Topic can\'t be empty.': 'Topic can\'t be empty.',
                    'General Request': 'General Request',
                    'Software Error': 'Software Error',
                    'Version Number': 'Version Number',
                    'Version number can\'t be empty.': 'Version number can\'t be empty.',
                    'Only the format <number>.<number>.<number> is accepted.':
                        'Only the format <number>.<number>.<number> is accepted. Minimum version is 0.0.1.',
                    'Recall': 'Recall',
                    'Phone Number': 'Phone number',
                    'Phone number can\'t be empty.': 'Phone number can\'t be empty.',
                    'Only the format with + at the beginning is accepted.':
                        'Only the format with + at the beginning is accepted.',
                    'Description': 'Description',
                    'Description can\'t be empty.': 'Description can\'t be empty.',
                    'Submit': 'Submit',
                    'Support form results': 'Support form results',
                    'All right!': 'All right!'
                },
            }
        },
        lng: userLang,
        fallbackLng: userLang,
        debug: false,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
