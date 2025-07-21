import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#2c3e50',
            padding: '1rem 0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '0',
            zIndex: '1000'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                margin: '0',
                padding: '0'
            }}>
                <li>
                    <Link to='/Home' style={{
                        color: 'white',
                        textDecoration: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s ease',
                        fontWeight: '500'
                    }} 
                    onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/About' style={{
                        color: 'white',
                        textDecoration: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s ease',
                        fontWeight: '500'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/Contact' style={{
                        color: 'white',
                        textDecoration: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s ease',
                        fontWeight: '500'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='/Services' style={{
                        color: 'white',
                        textDecoration: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s ease',
                        fontWeight: '500'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                        Services
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;