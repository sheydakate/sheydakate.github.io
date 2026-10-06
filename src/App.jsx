import { Routes, Route, Link } from 'react-router-dom'
import About from './About.jsx'
import Projects from './Projects.jsx'
import ParticleName from './ParticleName.jsx'
import './App.css'
import pic from './assets/pic.jpg'


function App() {

  return (
    <>
      <section id="header">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">My Projects</Link>
        </div>

        <div className="connect">
          <p>Let's Connect</p>
          
          <div className="dropdown">
            <a
              href="https://github.com/sheydakate"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sheyda-kate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked-In
            </a>

            <a
              href="mailto:sheydakate@gmail.com"
            >
              Email
            </a>
          </div>
        </div>

      </section>


        <Routes>
          <Route
            path="/"
            element={
              <section id="center">
                <ParticleName />
              
                {/*
                <img 
                  className="photo"
                  src={pic} 
                  alt="Portrate of Sheyda Kate" 
                />
                */}

                <div>
                  {/*<h1>Sheyda Kate</h1> 
                  <p>CS major | UCF</p> */}
                </div>
              </section>
            }
          />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
