import React from 'react'
import ONcatnetwerklogo from "../assets/ONcatnetwerk.svg"
import ONnetwerklogo from "../assets/ONnetwerk.svg"
import Input from "./inputfield"
import  Headerright  from './headerright';


export default function headerInput() {
  return (
    <div>
      <div className="ONntk__header">      <img src={ONnetwerklogo} alt="ONlogo" className="ONntwk__headerONLogo" />

      <img src={ONcatnetwerklogo} alt="ONlogo" className="ONntwk__catLogo" />
        <div className="ONntwk__HeaderInputplacer">
          <Input placeholder={"Ternat"} linker={"magazines/"} ondertxt={""} />
        </div>

        <Headerright/>
      </div>
    </div >
  )
}
