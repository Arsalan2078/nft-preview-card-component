import NftPreviewCard, {
  NftPreviewCardProps,
} from "./components/NftPreviewCard";

export default function Home() {
  const nftPreviewCard: NftPreviewCardProps = {
    image: {
      src: "/image-equilibrium.jpg",
      alt: "",
    },
    title: {
      link: "#",
      text: "Equilibrium #3429",
    },
    description: "Our Equilibrium collection promotes balance and calm.",
    price: "0.041 ETH",
    timeLeft: "3 days left",
    author: {
      image: {
        src: "/image-avatar.png",
        alt: "",
      },
      link: "#",
      name: "Jules Wyvern",
    },
  };

  return (
    <main className="flex justify-center items-center min-h-svh bg-very-dark-blue-main-bg text-soft-blue">
      <NftPreviewCard
        image={nftPreviewCard.image}
        title={nftPreviewCard.title}
        description={nftPreviewCard.description}
        price={nftPreviewCard.price}
        timeLeft={nftPreviewCard.timeLeft}
        author={nftPreviewCard.author}
      />
    </main>
  );
}
