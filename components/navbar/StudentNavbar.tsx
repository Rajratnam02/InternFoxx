import './Navbar.css'
const StudentNavbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <p>InternFoxx</p>
      </div>

      <div className="nav-list">
        <ul>1-on-1 Live</ul>
        <ul>Resources</ul>
        <ul>Courses</ul>
        <ul>Pricing</ul>
      </div>

      <div className="auth-buttons">
        <div className="primary-btn">Log In</div>
        <div className="secondary-btn">Get Started</div>
      </div>
    </nav>
  )
}

export default StudentNavbar