import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect'; 
import App from './App';

// afterEach(rtl.cleanup);

describe.skip('App', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.baseElement).toMatchSnapshot();
});
