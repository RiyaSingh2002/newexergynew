// import React from 'react';
import PreExaminationService from '../../assets/PreExaminationService.png'
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
    color: 'black',
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

const Examination = () => {
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
      <img src={PreExaminationService} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>EXAMINATION</h3>
        <div style={styles.h6} className="textContainer">
        
Exergy Solutions transforms examination processes with our advanced IT<br/>
solutions. We offer a comprehensive range of services, including secure<br/>
online registration platforms, Al-enhanced document scrutiny systems,<br/>
advanced on-screen marking tools, and personalized e-counseling<br/>
portals. With our expertise in exam management systems, biometrics,<br/>
and encryption technologies, we ensure smooth and tamper-proof ex-<br/>
amination experiences. Our innovative solutions enhance data integrity,<br/>
streamline workflow, and enable real-time monitoring, empowering<br/>
educational institutions and examination bodies to conduct fair,<br/>
efficient, and digitally-driven assessments.
      </div>
      </div>
    </div>
  );
};

export default Examination;
