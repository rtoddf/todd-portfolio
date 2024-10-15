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

  return (
    <StyledGrids>
      {data?.results.map((song) => {
        return <p>{song?.trackName}</p>;
      })}
      {/* <h1>Grids 01</h1>
      <h1>Grids 02</h1>
      <h1>Grids 03</h1> */}
    </StyledGrids>
  );
}

// export default Page;
