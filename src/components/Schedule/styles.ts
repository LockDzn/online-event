import styled from 'styled-components'

export const Container = styled.div`
  margin: 16px 0 8px;
  border-bottom: 2px solid #323238;

  .header {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 18px;
      font-weight: bold;
    }

    .date {
      font-size: 16px;
      font-weight: normal;
    }
  }

  .wap {
    border-radius: 5px;
    position: relative;
  }

  .event {
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    cursor: not-allowed;

    font-size: 18px;

    border-radius: 5px;

    span {
      color: #a8a8b3;
      font-weight: bold;
    }

    margin: 16px 0 18px;

    background: #242429;
    border: none;

    .borderArrow {
      display: none;
      background: #121214;
      border: 1.5px solid #00d4ff;
      position: absolute;
      width: 12px;
      height: 12px;
      top: 0;
      left: -6px;
      bottom: 0;
      transform: rotate(-45deg);
      padding: 1px;
      border-radius: 4px;
      box-sizing: border-box;
      border-bottom: 0;
      border-right: 0;
      margin: auto;
    }
  }

  .isSelected {
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    cursor: pointer;

    font-size: 18px;

    border-radius: 5px;

    span {
      color: #00d4ff;
      font-weight: bold;
    }

    margin: 16px 0 18px;

    background: #121214;
    border: 1.5px solid #00d4ff;

    .borderArrow {
      display: block;
      background: #121214;
      border: 1.5px solid #00d4ff;
      position: absolute;
      width: 12px;
      height: 12px;
      top: 0;
      left: -6px;
      bottom: 0;
      transform: rotate(-45deg);
      padding: 1px;
      border-radius: 4px;
      box-sizing: border-box;
      border-bottom: 0;
      border-right: 0;
      margin: auto;
    }
  }
`
