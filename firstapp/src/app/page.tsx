import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Hero from '../components/Hero'

import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='w-5xl place-self-center shadow-lg'>
        <Hero />
    <About />
      <Skills />
      <Experience />
      <Projects/>
       <Education />
     <Contact />
    </div>
  );
}
