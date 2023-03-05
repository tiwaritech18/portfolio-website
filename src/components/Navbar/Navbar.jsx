export default function Navbar(){
    return (
        <nav className="container">
            <div className="logo">
                <img src="" alt="logo" />
            </div>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="resume">
                  <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
                       <button>Resume</button>
                  </a>
                </div>
            </div>
            
                
            
        </nav>
    )
}