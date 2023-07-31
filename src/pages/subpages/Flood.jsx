// import React from 'react';
import FloodVulnerabilityHazardZonationMapping from '../../assets/FloodVulnerabilityHazardZonationMapping.png'
import exergylogo from '../../assets/exergylogo.png'; // Replace with the actual path to your logo image


const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
    margin: '0',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  paragraphBox: {
    position: 'absolute',
    width: 'auto',
    padding: '10px',
    color: 'white',
    margin: '20px',
    fontFamily: 'Jost,',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '1.6', // Add line spacing
    
  },
  heading: {
      fontWeight: 500,
      fontFamily: 'Jost, sans-serif', // Use Jost font for headings
      marginBottom: '5px',
      // textAlign: 'center',
    },
  logoContainer: {
    position: 'absolute',
    top: '-325px',
    left: '20px',
  },
  logoImage: {
    width: '100px',
    height: 'auto',
  },
  menuIconContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
    zIndex: 1,
  //   gap: '8px', // Add gap between the lines
  },
  menuIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  //   display: 'flex',
  // gap: '8px', // Add gap between the lines
    justifyContent: 'space-between', // Add spacing between the lines
    alignItems: 'center',
  //   background: 'linear-gradient(to right, #00AEEF, #FF69B4)', // Pink middle line
    padding: '60px', // Increase padding to make lines wider
  },
  menuLine: {
    width: '150%', // Adjust width of the lines
    height: '8px', // Adjust height of the lines
    backgroundColor: 'white', // Set color of the lines to white
  //   borderRadius: '34px', // Add border radius for a more rounded appearance
  },
};

const Flood = () => {
  return (
    <div style={styles.container}>
      <div style={styles.menuIconContainer}>
        <div style={styles.menuIcon}>
          <div style={styles.menuLine}></div>
          <div style={{ ...styles.menuLine, backgroundColor: '#FF007F' , marginBottom:'8px', marginTop:'8px'}}></div>
          <div style={styles.menuLine}></div>
        </div>
      </div>
      <div style={styles.logoContainer}>
        <img src={exergylogo} alt="Logo" style={styles.exergylogo} />
      </div>    
      <img src={FloodVulnerabilityHazardZonationMapping} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>FLOOD VULNERABILITY & <br/>HAZARD ZONATION MAPPING</h3>
        <div style={styles.h6}>
        
Exergy Solutions leverages advanced geospatial technologies and <br/>
Hhydrological modeling to assess flood vulnerability and map hazard zones.<br/>
 Our team integrates high-resolution elevation data, rainfall patterns, and<br/>
  hydraulic modeling to simulate flood scenarios and predict flood risks.<br/>
   By applying advanced GIS analytics, we generate accurate flood hazard maps, <br/>
   enabling governments, disaster management agencies, and insurance companies to<br/>
    develop robust emergency response plans and implement effective flood risk <br/>
    mitigation strategies. Our technology-driven solutions foster resilient communities <br/>
    and enhance flood management capabilities.
      </div>
      </div>
    </div>
  );
};

export default Flood;
