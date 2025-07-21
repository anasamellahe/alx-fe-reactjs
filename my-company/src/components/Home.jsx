import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ 
      padding: '4rem 2rem',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '3.5rem',
        marginBottom: '1rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        fontWeight: 'bold'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{
        fontSize: '1.3rem',
        maxWidth: '600px',
        lineHeight: '1.6',
        marginBottom: '2rem',
        opacity: '0.9'
      }}>
        We are dedicated to delivering excellence in all our services. 
        Your success is our mission, and we're here to help you achieve your goals.
      </p>
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link to='/Services' style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          border: '2px solid rgba(255,255,255,0.3)',
          transition: 'all 0.3s ease',
          fontWeight: '500'
        }}>
          Our Services
        </Link>
        <Link to='/Contact' style={{
          backgroundColor: 'white',
          color: '#667eea',
          padding: '1rem 2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          fontWeight: '500'
        }}>
          Get In Touch
        </Link>
      </div>
    </div>
  );
}

export default Home;