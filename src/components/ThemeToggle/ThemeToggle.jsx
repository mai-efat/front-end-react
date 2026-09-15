import { useState, useEffect } from 'react';
import './ThemeToggle.css';
import Sun from './Sun.svg?react';
import Moon from './Moon.svg?react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const selectedTheme = localStorage.getItem('selectedTheme');

    return selectedTheme === 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');

    localStorage.setItem('selectedTheme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const ToggleChange = (e) => {
    setIsDark(e.target.checked);
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={ToggleChange}
        checked={isDark}
      />

      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
}

export default ThemeToggle;
