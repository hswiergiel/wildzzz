import styled from "styled-components";

export default styled.div`
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-top: 1rem;
      font-size: 1.8rem;
    }
    select {
      margin-top: 1rem;
      height: 3vh;
      width: 50%;
    }
    em {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1024px) {
    .hidden {
      display: none;
    }
    .top h2 {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;
