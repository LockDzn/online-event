import React, { createContext, ReactNode, useState } from 'react'

interface ClassContextProps {
  classNumber: number
  setClassNumber: React.Dispatch<React.SetStateAction<number>>
}

export const ClassContext = createContext({} as ClassContextProps)

type ClassProviderProps = {
  children: ReactNode
}

export const ClassProvider = ({ children }: ClassProviderProps) => {
  const [classNumber, setClassNumber] = useState(1)

  return (
    <ClassContext.Provider
      value={{
        classNumber,
        setClassNumber
      }}
    >
      {children}
    </ClassContext.Provider>
  )
}
