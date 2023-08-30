import { useState } from "react";
import pavan from "./pavan.jpg";
import pavan1 from "./pavan1.jpg";
import pavan2 from "./pavan2.jpg";
import "./styles.scss";
function App() {
  return (
    <>
      <div className="App">
        <h1>Kona Pavan</h1>
        <img src={pavan} alt="x" />
        <Link
          href={"https://www.instagram.com/_pavan_kona_/"}
          className={"insta"}
        >
          Instagram
        </Link>

        <img src={pavan1} alt="x" />
        <Link
          url={"https://www.facebook.com/pavankumar.kona.5"}
          className={"fb"}
        >
          Facebook
        </Link>

        <img src={pavan2} alt="x" />
        <Link url={WA("9553443471")} className={"wa"}>
          {" "}
          Whatsapp{" "}
        </Link>
      </div>
    </>
  );
}

function WA(num) {
  return `https://api.whatsapp.com/send/?phone=${num}&text&type=phone_number&app_absent=0`;
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
