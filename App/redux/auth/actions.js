const actions = {
  SWITCH_LANGUAGE: '@auth/SWITCH_LANGUAGE',
  switchLanguage: selectedLanguage => ({
    type: actions.SWITCH_LANGUAGE,
    payload: {
      selectedLanguage,
    },
  }),
};

export default actions;
