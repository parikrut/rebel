import { Box } from "../../atoms/Box";
import Avatar from "react-avatar";
import { Bubble } from "../../atoms/Bubble";
import { Button } from "../../atoms/Button";
import { Link } from "react-router-dom";

export const ArtistCard = ({ artist, Delete, Update }) => {
  const DesktopOnly = "hidden md:block";
  return (
    <Box className="p-5 ">
      <div className="flex flex-row gap-4 items-center">
        <div>
          <Avatar size={60} className="rounded-full " name={artist?.artist} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between gap-4">
            <div className="text-2xl underline underline-offset-2 capitalize font-semibold text-slate-600">
              {artist?.artist}
            </div>
            <div>
              {artist?.payout ? (
                <Bubble color="green"></Bubble>
              ) : (
                <Bubble color="red"></Bubble>
              )}
            </div>
          </div>
          <div className="text-sm font-normal text-slate-600 flex flex-col md:flex-row gap-4">
            <div>Rate: &nbsp; ${artist?.rate}</div>
            <div className={DesktopOnly}>|</div>
            <div>Stream: &nbsp; {artist?.streams}</div>
          </div>
          <div className="text-sm font-bold text-slate-600 flex flex-col md:flex-row gap-4">
            <div>Total Payout Amount: &nbsp; ${artist?.amount}</div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-row gap-4 justify-between">
        <Button
          onClick={() => Delete(artist?.id)}
          className="w-full"
          color="danger"
        >
          Delete
        </Button>
        <Button
          onClick={() =>
            Update({ id: artist?.id, data: { payout: !artist?.payout } })
          }
          className="w-full"
          color="primary"
        >
          {artist?.payout ? "Paid" : "Pay"}
        </Button>
        <div>
          <Link to={`/${artist?.id}`}>
            <Button className="w-full" color="outlined">
              Edit
            </Button>
          </Link>
        </div>
      </div>
    </Box>
  );
};
