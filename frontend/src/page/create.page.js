import { Box } from "../components/atoms/Box";
import { CreateArtist } from "../forms/Artist/create";

const ArtistCreatePage = () => {
  return (
    <Box className="p-5 bg-slate-50">
      <CreateArtist />
    </Box>
  );
};

export default ArtistCreatePage;
