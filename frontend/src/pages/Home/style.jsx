import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 85vh;

  .rightpart,
  .leftpart,
  section {
    width: 40vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .leftpart {
  }

  .visible {
    display: inherit;
  }

  .hidden {
    display: none;
  }

  .textleft p {
    margin: 1rem 0;
    text-align: center;
  }

  .textleft {
    width: 80%;
  }
  .couchpic {
    width: 90%;
    border-radius: 50%;
  }

  .logo {
    width: 80%;
    border: 5px solid #f76c6c;
    padding: 2rem;
    border-radius: 50px;
  }
  .logocouchpic {
    width: 7%;
    position: absolute;
    right: 8%;
    top: 17%;
    border: 4px solid #f76c6c;
  }
  .arrow {
    position: absolute;
    top: 55%;
    font-size: 3rem;
    font-weight: bolder;
    background: none;
    border: none;
    color: #f76c6c;
    background: #f76c6c;
    text-align: center;
    color: white;
    border-radius: 20px;
    :hover {
      background: #f76c6c;
      color: white;
    }
  }
  .left {
    padding-right: 35px;
    right: 44%;
  }
  .right {
    padding-left: 35px;
    right: 5%;
  }

  h2 {
    font-size: 5rem;
    text-align: center;
    margin-bottom: -2rem;
  }
  .couch1 {
    font-weight: bold;
  }
  .couch2 {
    font-size: 4.9rem;
  }
  p {
    font-size: 1.4rem;
  }
  .bigger {
    font-size: 1.6rem;
    font-weight: bold;
    padding: 1rem 0;
  }

  .couchdescription0,
  .couchdescription1,
  .couchdescription2 {
    width: 80%;
    font-size: 1.7rem;
    text-align: center;
  }

  .couchdescription0 {
    font-size: 2.5rem;
  }
  .couchdescription1 {
    font-size: 2.2rem;
    font-weight: bold;
    font-style: italic;
  }
  .couchdescription2 {
    font-size: 2.7rem;
    font-weight: bolder;
  }
  em {
    color: #f76c6c;
  }
  .opening {
    font-size: 3rem;
  }

  h1 {
    font-size: 4.5rem;
    font-family: "Impact";
    text-align: center;
    width: 70%;
    line-height: 6rem;
    font-style: italic;
    font-weight: bold;
    color: #f76c6c;
  }

  @media screen and (max-width: 924px) {
    flex-direction: column;
    align-items: center;
    height: inherit;
    width: 100%;
    .leftpart {
      width: 100%;
    }
    .textleft {
      width: 100%;
      margin: 5rem;
      margin: 20vh -10vh 0 -10vh;
    }
    p {
      width: 100%;
      font-size: 1.5rem;
    }
    .bigger {
      font-size: 2rem;
    }

    .rightpart,
    .logo {
      display: none;
    }
  }
`;
