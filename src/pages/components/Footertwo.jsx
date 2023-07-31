// import React from 'react';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'

const SocialMediaIcons = () => {
  const containerStyle = {
    backgroundColor: '#343d52',
    padding: '20px',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

//   const textStyle = {
//     fontWeight: 'bold',
//     fontSize: '18px',
//   };

  const iconStyle = {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <div>2023-24 All reghts reserved for Exergy Solutions Pvt. Ltd.</div>
      <div>
      Follow us on:

        <img src={facebook} alt="Facebook" style={iconStyle} />
        <img src={instagram} alt="Instagram" style={iconStyle} />
        <img src={twitter} alt="Twitter" style={iconStyle} />
        <img src={linkedin} alt="React Logo" style={iconStyle} />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
