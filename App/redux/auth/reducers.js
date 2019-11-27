import actions from './actions';

const initState = {
  selectedLanguage: 'ID',
  selectedTheme: 'dark',
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.SWITCH_LANGUAGE: {
      return {
        ...state,
        selectedLanguage: action.payload.selectedLanguage,
      };
    }
    case actions.SWITCH_THEME: {
      return {
        ...state,
        selectedTheme: action.payload.selectedTheme,
      };
    }
    default: {
      return state;
    }
  }
}
