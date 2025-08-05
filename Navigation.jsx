import './Navigation.css'

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <button
          onClick={() => setCurrentPage('home')}
          className="nav-logo"
        >
          Portfolio
        </button>
        <div className="nav-links">
          <button
            onClick={() => setCurrentPage('home')}
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation