import React, { useState } from "react";
import i18n from "../../i18n"; // Import i18n instance
import { useTranslation } from "react-i18next";
import "./Dropdown.css"; // Import your CSS file

const LanguageDropdown = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className="language-dropdown-container">
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">{t("English")}</option>
        <option value="hi">{t("हिंदी")}</option>
        <option value="bh">{t("भोजपुरी")}</option>
        <option value="mai">{t("मैथिली")}</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
