import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MainPage from './components/mainPage';
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