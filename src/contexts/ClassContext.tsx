import React, { createContext, ReactNode, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import db from '../db.json'

type ClassContextProps = {
  classNumber: number
  setClassNumber: React.Dispatch<React.SetStateAction<number>>
  handleChangeClass: (NewClassNumber: any) => void
  events: EventProps[]
  selectedEvent: EventProps | undefined
}

export const ClassContext = createContext({} as ClassContextProps)

type ClassProviderProps = {
  children: ReactNode
}

type EventProps = {
  title: string
  hour: string
  videoID: string
  classNumber: number
  released: boolean
}

type ParamsProps = {
  classNumber: string
}

export const ClassProvider = ({ children }: ClassProviderProps) => {
  const [classNumber, setClassNumber] = useState(1)
  const [events, setEvents] = useState<EventProps[]>([])
  const [selectedEvent, setSelectedEvent] = useState<EventProps | undefined>(
    db[0].events[0]
  )

  const params = useParams<ParamsProps>()
  const history = useHistory()

  useEffect(() => {
    db.map(list =>
      list.events.map(event => setEvents(oldEvents => [...oldEvents, event]))
    )
  }, [])

  useEffect(() => {
    if (
      !params.classNumber ||
      Number(params.classNumber) <= 0 ||
      Number(params.classNumber) > db.length
    ) {
      history.push('/1')
    } else {
      setClassNumber(Number(params.classNumber))
    }
  }, [])

  const handleChangeClass = (NewClassNumber: any) => {
    setClassNumber(NewClassNumber)
    history.push(`/${NewClassNumber}`)

    const newEvent = events.find(event => event.classNumber == NewClassNumber)
    setSelectedEvent(newEvent)
  }

  return (
    <ClassContext.Provider
      value={{
        classNumber,
        setClassNumber,
        handleChangeClass,
        selectedEvent,
        events
      }}
    >
      {children}
    </ClassContext.Provider>
  )
}
