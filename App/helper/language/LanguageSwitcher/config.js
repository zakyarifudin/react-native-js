const config = {
  options: [
    {
      languageId: 'ID',
      locale: 'id',
      text: 'Bahasa Indonesia',
    },
    {
      languageId: 'EN',
      locale: 'en',
      text: 'English',
    },
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
