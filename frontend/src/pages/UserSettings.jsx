import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserSettings = () => {
  const [locale, setLocale] = useState('en_US');

  // Handles locale change
  const handleLocaleChange = async (newLocale) => {
    try {
      const response = await axios.patch(
        '/api/users/locale',
        { locale: newLocale },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
        }
      );
      setLocale(newLocale);
      console.log(response.data.message);
    } catch (error) {
      console.error('Failed to update locale:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    // Fetch the user's current locale when the component mounts
    const fetchLocale = async () => {
      try {
        const response = await axios.get('/api/users/me', {
          headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
        });
        setLocale(response.data.locale);
      } catch (error) {
        console.error('Failed to fetch locale:', error.response?.data || error.message);
      }
    };

    fetchLocale();
  }, []);

  return (
    <div>
      <h1>User Settings</h1>
      <LocaleSelector currentLocale={locale} onLocaleChange={handleLocaleChange} />
    </div>
  );
};

const LocaleSelector = ({ currentLocale, onLocaleChange }) => {
  const [locale, setLocale] = useState(currentLocale || 'en_US');

  const handleLocaleChange = (event) => {
    const selectedLocale = event.target.value;
    setLocale(selectedLocale);
    onLocaleChange(selectedLocale);
  };

  return (
    <div>
      <label htmlFor="locale">Select Locale:</label>
      <select id="locale" value={locale} onChange={handleLocaleChange}>
        <option value="en_US">English (United States)</option>
        <option value="en_KE">English (Kenya)</option>
        <option value="fr_FR">French (France)</option>
        <option value="es_ES">Spanish (Spain)</option>
      </select>
    </div>
  );
};

export default UserSettings;
