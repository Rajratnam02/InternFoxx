import './Navbar.css'
const OrganizationNavbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <p>InternFoxx</p>
      </div>

      <div className="nav-list">
        <ul>Cohort</ul>
        <ul>Resources</ul>
        <ul>Services</ul>
        <ul>Pricing</ul>
      </div>

      <div className="auth-buttons">
        <div className="primary-btn">Log In</div>
        <div className="secondary-btn">Get Started</div>
      </div>
    </nav>
  )
}

export default OrganizationNavbar