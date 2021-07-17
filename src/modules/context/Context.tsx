import * as React from 'react';

const initialState = {
  rockets: [],
  members: [],
  member: {},
  loading: false,
  error: false,
};
export const actions = {
  setRockets: 'setRockets',
  setRocketsError: 'setRocketsError',
  setRocketsSuccess: 'setRocketsSuccess',
  setMembers: 'setMembers',
  setMembersError: 'setMembersError',
  setMembersSuccess: 'setMembersSuccess',
  setMember: 'setMember',
  setMemberError: 'setMemberError',
  setMemberSuccess: 'setMemberSuccess',
};

export const Context = React.createContext({
  state: initialState,
  dispatch: args => {},
});

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setRockets:
      return {...state, loading: true};
    case actions.setRocketsError:
      return {...state, error: true, loading: false};
    case actions.setRocketsSuccess:
      return {...state, loading: false, rockets: action.payload};
    case actions.setMembers:
      return {...state, loading: true};
    case actions.setMembersError:
      return {...state, error: true, loading: false};
    case actions.setMembersSuccess:
      return {...state, members: action.payload};
    case actions.setMember:
      return {...state, loading: true};
    case actions.setMemberError:
      return {...state, error: true, loading: false};
    case actions.setMemberSuccess:
      return {...state, member: action.payload};
    default:
      return state;
  }
};

const ContextProvider: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
