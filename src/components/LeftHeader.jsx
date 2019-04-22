import React from "react";


function LeftHeader(){
  var ulStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  }

  var liStyle = {
    display: 'inline',
    float: 'left',
  }

  var aStyle = {
    border: '1px solid #909090',
    color: '#909090',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '15px'

  }

  var main = {
    marginTop: '15px',
  }

  return (
    <div>
      <div style={main}>
        <ul style={ulStyle}>
          <li style={liStyle}><a style={aStyle} href="#">Home</a></li>
          <li style={liStyle}><a style={aStyle} href="#">Notifications</a></li>
          <li style={liStyle}><a style={aStyle} href="#">Message</a></li>
        </ul>
      </div>
    </div>
  );
}

export default LeftHeader;
