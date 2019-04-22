

import React from "react";


function Body(){

  var bStyle = {
    paddingTop: '55px',
  }

  var tableStyle = {
    width: '100%',
  }

  var row = {

    height: '400px',
  }

  var three = {
    width: '25%',
  }

  var blue = {

    height: '170px',
    backgroundColor: '#42cef4',
  }

  var pic = {
    borderRadius: '20px',
    border: '4px solid white',
    backgroundColor: '#42cef4',
    width: '90px',
    height: '90px',
    position: 'absolute',
    marginTop: '110px',
    marginLeft: '20px',
    float: 'left',
  }

  var infoLeft = {
    marginTop: '10px',
    marginLeft: '140px',
  }

  var liStyle = {
    fontSize: '11px',
    padding: '5px',
    marginLeft: '15px',
    display: 'inline',
    float: 'left',
  }

  var ulStyle = {
    marginTop: '30px',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  }

  var info = {
    height: '250px',
    border: '1px solid #707070',
  }

  var lowerText={
    padding: '10px',
    marginTop: '20px',
    border: '1px solid #707070',
  }

  var picCent={
    borderRadius: '20px',
    border: '4px solid white',
    backgroundColor: '#909090',
    width: '90px',
    height: '90px',
    position: 'absolute',
    float: 'left',
  }

  var centInfo={
    marginLeft: '110px',
  }

  var centBorder={
    border: '1px solid #707070',
    borderTop: '1px solid white',
  }

  var but = {
    marginBottom: '20px',
    width: '90px',
    height: '30px',
    backgroundColor: '#297bce',
    color: 'white',
  }

  var Border={
    border: '1px solid #707070',
  }

  var rightBorder={
    border: '1px solid #707070',
  }

  var blue1={
    backgroundColor: '#9bebff',
    height: '80px',

  }

  var box = {
    marginLeft: '28px',
    marginTop: '20px',
    float: 'left',
    width: '40px',
    height: '40px',
    backgroundColor: '#7f1111',
  }

var inp = {
  marginTop: '22px',
  marginLeft: '50px',
  width: '400px',
  height: '30px',
}

var picCentt={
  marginTop: '20px',
  marginLeft: '20px',
  backgroundColor: '#909090',
  width: '65px',
  height: '65px',
  position: 'absolute',
  float: 'left',
}

var pad = {
  marginLeft: '20px',
}




  return (
    <div style={bStyle}>
      <hr/>
      <table style={tableStyle}>
        <tr>
        <td style={three}>
          <div style={row}>
            <div style={info}>
              <div style={pic}></div>
              <div style={blue}></div>
              <div>
                <p style={infoLeft}>
                  Pavel Zanchuk
                </p>
              </div>
              <ul style = {ulStyle}>
                <li style={liStyle}>TWEETS</li>
                <li style={liStyle}>FOLLOWING</li>
                <li style={liStyle}>FOLLOWERS</li>
              </ul>
            </div>
            <div style={lowerText}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/>
              When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software<br/> like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </td>
        <td>
          <div style={row}>

            <div style={blue1}>
              <div style={box}></div>
              <input style={inp} placeholder="What's happening?"></input>
            </div>

            <div style={centBorder}>
              <div style={picCentt}></div>
              <div style={centInfo}>
                <h4>Some</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum has been the industry's standard dummy text ever since the</p>
              </div>
            </div>
            <div style={centBorder}>
              <div style={picCentt}></div>
              <div style={centInfo}>
                <h4>Something</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum has been the industry's standard dummy text ever since the</p>
              </div>
            </div>
            <div style={centBorder}>
              <div style={picCentt}></div>
              <div style={centInfo}>
                <h4>Something</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum has been the industry's standard dummy text ever since the</p>
              </div>
            </div>
            <div style={centBorder}>
              <div style={picCentt}></div>
              <div style={centInfo}>
                <h4>Something</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum has been the industry's standard dummy text ever since the</p>
              </div>
            </div>
            <div style={centBorder}>
              <div style={picCentt}></div>
              <div style={centInfo}>
                <h4>Something</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum has been the industry's standard dummy text ever since the</p>
              </div>
            </div>
          </div>
        </td>
        <td style={three}>
          <div style={row}>
            <div style={rightBorder}>
              <h4 style={pad}>Ipsum Loresum</h4>
              <div style={picCentt}>
              </div>
              <div style={centInfo}>
                <h4>Donec eu orci et</h4>
                <button style={but}>Button</button>
              </div>
              <div style={picCentt}>
              </div>
              <div style={centInfo}>
                <h4>Donec eu orci et</h4>
                <button style={but}>Button</button>
              </div>
              <div style={picCentt}>
              </div>
              <div style={centInfo}>
                <h4>Donec eu orci et</h4>
                <button style={but}>Button</button>
              </div>
              <div style={picCentt}>
              </div>
              <div style={centInfo}>
                <h4>Donec eu orci et</h4>
                <button style={but}>Button</button>
              </div>
            </div>
          </div>
        </td>
        </tr>
      </table>
    </div>
  );
}

export default Body;
