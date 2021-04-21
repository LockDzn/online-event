import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { ClassContext } from '../../contexts/ClassContext'

import { Container } from './styles'

type Props = {
  week: string
  day: string
  events: {
    title: string
    hour: string
    classNumber: number
    released: boolean
  }[]
  onClick?: () => void
}

const Schedule = ({ week, day, events, onClick }: Props) => {
  const history = useHistory()

  const { handleChangeClass, classNumber } = useContext(ClassContext)

  return (
    <Container>
      <div className="header">
        <p>{week}</p>
        <p className="date">{day}</p>
      </div>

      {events.map(event => (
        <div
          className="wap"
          onClick={() =>
            event.released ? handleChangeClass(event.classNumber) : null
          }
          key={`${week}_${event.classNumber}`}
        >
          <div
            className={`event ${
              classNumber === event.classNumber ? 'isSelected' : ''
            } ${
              classNumber !== event.classNumber &&
              event.released &&
              'isReleased'
            }`}
          >
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
