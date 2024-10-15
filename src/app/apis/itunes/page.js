import Card from './_helper_components/Card';
import { StyledGrids } from '../../styled/Grids.styled';

export default async function Page() {
  const baseSearchString = 'http://itunes.apple.com/search';
  // const artist = document.querySelector('#artist').value;
  // const track_name = document.querySelector('#track_name').value;

  const artist = 'Charlie+Puth';
  const trackName = 'Light+Switch';

  const getData = async () => {
    const response = await fetch(
      `${baseSearchString}?term=${artist}+${trackName}&entity=musicTrack`
    );

    return response.json();
  };

  const data = await getData();

  console.log('results: ', data?.results);

  return (
    <>
      <h1>Audio Samples</h1>
      <StyledGrids>
        {data?.results.map((song) => {
          return <Card song={song} />;
        })}
      </StyledGrids>
    </>
  );
}

// export default Page;
