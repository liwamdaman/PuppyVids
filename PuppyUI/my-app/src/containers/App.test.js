import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import rootReducer from '../reducers';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// basic reducer test need to move elsewhere
test('receive video data', () => {
    let state;
    state = rootReducer({video:{}}, {type:'RECEIVE_VIDEO',videoData:{id:'testid',title:'testtitle',author:'testauthor'}});
    expect(state).toEqual({ video:{ id:'testid',title:'testtitle',author:'testauthor' } });
});