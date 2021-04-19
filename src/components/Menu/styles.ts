import styled from 'styled-components'

export const Container = styled.div`
  background: #202024;
  grid-area: menu;
  border-radius: 5px;
  padding: 0 1.2rem;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #4d4d57;
  }
`
