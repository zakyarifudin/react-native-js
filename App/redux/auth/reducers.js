import actions from './actions';

const initState = {
  selectedLanguage: 'ID',
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.SWITCH_LANGUAGE: {
      return {
        ...state,
        selectedLanguage: action.payload.selectedLanguage,
      };
    }

    default: {
      return state;
    }
  }
}
