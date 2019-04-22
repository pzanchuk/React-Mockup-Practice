
import React from "react";


function RightHeader(){

  var floatRight = {
    marginTop: '0px',
    float: 'right',
  }

  var liStyle = {
    display: 'inline',
    float: 'left',
  }
  var aStyle = {
    borderRadius: '20px',
    border: '2px solid #4fb9f7',
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '15px',
    color: '#909090',

  }

  var inStyle = {
    fontSize: '15px',
    borderRadius: '20px',
    border: '2px solid #4fb9f7',
    marginRight: '20px',
    height: '45px',
  }

  var ulStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  }


  return (
    <div style={floatRight}>
      <ul style={ulStyle}>
        <li style={liStyle}><input style={inStyle} placeholder="search"></input></li>
        <li style={liStyle}><a style={aStyle} href="#">Twitter</a></li>
      </ul>
    </div>
  );
}

export default RightHeader;
