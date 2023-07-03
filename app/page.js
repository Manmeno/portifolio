import React from 'react';
import Content from './components/content/page';
import About from './components/about/page';
import Projects from './components/projects/page';
import Contact from './components/contact/page';

export default function Home() {
  return (
  <div>
      <Content />
      <About />
      <Projects />
      <Contact />
  </div>
  )
}
