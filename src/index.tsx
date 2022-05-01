import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

// import context and reducer
import { GlobalContext, globalReducer } from './context/global';

// root state wrapper will provide context for all children to access the global reducer
function StateWrapper({ children }: any) {
  const initialState = React.useContext(GlobalContext); // initialize context
  const [state, dispatch] = React.useReducer(globalReducer, initialState); // use context as the state for the reducer instance

  return (
    // wrapper component
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StateWrapper>
      <App />
    </StateWrapper>
  </StrictMode>
);
