import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Terms of Service" },
    { href: "#", text: "Contact Us" }
  ];

  return (
    <footer style={{ backgroundColor: '#3A59D1', color: 'white', padding: '1.5rem 0', marginTop: '3rem' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem' }}>
          &copy; {currentYear} MedVault. All rights reserved.
        </p>
        <div style={{ marginTop: '0.75rem' }}>
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{
                color: '#7AC6D2',
                textDecoration: 'none',
                marginRight: '1rem',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#B5FCCD')}
              onMouseLeave={(e) => (e.target.style.color = '#7AC6D2')}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
