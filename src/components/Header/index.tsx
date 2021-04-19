import React from 'react'

import { Container } from './styles'

const Header = () => {
  return (
    <Container>
      <h1>Online Event</h1>
      <nav className="menu">
        <ul>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
            <a href="">Cronograma</a>
          </li>
        </ul>
      </nav>
      <h1>Online Event</h1>
    </Container>
  )
}

export default Header
