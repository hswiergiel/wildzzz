import styled from "styled-components";
import Raleway from "./assets/Raleway/static/Raleway-Regular.ttf";
import aladdin from "./assets/aladdin.ttf";
import youngbarse from "./assets/YoungBarse.ttf";
import FolksDreaming from "./assets/Folks_Dreaming.ttf";

export default styled.div`
  @font-face {
    font-family: Raleway;
    src: url(${Raleway});
  }
  @font-face {
    font-family: Aladdin;
    src: url(${aladdin});
  }
  @font-face {
    font-family: YoungBarse;
    src: url(${youngbarse});
  }
  @font-face {
    font-family: FolksDreaming;
    src: url(${FolksDreaming});
  }
  font-family: "Raleway";
  .couch0 {
    font-family: "FolksDreaming";
    color: #de6c36;
  }
  .couch1 {
    font-family: "Aladdin";
    color: #498ba6;
  }
  .couch2 {
    font-family: "YoungBarse";
    color: #767772;
  }
`;
