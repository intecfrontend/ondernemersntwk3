import React from 'react'
import styled from 'styled-components';
import cornericon from "./cornericon.svg"
import ADlogo from "./magazines_assets/adlogo.png"


const Container = styled.div`
width: 20vw;
min-width: 240px;

height: calc(100vh - 40px);
background: #f1f2f2;
font-size: 14px;
`;

const Bluesidebar = styled.div`
border-left: 13px #1394d2 solid;
background: #bcbec0;
display: flex;
align-items: center;
padding-left: 20px;
width: 100%;
height: 35px
`;
const Orangesidebar = styled.div`
border-left: 13px #e87a1a solid;
background: #bcbec0;
display: flex;
align-items: center;
padding-left: 20px;
width: 100%;
height: 35px
`;
const Brownsidebar = styled.div`
border-left: 13px #9e3d97 solid;
background: #bcbec0;
display: flex;
align-items: center;
padding-left: 20px;
width: 100%;
height: 35px
`;
const Nosidebar = styled.div`
border-left: 13px #e6e7e8 solid;
background: #e6e7e8;
display: flex;
align-items: center;
padding-left: 20px;
width: 100%;
height: 35px
`;
const ADlogowrap = styled.img`
width: 15vw;
min-width: 180px;
`;
const ADlogosetter = styled.div`
display: flex;
justify-content: center;
`;
const Onderlogotxt = styled.div`
width: 100%;
font-size: 10px;
text-align: center;
margin:0vw 0vw 2vw 0vw;
`;
const Logotxt = styled.div`
width: 100%;
text-align: center;
font-weight: 600;`;
const Btncontainer = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;`;


export default function MagazinesSideleft() {
  return (
    <>
      <Container>
        <div className="ONntwk__bluecardnobg">
          <span>
            <img className="ONntwk__cornericonleft" src={cornericon} alt="cornericon" />
          </span> GA TERUG
        </div>
        <ADlogosetter>
        <ADlogowrap src={ADlogo} alt="ADlogo" />
        </ADlogosetter>
        <Logotxt>AD DELHAIZE TERNAT </Logotxt>
        <Onderlogotxt>3.700 VOLGERS</Onderlogotxt>
        <Btncontainer>
          <div className="ONntwk__bluecardbtn ONntwk__btncont">
            <div className="ONntwk__bluecardbtn ONntwk__regularbtn">VOLGEN  </div>
          </div></Btncontainer>
        <Bluesidebar>INFO & MAGAZINES (2)</Bluesidebar>
        <Nosidebar>JAARFOLDER</Nosidebar>
        <Nosidebar>DELHAIZE MAGAZINES</Nosidebar>
        <Brownsidebar>PROMO’S</Brownsidebar>
        <Orangesidebar>BUSINESS PAGE</Orangesidebar>
      </Container>
    </>
  )
}
