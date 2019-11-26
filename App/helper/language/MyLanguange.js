import {getCurrentLanguage} from './LanguageSwitcher/config';
import AppLocale from './languageProvider/index';
import {store} from '../../redux/store';

const getLang = props => {
  const {id, values} = props;
  const selectedLanguage = store.getState().auth
    ? store.getState().auth.selectedLanguage
    : undefined;
  const currentAppLocale =
    AppLocale[getCurrentLanguage(selectedLanguage || 'ID').locale];
  const {messages, locale} = currentAppLocale;

  if (!messages[id]) {
    console.error(`Key ${id} in language ${locale} not found`);
  }

  if (values) {
    let str = messages[id] ? messages[id] : id;

    Object.keys(values).map(
      key => (str = str.replace(`{${key}}`, values[key])),
    );
    return str;
  }
  return messages[id] ? messages[id] : id;
};

export default getLang;
