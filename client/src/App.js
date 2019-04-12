import React, { useState, useEffect, Fragment } from 'react';
import './App.css';

const App = (props) => {

    const [handle, setHandle] = useState(null);
    const [text, setText] = useState(null);


    return ( 
        <Fragment >
          <input type = "text"></input> 
          <input type = "text" ></input>
        </Fragment>
    );
}

export default App;