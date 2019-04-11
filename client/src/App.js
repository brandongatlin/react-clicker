import React, { useState, useEffect }from 'react';
import './App.css';

const App = (props)=> {

  const [count, setCount] = useState(0);
  const [topPos, setTop] = useState(0);

  const divStyle = {
    margin: topPos,
  };


  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // useEffect(() => {
  //   let div = document.getElementById('count');
  //   div.style.marginTop = topPost + "px"
  // });

    return (
      <div style={divStyle} className="App">
        <p id="count">{count}</p>
        <button onClick={()=> {
          setCount(count + 1);
          setTop(topPos + 100);
        }}>Click Me</button>
      </div>
    );
}

export default App;
