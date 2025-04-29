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
    <div className="bg-very-dark-blue-card-bg rounded-[0.9375rem] p-[1.5rem] w-full max-w-[21.875rem] m-[1.5rem]">
      <Image src={image.src} alt={image.alt} width={302} height={302} />

      <a href={title.link} className="heading ">
        {title.text}
      </a>

      <p>{description}</p>

      <p className="text-cyan caption-bold">{price}</p>

      <p className="caption">{timeLeft}</p>

      <hr className="border-very-dark-blue-line"/>

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
  );
}
