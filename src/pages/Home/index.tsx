import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import YouTube, { Options } from 'react-youtube'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

import { ClassContext, ClassProvider } from '../../contexts/ClassContext'

import { Container, Main, Description } from './styles'

type ParamsProps = {
  classNumber: string
}

const Home: React.FC = () => {
  document.title = 'Home'

  const { selectedEvent } = useContext(ClassContext)

  const opts: Options = {
    height: '415',
    width: '738',
    playerVars: { color: 'white' }
  }

  return (
    <>
      <Header />
      <ClassProvider>
        <Container>
          <Main>
            <section className="video">
              <YouTube videoId="PR-duMh19FY" opts={opts} />
            </section>
            <Menu />
            <Description>
              <h2>Aula {selectedEvent?.classNumber}-</h2>
              <p>
                We&apos;re go for launch. É hora de decolar e partir rumo ao
                próximo nível. Esse é o começo da nossa missão.
              </p>
            </Description>
          </Main>
        </Container>
      </ClassProvider>
    </>
  )
}

export default Home
