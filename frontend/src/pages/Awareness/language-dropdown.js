import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import './LanguageSelector.css'; // Import your CSS file for styling

const LanguageSelector = ({ onChange }) => {
  return (
    <div className="language-selector">
       <LanguageIcon className="language-icon"/>
      <select onChange={onChange}>
        <option>Select Language</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="be">Bengali</option>
      </select>
    </div>
  );
};

export default LanguageSelector;