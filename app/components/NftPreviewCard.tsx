import iconClock from "@/public/icon-clock.svg";
import iconEthereum from "@/public/icon-ethereum.svg";
import iconView from "@/public/icon-view.svg";

import Image from "next/image";

interface imageProps {
  src: string;
  alt: string;
}

export interface NftPreviewCardProps {
  image: imageProps;
  title: {
    text: string;
    link: string;
  };
  description: string;
  price: string;
  timeLeft: string;
  author: {
    image: imageProps;
    name: string;
    link: string;
  };
}

export default function NftPreviewCard({
  image,
  title,
  description,
  price,
  timeLeft,
  author,
}: NftPreviewCardProps) {
  return (
    <div className="bg-very-dark-blue-card-bg rounded-[0.9375rem] p-[1.5rem] w-full max-w-[21.875rem] m-[1.5rem] flex flex-col gap-[1.5rem]">
      <img src={image.src} alt={image.alt} className="rounded-[0.5rem]" />

      <div className="flex flex-col gap-[1rem]">
        <div className="flex flex-col gap-[0.75rem]">
          <a href={title.link} className="heading ">
            {title.text}
          </a>

          <p>{description}</p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-[0.375rem]">
            <Image src={iconEthereum} alt="" />
            <p className="text-cyan caption-bold">{price}</p>
          </div>

          <div className="flex items-center gap-[0.375rem]">
            <Image src={iconClock} alt="" />
            <p className="caption">{timeLeft}</p>
          </div>
        </div>

        <hr className="border-very-dark-blue-line" />

        <div className="flex flex-row items-center gap-[0.9375rem]">
          <Image
            src={author.image.src}
            alt={author.image.alt}
            width={33}
            height={33}
            className="border-[1px] border-white rounded-full"
          />

          <p className="caption">
            Creation of <a href={author.link}>{author.name}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
