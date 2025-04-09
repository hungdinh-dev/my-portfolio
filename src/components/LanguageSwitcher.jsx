import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <li>
            <select className='' onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
            </select>
        </li>
    );
}

export default LanguageSwitcher;
