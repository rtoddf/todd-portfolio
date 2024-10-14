import axios from 'axios';
import { StyledGrids } from '../styled/Grids.styled';

function Page() {
  const getData = () => {
    axios
      .get(
        'http://itunes.apple.com/search?term=Charlie+Puth+Light+Switch&entity=musicTrack'
      )
      .then((response) => {
        console.log('response: ', response.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  console.log('blip');

  getData();

  return (
    <StyledGrids>
      <h1>Grids 01</h1>
      <h1>Grids 02</h1>
      <h1>Grids 03</h1>
    </StyledGrids>
  );
}

export default Page;
