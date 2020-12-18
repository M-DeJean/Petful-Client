import React from 'react'
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><Root /></BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});