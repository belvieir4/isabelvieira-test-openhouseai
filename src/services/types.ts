export type Community = {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
};

export type Type = "House" | "Townhouse" | "Condo" | "Duplex";

export type Home = {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: Type;
};
