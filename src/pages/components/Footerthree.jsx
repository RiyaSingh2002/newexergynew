// import React from 'react';
import welogo from '../../assets/welogo.png'

const Footerthree = () => {
  const containerStyle = {
    backgroundColor: '#343d52',
    fontFamily: 'Jost, sans-serif', // Use Jost font for the footer
    fontWeight: 500, // Use font weight 500 for the footer
    padding: '20px',
    color: '#ffffff',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
  };

  const companyNameStyle = {
    fontWeight: 'bold',
    fontSize: '48px',
    marginRight:'20px',
    marginLeft:'20px'

  };

  const logoStyle = {
    width: '280px',
    height: '50px',
    marginLeft:'20px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={companyNameStyle}>CONNECT TO THE POWER</h1>
      <img src={welogo} alt="Company Logo" style={logoStyle} />
    </div>
  );
};

export default Footerthree;
