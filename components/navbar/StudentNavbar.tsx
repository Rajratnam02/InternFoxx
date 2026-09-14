import './Navbar.css'
import { useRouter } from "next/navigation";

const StudentNavbar = () => {
  const router = useRouter();

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
        <div className="secondary-btn" onClick={() => router.push("/login")}>Log In</div>
        <div className="primary-btn" onClick={() => router.push("/signup?audience=student")}>Get Started</div>
      </div>
    </nav>
  )
}

export default StudentNavbar