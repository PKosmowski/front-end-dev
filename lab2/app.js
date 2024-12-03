// import React from "react";
// import * as ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client'

// function App() {
//     return (
//         <div>hello!</div>
//     )
// }

class HelloClass extends React.Component
{
    render()
    {
        return React.createElement('div', null, 'React!')
    }
}


ReactDOM.render(

    React.createElement(HelloClass),

    document.getElementById('root')

);    