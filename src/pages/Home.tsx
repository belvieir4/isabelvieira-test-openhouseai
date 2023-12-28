import Card from "@/components/Card";
import { getAllCommunities, getAllHouses } from "@/services/endpoints";
import { Community } from "@/services/types";
import { useQuery } from "react-query";

export default function Home() {
  const commQuery = useQuery({
    queryKey: ["community", "list"],
    queryFn: getAllCommunities,
  });
  const houseQuery = useQuery({
    queryKey: ["house", "list"],
    queryFn: getAllHouses,
  });

  const sortAlphabetically = (a: Community, b: Community) => {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    return 0;
  };

  const cards =
    commQuery.data?.sort(sortAlphabetically).map((comm) => {
      const housesByComm =
        houseQuery.data?.filter((house) => house.communityId === comm.id) || [];
      const total = housesByComm.reduce((acc, cur) => acc + cur.price, 0);

      return {
        ...comm,
        averagePrice:
          housesByComm.length > 0 ? total / housesByComm.length : null,
      };
    }) || [];

  return (
    <div className="flex flex-col align-center flex-1">
      <h1 className="text-4xl sm:text-5xl text-orange-600 font-extrabold mt-8">
        Geographic Communities
      </h1>
      <p className="mt-4 text-slate-900">
        Front-end Development coding exercise by Isabel Vieira
      </p>
      {commQuery.error || houseQuery.error ? (
        <div className="mt-10 flex flex-col align-center justify-center flex-1">
          <p className="text-center text-2xl sm:text-3xl text-teal-600 font-bold">
            Something went wrong! :(
          </p>
          <p className="mt-4 text-center">
            We couldn't load any data. Refresh your page or try again later.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid w-full grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-6">
          {cards.map((card) => (
            <Card
              imgUrl={card.imgUrl}
              name={card.name}
              group={card.group}
              avgPrice={card.averagePrice}
            />
          ))}
        </div>
      )}
    </div>
  );
}
