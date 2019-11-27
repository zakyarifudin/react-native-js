const actions = {
  SWITCH_LANGUAGE: '@auth/SWITCH_LANGUAGE',
  SWITCH_THEME: '@auth/SWITCH_THEME',
  switchLanguage: selectedLanguage => ({
    type: actions.SWITCH_LANGUAGE,
    payload: {
      selectedLanguage,
    },
  }),
  switchTheme: selectedTheme => ({
    type: actions.SWITCH_THEME,
    payload: {
      selectedTheme,
    },
  }),
};

export default actions;
