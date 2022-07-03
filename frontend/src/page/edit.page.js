import { Box } from "../components/atoms/Box";
import { UpdateArtist } from "../forms/Artist/update";

const ArtistEditPage = () => {
  return (
    <Box className="p-5 bg-slate-50">
      <UpdateArtist />
    </Box>
  );
};

export default ArtistEditPage;
