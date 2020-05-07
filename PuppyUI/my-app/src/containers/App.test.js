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
test('update videoID', () => {
    let state;
    state = rootReducer({video:{}}, {type:'UPDATE_VIDEO',videoID:'hehe'});
    expect(state).toEqual({ video:{ id:'hehe' } });
});