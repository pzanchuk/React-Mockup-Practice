import React from "react";
import Header from "./Header";
import Body from "./Body";






function App(){

  var myStyle = {

    marginLeft: '10%',
    marginRight: '10%',
  }
  return (
    <div style={myStyle}>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
