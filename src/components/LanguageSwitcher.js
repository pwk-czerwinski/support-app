import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Constants from '../common/Constants';
import LanguageHelper from '../utils/LanguageHelper';
import AppContext from '../context/AppContext';

/**
 * Styles used inside LanguageSwitcher component.
 */
const useStyles = makeStyles((theme) => ({
    langSelect: {
        color: 'white',
        background: '#3f51b5',
        fontSize: 18,
        border: 0,
        outline: 0,
        padding: 10,
        margin: 4
    }
}));

/**
 * Component responsible for handling switching languages.
 * @returns {JSX.Element}
 */
const LanguageSwitcher = () => {
    const classes = useStyles();
    const { i18n, t } = useContext(AppContext);

    /**
     * Function changes language.
     * @param event
     */
    const changeLang = (event) => {
        const { value } = event.target;
        LanguageHelper.saveUserLang(value);
        i18n.changeLanguage(value);
    }

    return (
        <select
            className={classes.langSelect}
            value={i18n.language}
            onChange={changeLang}
        >
            <option value={Constants.GERMAN_LANG}>{t('German')}</option>
            <option value={Constants.ENGLISH_LANG}>{t('English')}</option>
        </select>
    );
}

export default LanguageSwitcher;
