import React, {useContext, useEffect} from 'react';
import {actions, Context} from '../context/Context';
import SpaceXService from '../services/service';
import * as RootNavigation from '../../navigation/RootNavigation';
import {handleError} from '../../util/error';

function useSpaceXContext() {
  const value = useContext(Context);

  async function fetchRockets() {
    try {
      value.dispatch({type: actions.setRockets});
      const {data} = await SpaceXService.getRockets();
      value.dispatch({type: actions.setMembers});
    } catch (e) {
      handleError(e);
    }
  }

  async function fetchMembers() {
    try {
      value.dispatch({type: actions.setMembers});
      const {data} = await SpaceXService.getRockets();
      value.dispatch({type: actions.setMembersSuccess, payload: data});
    } catch (e) {
      handleError(e);
    }
  }

  return {
    state: value.state,
    fetchRockets,
    fetchMembers,
  };
}

export default useSpaceXContext;
