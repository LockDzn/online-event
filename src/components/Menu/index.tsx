import React, { useContext } from 'react'

import { ClassContext } from '../../contexts/ClassContext'

import { Container } from './styles'

import db from '../../db.json'

import Schedule from '../Schedule'

const Menu = () => {
  const { classNumber } = useContext(ClassContext)

  return (
    <Container>
      {db.map(event => (
        <Schedule
          week={event.week}
          day={event.day}
          events={event.events}
          key="0"
        />
      ))}
    </Container>
  )
}

export default Menu
