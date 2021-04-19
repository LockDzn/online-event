import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 40px auto;
  max-width: 1120px;
`

export const Main = styled.main`
  display: grid;
  grid-template:
    'video video menu' fit-content(1em)
    'description description description'
    'card card card';
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  gap: 24px;

  .video {
    grid-area: video;
    opacity: 0.8;
    background: linear-gradient(
      90deg,
      rgba(9, 9, 121, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    width: 738px;
    height: 415px;
  }
`

export const Description = styled.div`
  grid-area: description;

  h2 {
    width: 100%;
    max-width: 770px;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    margin: 8px 0;
    color: #e1e1e6;
  }

  p {
    color: #a8a8b3;
  }
`
