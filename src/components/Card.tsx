import { useRef } from "react";
import Button from "./Button";

export type CardProps = {
  imgUrl: string;
  name: string;
  group: string;
  avgPrice: number | null;
};

const Card = ({ imgUrl, name, group, avgPrice }: CardProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const onImageError = () => {
    if (imgRef.current) {
      imgRef.current.src = "/img/default.png";
      imgRef.current.className = "object-contain w-full h-64";
    }
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
      <img
        ref={imgRef}
        className="object-cover w-full h-64"
        src={imgUrl}
        alt={name}
        onError={onImageError}
      />
      <div className="py-6 p-5">
        <p className="text-3xl font-bold text-teal-600">{name}</p>
        <p className="text-slate-900 mt-3">
          Region: <strong>{group ? group : "-"}</strong>
        </p>
        <p className="text-slate-900 mt-1">
          Average Price:{" "}
          <strong>
            {avgPrice !== null
              ? Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(avgPrice)
              : "-"}
          </strong>
        </p>
        <Button text="View Houses" />
      </div>
    </div>
  );
};

export default Card;
