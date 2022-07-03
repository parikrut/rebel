import { Link } from "react-router-dom";
import { Bubble } from "../../atoms/Bubble";
import { Button } from "../../atoms/Button";
import { ArtistCard } from "../../molecules/ArtistCard";

export const Artist = ({ artist, Delete, Update }) => {
  return (
    <>
      <div className="flex flex-row justify-between mb-5">
        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center">
            <Bubble color="green"></Bubble> &nbsp;{" "}
            <div className="text-sm font-bold text-slate-600">Paid</div>
          </div>
          <div className="flex flex-row items-center">
            <Bubble color="red"></Bubble> &nbsp;{" "}
            <div className="text-sm font-bold text-slate-600">Not Paid</div>
          </div>
        </div>
        <div>
          <Link
            to={{
              pathname: "/create",
            }}
          >
            <Button>Create Artist </Button>
          </Link>
        </div>
      </div>
      <div className=" grid md:grid-cols-3 gap-10">
        {artist?.map((item) => {
          return (
            <ArtistCard
              key={item.id}
              artist={item}
              Delete={Delete}
              Update={Update}
            />
          );
        })}
      </div>
    </>
  );
};
