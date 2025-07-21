function About() {
  return (
    <div style={{ 
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#2c3e50',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          About Us
        </h1>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: '#3498db',
          margin: '0 auto',
          borderRadius: '2px'
        }}></div>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '1px solid #e9ecef'
      }}>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          color: '#555',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem'
          }}>
            <h3 style={{
              color: '#2c3e50',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              Our Mission
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              To deliver innovative solutions that drive success for our clients worldwide.
            </p>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '1.5rem'
          }}>
            <h3 style={{
              color: '#2c3e50',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              Our Vision
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              To be the leading provider of comprehensive business solutions globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;