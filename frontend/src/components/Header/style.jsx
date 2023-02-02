import styled from "styled-components";

export default styled.header`
  height: 10vh;
  padding: 2vh 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 30px grey;
  .imgLink {
    height: 100%;
  }
  img {
    height: 110%;
  }
  ul a,
  button {
    margin: 0 2rem;
    text-decoration: none;
    color: #f76c6c;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 0.8rem 1rem;
    :hover {
      color: white;
      background: #f76c6c;
      border-radius: 15px;
      cursor: pointer;
    }
  }

  button {
    border: 0px;
    background: none;
    font-family: "Raleway";
  }
  @media screen and (max-width: 924px) {
    width: 95vw;
    ul a,
    button {
      margin: 0 0rem;
      text-decoration: none;
      color: #f76c6c;
      font-weight: bold;
      font-size: 1rem;
      padding: 0.8rem 0.5rem;
      :hover {
        color: white;
        background: #f76c6c;
        border-radius: 15px;
        cursor: pointer;
      }
    }
  }
`;
