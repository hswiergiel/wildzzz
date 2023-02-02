import styled from "styled-components";

export default styled.header`
  td,
  th {
    padding: 0.5rem;
    border: 2px solid #494343;
    border-collapse: collapse;
  }

  .month {
    text-align: center;
    border: none;
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-size: 4rem;
    font-weight: bold;
    color: #f76c6c;
  }

  .firstcol {
    margin-left: 1rem;
  }
  p {
    text-align: center;
    padding: auto;
  }
  img {
    height: 15vh;
    border-radius: 20px;
  }

  table {
    width: 90%;
    margin: auto;
    border-radius: 30px;
  }

  button {
    width: 100%;
    font-size: 1.8rem;
    background-color: #f76c6c3e;
  }

  .sleepbutton {
    height: 10vh;
  }

  .pushbutton {
    margin-top: 1vh;
  }
  .hours,
  .days {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .hours {
    font-size: 1.4rem;
  }

  .couch0,
  .couch1,
  .couch2 {
    font-size: 2rem;
    margin: 1rem;
  }

  .same {
    padding: 1.5vh;
    background-color: #f76c6ce4;
    color: white;
    border-radius: 10px;
  }

  .visible {
    display: inherit;
  }

  .hidden {
    display: none;
  }

  .point {
    font-size: 1.3rem;
    font-weight: bold;
  }

  @media screen and (max-width: 924px) {
    img {
      display: none;
    }
    *,
    .point,
    .hours,
    .couch0,
    .couch1,
    .couch2 {
      font-size: 0.8rem;
    }
    .couch0,
    .couch1,
    .couch2 {
      font-size: 1.2rem;
    }
    .month,
    h2 {
      font-size: 1.8rem;
    }
  }
`;
