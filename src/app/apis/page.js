import { StyledGrids } from '../styled/Grids.styled';

function Page() {
  return (
    <StyledGrids>
      <h1>Projects</h1>
      <p>
        <a href={`/apis/itunes`}>iTunes examples</a>
      </p>
    </StyledGrids>
  );
}

export default Page;
