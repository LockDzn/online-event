import styled from 'styled-components'

export const Container = styled.header`
  background: #202024;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;

  height: 4rem;

  h1 {
    font-size: 28px;
  }

  .menu {
    display: flex;
    align-items: center;
    height: 100%;

    ul {
      display: flex;
      align-items: center;
      height: 100%;
      list-style-type: none;

      li {
        margin: 0rem 1rem;
        display: flex;
        align-items: center;
        height: 100%;

        &:first-child {
          border-bottom: 2px solid #00d4ff;
        }
      }
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`
