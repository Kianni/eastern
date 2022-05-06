import de from './pics/de.jpg';
import en from './pics/en.jpg';
import fi from './pics/fi.jpg';
import fr from './pics/fr.jpg';
import ru from './pics/ru.jpg';

import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import Button from './Button';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  ru: { nativeName: 'Русский' },
  fi: { nativeName: 'Suomi' },
  fr: { nativeName: 'Français' },
};

const pics = { de: de, en: en, fi: fi, fr: fr, ru: ru };

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={pics[i18n.resolvedLanguage]}
          className="App-logo"
          alt="logo"
        />
        <div>
          {Object.keys(lngs).map((lng) => (
            <Button key={lng} lngs={lngs} lng={lng} i18n={i18n}></Button>
          ))}
        </div>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://www.turkuort.fi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
      </header>
    </div>
  );
}

export default App;
