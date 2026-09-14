import './Navbar.css'
import { useRouter } from "next/navigation";

const OrganizationNavbar = () => {
  const router = useRouter();

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
        <div className="secondary-btn" onClick={() => router.push("/login")}>Log In</div>
        <div className="primary-btn">Get Started</div>
      </div>
    </nav>
  )
}

export default OrganizationNavbar