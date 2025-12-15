import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', {id: 'parent'},
    [
        React.createElement('div', {id: 'child'},
        [React.createElement('h1', {id: 'heading1'}, 'I am h1 tag from React'),
         React.createElement('h2', {id: 'heading2'}, 'I am h2 tag from React')]
    ),
        React.createElement('div', {id: 'child2'},
        [
            React.createElement('h1', {id: 'heading1'}, 'I am h1 tag from React'),
            React.createElement('h2', {id: 'heading2'}, 'I am h2 tag from React')
        ]
    )
    ]
);



//const heading = React.createElement('h1', {id: 'heading'}, 'Hello, World! from React 18')
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
//root.render(heading);
root.render(parent);