import './AboutPage.css'

const AboutPage = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'HTML', 'CSS', 'Next.js']
  
  return (
    <div className="about-page">
      <div className="about-container">
        <h2 className="page-title animate-fadeIn">
          About Me
        </h2>
        <div className="about-content animate-fadeIn animation-delay-200">
          <p className="about-paragraph">
            My name is Samuel Meseret, and I’m currently a sophomore at Oakland Technical High School. I'm passionate about technology, specifically coding and web development. My skills include Python, HTML, CSS, JavaScript, React, and Next.js.
          </p>
          <p className="about-paragraph">
            I've created various coding projects and actively participate in hackathons, always seeking new ways to improve my abilities and gain practical experience. My ultimate goal is to build innovative tools and, eventually, create my own large language model (LLM) that can positively impact people's lives.
          </p>
          <p className="about-paragraph">
            When I'm not coding, you can find me in the gym or working with organizations like the Hidden Genius Project, where I serve as a cohort president and help lead initiatives that matter to students.

Feel free to connect or reach out to me, I’m always open to discussing new projects, collaboration opportunities, or just talking tech!
          </p>
        </div>
        <div className="skills-section animate-fadeIn animation-delay-400">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage