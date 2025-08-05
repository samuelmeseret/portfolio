import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="main-title animate-fadeIn">
          Samuel Meseret
        </h1>
        <p className="subtitle animate-fadeIn animation-delay-200">
          High School Student | Full-Stack Developer
        </p>
        <div className="social-links animate-fadeIn animation-delay-400">
          <a
            href="https://www.linkedin.com/in/samuel-meseret-34060a35a/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:samuel.meseret2016@gmail.com"
            className="social-link"
          >
            <svg className="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage