// import React from 'react';
import PostExaminationServices from '../../assets/PostExaminationServices.png'
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

const Postexam = () => {
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
      <img src={PostExaminationServices} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>POST EXAMINATION SERVICES</h3>
        <div style={styles.h6} className="textContainer">

Exergy Solutions is your trusted partner for end-to-end IT/ITES <br/>
solutions that enable digital transformation. Our experienced<br/>
 professionals specialize in custom software development, utilizing<br/>
  agile methodologies and emerging technologies such as Al, machine learning, <br/>
  and blockchain. We offer comprehensive application management services, including<br/>
   application maintenance, performance optimization, and security enhancements. <br/>
   Our data analytics solutions enable organizations to harness the potential of big<br/>
    data, leveraging advanced analytics, data visualization, and predictive modeling. <br/>
    With expertise in cloud computing, DevOps, and IT infrastructure management, we<br/>
     ensure scalable, secure, and resilient IT environments. 

      </div>
      </div>
    </div>
  );
};

export default Postexam;
