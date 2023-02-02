import { useContext, useState, useEffect } from "react";
import useApi from "@services/useApi";
import logo from "../../assets/logo_full.png";
import { Context } from "../../services/Context";
import Style from "./style";
import couch1 from "../../assets/couch1.jpg";
import couch2 from "../../assets/couch2.jpg";
import couch3 from "../../assets/couch3.jpg";
import logocouch1 from "../../assets/logocouch1.png";
import logocouch2 from "../../assets/logocouch2.png";
import logocouch3 from "../../assets/logocouch3.png";

export default function Home() {
  const { couches, setCouches } = useContext(Context);
  const [visibility, setVisibility] = useState(0);
  const couchPicsHP = [couch1, couch2, couch3];
  const couchlogoPicsHP = [logocouch1, logocouch2, logocouch3];
  const api = useApi();
  useEffect(() => {
    api
      .get("/couches")
      .then(({ data }) => setCouches(data))
      .catch((err) => console.error(err));
  }, []);

  const hLeftVisibility = () => {
    switch (visibility) {
      case 2:
        setVisibility(1);
        break;
      case 3:
        setVisibility(2);
        break;
      case 0:
        setVisibility(3);
        break;
      default:
        setVisibility(0);
    }
  };

  const hRightVisibility = () => {
    switch (visibility) {
      case 0:
        setVisibility(1);
        break;
      case 1:
        setVisibility(2);
        break;
      case 2:
        setVisibility(3);
        break;
      default:
        setVisibility(0);
    }
  };

  return (
    <Style>
      <div className="leftpart">
        <img src={logo} className="logo" alt="logofull" />
        <div className="textleft">
          <p>Marre des console.log? </p>
          <p>Envie d'envoyer vos routes se faire f*****? </p>
          <p className="bigger">
            Prenez une pause bien méritée grâce à <em>Wild'zzz</em>!
          </p>
          <p>
            Choisissez un canapé parmi notre gamme de produits et effectuez
            votre réservation. Attention à ne pas dépenser trop de points dodo
            au risque de vous faire éjecter...{" "}
          </p>
        </div>
      </div>

      <div className="rightpart">
        <button type="button" onClick={hLeftVisibility} className="arrow left">
          &#x3008;
        </button>
        <section className={visibility === 0 ? "visible" : "hidden"}>
          <h1>Découvrez notre gamme de produit...</h1>
        </section>
        {couches.map((couch, index) => (
          <section
            className={
              visibility === parseInt(couch.id, 10) ? "visible" : "hidden"
            }
          >
            <img
              src={couchPicsHP[index]}
              className="couchpic"
              alt="couchpicture"
            />
            <img
              src={couchlogoPicsHP[index]}
              className="logocouchpic"
              alt="couchlogopicture"
            />
            <h2 className={`couch${index}`}>{couch.name}</h2>
            <p className={`couchdescription${index}`}>{couch.description}</p>
          </section>
        ))}
        <button
          type="button"
          className="arrow right"
          onClick={hRightVisibility}
        >
          &#x3009;
        </button>
      </div>
    </Style>
  );
}
