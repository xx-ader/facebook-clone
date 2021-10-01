import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProv } from './components/ContextProv';
import reducer, { initialState } from './components/Reducer';

ReactDOM.render(
 <ContextProv initialState={initialState} reducer={reducer} >
    <App />
</ContextProv>
  ,
  document.getElementById('root')
);

