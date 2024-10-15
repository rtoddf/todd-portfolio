import { StyledGrids } from '../styled/Grids.styled';

export default async function Page() {
  const getData = async () => {
    const response = await fetch(
      `http://itunes.apple.com/search?term=Charlie+Puth+Light+Switch&entity=musicTrack`
    );

    return response.json();
  };

  const data = await getData();

  console.log('results: ', data?.results);

  return (
    <StyledGrids>
      {data?.results.map((song) => {
        return <p>{song?.trackName}</p>;
      })}
    </StyledGrids>
  );
}

// export default Page;
