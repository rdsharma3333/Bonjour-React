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

const jsxHeading = <h1 id="heading">Hello, World! from JSX</h1>;

//Functional Component
const HeadingComponent = () => {
    return <h1 id="heading">Hello, World! from Functional Component</h1>;
};

// Above can also be written as
const HeadingComponent1 = () => <h1 id="heading">Hello, World! from Functional Component</h1>;

//Or it cn also be written as
const HeadingComponent3 = () => (<h1 id="heading" 
      className='heading'>Hello, World! from Functional Component
     </h1>);


//const heading = React.createElement('h1', {id: 'heading'}, 'Hello, World! from React 18')
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
//root.render(heading);

//Way to render react element -----> root.render(parent);


//To render React Component ------>
//root.render(HeadingComponent());
//or 
root.render(<HeadingComponent />);


//What is Component Composition? 
//Using Component inside another Component

const AppComponent = () => {
    return (
        <div id="app">
            <HeadingComponent />  
            <h2>This is a subheading from App Component</h2>
        </div>
    );
}

root.render(<AppComponent />);