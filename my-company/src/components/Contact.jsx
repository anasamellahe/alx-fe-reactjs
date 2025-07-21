import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ 
      padding: '4rem 2rem',
      backgroundColor: '#f8f9fa',
      minHeight: '80vh'
    }}>
      <div style={{
        maxWidth: '800px',
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
            Contact Us
          </h1>
          <div style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#27ae60',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            color: '#666',
            fontSize: '1.1rem',
            marginTop: '1rem'
          }}>
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: '500'
              }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                style={{ 
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: '500'
              }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                style={{ 
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: '500'
              }}>
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                style={{ 
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            <button 
              type="submit"
              style={{
                backgroundColor: '#27ae60',
                color: 'white',
                padding: '1rem 3rem',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(39, 174, 96, 0.3)',
                width: '100%'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#2ecc71';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(39, 174, 96, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#27ae60';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(39, 174, 96, 0.3)';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;