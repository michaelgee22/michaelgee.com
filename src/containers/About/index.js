import React from 'react'

import { Sidebar } from '../../components/Sidebar'
import { Nav } from '../../components/Nav'

export const About = props => {
  return (
    <main id="page">
      <Nav />

      <div id="page-sidebar">
        <Sidebar />
      </div>

      <section id="page-body">
        <h1>About</h1>
      </section>
    </main>
  )
}
