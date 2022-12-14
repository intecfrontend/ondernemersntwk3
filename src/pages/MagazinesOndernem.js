import HeaderInputOnd from '../components/headerInputOnd';

import HeaderInput from '../components/headerInput';
import MagazinesCardsContainer from '../components/MagazineItems/Item-magazineCont'
import MagazinesSideleft from '../components/MagazineItems/MagazinesSideleft'

function SearchPage() {
  return (
    <div className="App">
      <div className="ONntwk__main">
        <div className="ONntwk__mainVertical ">
          <HeaderInputOnd />
          <div className="ONntwk__sidecardeswrap">
            <MagazinesSideleft />
            <MagazinesCardsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
