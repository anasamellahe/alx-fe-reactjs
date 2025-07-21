function Services() {
  return (
    <div style={{ 
      padding: '4rem 2rem',
      backgroundColor: '#f8f9fa',
      minHeight: '80vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
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
            Our Services
          </h1>
          <div style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#e74c3c',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            border: '1px solid #e9ecef'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#3498db',
              borderRadius: '50%',
              margin: '0 auto 1.5rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: 'white'
            }}>
              💻
            </div>
            <h3 style={{
              color: '#2c3e50',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              Technology Consulting
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Expert guidance on technology solutions to streamline your business operations and boost efficiency.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            border: '1px solid #e9ecef'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#e74c3c',
              borderRadius: '50%',
              margin: '0 auto 1.5rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: 'white'
            }}>
              📊
            </div>
            <h3 style={{
              color: '#2c3e50',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              Market Analysis
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Comprehensive market research and analysis to help you make informed business decisions.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            border: '1px solid #e9ecef'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f39c12',
              borderRadius: '50%',
              margin: '0 auto 1.5rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: 'white'
            }}>
              🚀
            </div>
            <h3 style={{
              color: '#2c3e50',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              Product Development
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              End-to-end product development services from concept to launch and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;