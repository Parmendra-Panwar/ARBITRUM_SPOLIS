import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isUserLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Scroll trigger point
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        transition: 'all 0.3s',
        backgroundColor: isScrolled ? 'white' : 'rgba(255, 255, 255, 0.7)',
        boxShadow: isScrolled
          ? '0 4px 10px rgba(0, 0, 0, 0.1)'
          : '0 4px 10px rgba(255, 255, 255, 0.3)',
        backdropFilter: isScrolled ? 'none' : 'blur(4px)',
      }}
    >
      <div
        style={{
          maxWidth: '7xl',
          margin: '0 auto',
          padding: '1rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            color: '#7AC6D2',
            transition: 'color 0.3s',
          }}
        >
          MedVault
        </Link>

        {/* <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1rem', fontWeight: '500' }}>
          <Link
            to="/"
            style={{
              transition: 'color 0.3s',
              color: 'black',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#7AC6D2')}
            onMouseLeave={(e) => (e.target.style.color = 'black')}
          >
            Home
          </Link>
          {!isUserLoggedIn && (
            <Link
              to="/signin"
              style={{
                transition: 'color 0.3s',
                color: 'black',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#3D90D7')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              Sign In
            </Link>
          )}
          {isUserLoggedIn && (
            <Link
              to="/dashboard"
              style={{
                transition: 'color 0.3s',
                color: 'black',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#B5FCCD')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              Dashboard
            </Link>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
