import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {ContextProvider} from  "./context/Context"

// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App/>
//      </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <ContextProvider children={<App/>} />;
     </React.StrictMode>
);


