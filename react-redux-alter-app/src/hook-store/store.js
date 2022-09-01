import { useEffect } from "react";
import { useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState); //remove the listener when unmount
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userAction, initState) => {
  if (initState) {
    globalState = { ...globalState, ...initState };
  }

  actions = { ...actions, ...userAction };
};
