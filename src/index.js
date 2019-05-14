// import the react and ReactDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom';


// function getbuttonText () {
//     return 'Click Me!'
// }
// Create a react component
const App = () => {
    const buttonText = 'Click Me!'
    // note to self to use a js variable in jsx include it in {}
    // or you can call a function inside the {} it works as well 
    return (
    <div> 
        <label className="label" htmlFor = "name">
        Enter name:
        </label>
        <input id= "name" type= "text" />
        {/* before  <button style = "background-color: blue; color: white;">Submit</button>  */}
       {/* after  */} <button style ={{backgroundColor:'blue', color:'white'}}>
      {buttonText} 
       </button> 
        
    </div>
    )
};

// Take the React Component and show it on the screen 
ReactDOM.render( 
    <App />,
    document.querySelector('#root')
);