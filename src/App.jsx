import pavan from "./pavan.jpg";
import pavan1 from "./pavan1.jpg";
import pavan2 from "./pavan2.jpg";
import { ImFacebook2 } from "react-icons/im";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import "./styles.scss";
function App() {
  return (
    <>
      <div className="App">
        <h1>Kona Pavan</h1>
        <img src={pavan} alt="x" />
        <Link url={Insta("_pavan_kona_/")} className={"insta"}>
          <BsInstagram />
          Instagram
        </Link>

        <img src={pavan1} alt="x" />
        <Link url={FB("pavankumar.kona.5")} className={"fb"}>
          <ImFacebook2 />
          Facebook
        </Link>

        <img src={pavan2} alt="x" />
        <Link url={WA("9553443471")} className={"wa"}>
          <BsWhatsapp />
          Whatsapp
        </Link>
      </div>
    </>
  );
}

function WA(num) {
  return `https://api.whatsapp.com/send/?phone=${num}&text&type=phone_number&app_absent=0`;
}
function FB(id) {
  return `https://www.facebook.com/${id}`;
}
function Insta(id) {
  return `https://www.instagram.com/${id}`;
}

function Link({ className, children, url }) {
  return (
    <>
      <center className="center">
        <div className={"link " + className}>
          <a href={url} rel="noreferrer" target="_blank">
            {children}
          </a>
        </div>
      </center>
    </>
  );
}

export default App;
