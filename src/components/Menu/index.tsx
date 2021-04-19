import React, { useContext } from 'react'

import { ClassContext } from '../../contexts/ClassContext'

import { Container } from './styles'

import Schedule from '../Schedule'

const Menu = () => {
  const { classNumber } = useContext(ClassContext)

  return (
    <Container>
      <Schedule
        week="Segunda"
        day="19 abr"
        events={[{ title: 'Liftoff', hour: '08:00', classNumber: 1 }]}
        isSelected={classNumber == 1}
        key="0"
      />

      <Schedule
        week="Terça"
        day="20 abr"
        events={[{ title: 'Maximum Speed', hour: '08:00', classNumber: 2 }]}
        isSelected={classNumber == 2}
        key="1"
      />

      <Schedule
        week="Quarta"
        day="21 abr"
        events={[{ title: 'In Orbit', hour: '08:00', classNumber: 3 }]}
        isSelected={classNumber == 3}
        key="2"
      />

      <Schedule
        week="Quinta"
        day="22 abr"
        events={[{ title: 'Landing', hour: '08:00', classNumber: 4 }]}
        isSelected={classNumber == 4}
        key="3"
      />

      <Schedule
        week="Sexta"
        day="23 abr"
        events={[
          { title: 'Surface Exploration', hour: '08:00', classNumber: 5 },
          { title: 'Acelerando sua carreira', hour: '08:00', classNumber: 6 }
        ]}
        isSelected={classNumber == 5}
        key="4"
      />
    </Container>
  )
}

export default Menu
