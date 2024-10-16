// import axios from 'axios';
import { StyledGrids } from '../styled/Grids.styled';

export default async function Page() {
  const getData = async () => {
    const response = await fetch(
      `http://itunes.apple.com/search?term=Charlie+Puth+Light+Switch&entity=musicTrack`
    );

    return response.json();
  };

  const data = await getData();

  console.log('manny results: ', data?.results);

  return <h1>grids</h1>;
}

// export default Page;
