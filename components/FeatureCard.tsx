import { FC } from "react";
import Image from "next/image";

interface IFeatureCard {
  image: string;
  title: string;
  description: string;
}

export const FeatureCard: FC<IFeatureCard> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <Image
        src={image}
        alt=""
        width={100}
        height={50}
        className=" w-full h-[14rem] object-cover rounded-lg object-center bg-red-600"
        unoptimized
      />
      <div>
        <h3 className="font-semibold text-lg capitalize my-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
