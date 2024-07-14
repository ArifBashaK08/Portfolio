import { Hero, Projects } from './section'

import { name,role,gitHub,linkedIn,objective } from './section/data'

import './App.css'

function App() {

  return (
    <>
      <Hero name={name} role={role} gitHub={gitHub} linkedIn={linkedIn} objective={objective} />
      <Projects />
    </>
  )
}

export default App
