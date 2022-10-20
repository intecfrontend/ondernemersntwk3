import React from 'react'
import "../App.css"
import amuna from "../assets/magitems/amuna.jpg"
import styled from 'styled-components';
// import axios from 'axios'

const UitschuifConsu = styled.div`
width: 215px;
height: 400px;
background:red;
box-shadow: rgba(99, 99, 99, 0.6) 2px 2px 4px 2px;
position:absolute;
z-index:999; 
top: 45px; 
left: calc(100vw - 268px);
border-radius: 0  0 5px 5px
`;
const Iddiv = styled.div`
width: 215px;
height: 70px;
border-bottom:gold 1px solid;
font-size:12px;
display: flex;
align-items: center;
`;
const Fotoconsument = styled.img`
width: 45px;
height: 45px;
margin: 10px;
object-fit: cover;

border:black 1px solid;
font-size:10px;
border-radius: 50%
`;

function Headerright(props) {


  return (
    <>
      <div className="ONntwk__buttonHeaderwrapper ">
        <div className="ONntwk__bluecardbtn ONntwk__btncont">
          <div className="ONntwk__bluecardbtn ONntwk__regularbtn">ALLE NETWERKEN </div>
        </div>
        <div className="ONntwk__bluecardbtn ONntwk__btncontaanmelden">
          <div className="ONntwk__bluecardbtn ONntwk__regularbtn">AANMELDEN</div>
        </div>



        <UitschuifConsu>
          <Iddiv>
            <Fotoconsument src={amuna} alt="fotoconsument" />
            <div> <strong>Amuna Vercruysse</strong><br/>
            am.vercruysse@idb.be</div>

          </Iddiv>
        </UitschuifConsu>



        <select className="ONntwk__bluecardbtn ONntwk__taalbtn">
          <option className="ONntwk__taalOptie" value="NL">NL</option>
          <option className="ONntwk__taalOptie" value="FR">FR</option>
          <option className="ONntwk__taalOptie" value="EN">EN</option>
          <option className="ONntwk__taalOptie" value="DE">DE</option>
        </select>
      </div>
    </>
  )
}
export default Headerright