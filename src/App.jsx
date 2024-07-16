import { Hero, Projects, Skills, Contact, Footer } from './section'

import { name, role, gitHub, linkedIn, objective } from './section/data'

import './App.css'

function App() {

  return (
    <>
      <Hero name={name} role={role} gitHub={gitHub} linkedIn={linkedIn} objective={objective} />
      <hr style={{ width: "80%", height: "1px", border: "none", margin: 0 }} />
      <Projects />
      <hr style={{ width: "80%", height: "1px", border: "none", margin: 0 }} />
      <Skills />
      <hr style={{ width: "80%", height: "1px", border: "none", margin: 0 }} />
      <Contact />
      <hr style={{ width: "80%", height: "1px", border: "none", margin: 0 }} />
      <Footer />
    </>
  )
}

export default App
