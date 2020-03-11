import React from 'react';

import i18n from '../lang/i18n';
import {withTranslation} from "react-i18next";

// 한국어 |English |日本語 |简体中文 |繁體中文 |tiếng Việt

const App = ({t}) => {
    return (
        <div>
            <div>{t('message.hello')}</div>
            <div>{t('n.selected', {n: 5})}</div>
            <div>
                <button onClick={() => {i18n.changeLanguage('ko')}}>한국어</button>
                <button onClick={() => {i18n.changeLanguage('en')}}>English</button>
                <button onClick={() => {i18n.changeLanguage('ja')}}>日本語</button>
                <button onClick={() => {i18n.changeLanguage('zh')}}>简体中文</button>
                <button onClick={() => {i18n.changeLanguage('vi')}}>tiếng Việt</button>

                <button onClick={() => {i18n.changeLanguage('en')}}>Other</button>
            </div>
        </div>
    );
};

export default withTranslation()(App);