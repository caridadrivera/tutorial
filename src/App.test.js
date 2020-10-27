import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MainPage from './components/mainPage';
import MainAutoPage from './components/mainAutoPage';

import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


it('renders correctly', () =>{
  const tree = renderer.create(<MainPage/>).toJSON();
  expect(tree).toMatchSnapshot()
})


it('it renders the main auto page', () => {
  const autoPage = renderer.create(<MainAutoPage/>).toJSON();
  expect(autoPage).toMatchSnapshot()
})

