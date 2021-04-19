import React from 'react'

import { Container } from './styles'

type Props = {
  week: string
  day: string
  events: {
    title: string
    hour: string
    classNumber: number
  }[]
  isSelected: boolean
}

const Schedule = ({ week, day, events, isSelected }: Props) => {
  return (
    <Container>
      <div className="header">
        <p>{week}</p>
        <p className="date">{day}</p>
      </div>

      {events.map(event => (
        <div className="wap" key={`${week}_${event.classNumber}`}>
          <div className={`event ${isSelected ? 'isSelected' : ''}`}>
            <div className="borderArrow"></div>
            <p>
              <span>{event.hour}h</span> - Aula{' '}
              {event.classNumber.toString().length <= 1 && '0'}
              {event.classNumber} - {event.title}
            </p>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default Schedule
