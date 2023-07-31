// import React from 'react';

import Footerthree from "./Footerthree";
import Footertwo from "./Footertwo";

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#343d52',
    // padding: '120px',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const formStyle = {
    // display: 'flex',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '10px',
  };

  const inputStyle = {
    width: '250px',
    height: '20px',
    border:'none',
    borderRadius: '2px',
    marginBottom: '35px',
    padding: '5px',
    marginLeft:'20px'
  
  };

  const submitButtonStyle = {
    background: 'linear-gradient(to right, #ff00cc,#ff0033, #ff9900)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 30px',
    cursor: 'pointer',
    marginLeft:'85px'
    
  };

  const verticalLineStyle = {
    height: '250px',
    borderLeft: '2px solid white',
    marginLeft: '-590px',
  };
  const paraStyle = {
    // height: '250px',
    // borderLeft: '2px solid white',
    marginLeft: '-590px',
  };

  return (
    <>
    <Footerthree/>
    <footer style={footerStyle}>
      <div>
        <form style={formStyle}>
          <div style={inputContainerStyle}>
            <label style={{marginLeft:'120px'}}>Name
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" style={inputStyle} /></label>
          </div>
          <div style={inputContainerStyle}>
            <label style={{marginLeft:'120px'}}>Email
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="email" style={inputStyle} /></label>
          </div>
          <div style={inputContainerStyle}>
            <label style={{marginLeft:'120px'}}>Contact
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" style={inputStyle} /></label>
          </div>
          <div style={{marginLeft:'150px'}}>
          <button type="submit" style={submitButtonStyle}>Submit</button>
          </div>
        </form>
        
      </div>
      <div style={verticalLineStyle}></div>
      <div>
        <div style={paraStyle}>
          Exergy Solutions,<br/>
          D-123, 1st Floor, Sector-63, Noida, 201301
          <br/>
          Phone: 0120-4256887, +91-9999916723
          <br />
          Email: info@exergysolutions.in<br/>
          Website: www.exergysolutions.in
        </div>
      </div>
    </footer>
    <Footertwo/></>
 );
};

export default Footer;
