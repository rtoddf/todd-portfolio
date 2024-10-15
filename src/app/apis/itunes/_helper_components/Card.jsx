// import { StyledGrids } from '../../../styled/Grids.styled';

function Card(song) {
  return (
    <div>
      <img src={song?.song?.artworkUrl100} />
      <p>
        Track: {song?.song?.artistName} - {song?.song?.trackName} -{' '}
        {song?.song?.collectionName}
      </p>
      <p>Genre: {song?.song?.primaryGenreName}</p>
      <audio controls>
        <source src={song?.song?.previewUrl} />
      </audio>
    </div>
  );
}

export default Card;
